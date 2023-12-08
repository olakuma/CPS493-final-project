
/**
 * @typedef {Object} User
 * @property {number} id - The user's ID.
 * @property {string} firstName - The user's first name.
 * @property {string} lastName - The user's last name.
 * @property {string} email - The user's email address.
 * @property {string} userName - The user's handle.
 * @property {string} password - The user's password.
 * @property {string} role - The user's role.
 * @property {string} isAdmin - Whether the user is an admin.
 * @property {string} picture - The URL of the user's picture.
 */

/**
 * @typedef {Object} Users
 * @property {User[]} users - An array of users.
 */
const data = require("../data/users.json");
const jwt = require("jsonwebtoken");
const { ObjectId, connect } = require('./mongo');

const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN;

/**
* @returns {User[]} An array of products.
*/

const COLLECTION_NAME = 'users';

async function getCollection() {
  const db = await connect();
  return db.collection(COLLECTION_NAME);
}

async function getAll() {
  const col = await getCollection();
  return col.find({}).toArray();
}

/**
* @param {number} id - The product's ID.
*/
async function get(id) {
  const col = await getCollection();
  return await col.findOne({ id: id});
}

async function search(query) {
  const col = await getCollection();
  const users = await col.find({
    $or: [
      { firstName: { $regex: query, $options: 'i' } },
      { lastName: { $regex: query, $options: 'i' } },
      { email: { $regex: query, $options: 'i' } },
      { userName: { $regex: query, $options: 'i' } },
    ],
  }).toArray();
  return users;
}

/**
* @param {User} values - The user to create.
* @returns {Promise<User>} The created user.
*/

async function register(user) {

  const users = await getAll();
  const newUser = {
    id: users.length + 1,
    ...user,
  };
  
  const col = await getCollection();
  const result = await col.insertOne(newUser);
  newUser._id = result._id;
  return newUser;
}

/**
* @param {string} email
* @param {string} password
* @returns {Promise<{ user: userInfo, token: string }>} The created user.
*/
async function login(email, password) {

  if(!email || !password) {
    throw new Error('Email and password are required');
  }
  const col = await getCollection();
  const user = await col.findOne({ email });
  if(!user) {
    throw new Error('User not found');
  } else if(user.password !== password || user.email !== email) {
    throw new Error('Invalid email or password');
  }
  
  const userInfo = { ...user, password: undefined, admin: "true" };
  const token = await generateJWT(user);
  return { user: userInfo, token };
}

async function update(user) {
  const col = await getCollection();
  const result = await col.findOneAndUpdate(
    { id: user.id }, 
    { $set : user },
    { returnDocument: 'after' }
  );
  return result;
}

/**
* @param {number} id - The user's ID.
*/
async function remove(id) {
  const col = await getCollection();
  const result = await col.deleteOne({ id: id });
  return result.deletedCount
}

async function seed() {
  const col = await getCollection();

  await col.insertMany(data.users);
}

function generateJWT(user) {
  return new Promise((resolve, reject) => {
    jwt.sign(user, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN }, (err, token) => {
      if(err) {
        reject(err);
      } else {
        resolve(token);
      }
    });
  });
}

function verifyJWT(token) {
  return new Promise((resolve, reject) => {
    jwt.verify(token, JWT_SECRET, (err, user) => {
      if(err) {
        reject(err);
      } else {
        resolve(user);
      }
    });
  });
}

module.exports = {
 getAll, get, search, update, remove, login, register, generateJWT, verifyJWT, getCollection, COLLECTION_NAME, seed
};
