// @ts-check
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

/**
* @returns {User[]} An array of products.
*/
function getAll() {
 return data.users;
}

/**
* @param {number} id - The product's ID.
*/
function get(id) {
 const item = data.users.find(x => x.id === id);
 if(!item) {
   throw new Error('User not found');
 }
 return item
}

function search(query) {
 return data.users.filter(x => {
   return (
     x.firstName.toLowerCase().includes(query.toLowerCase()) ||
     x.lastName.toLowerCase().includes(query.toLowerCase()) ||
     x.email.toLowerCase().includes(query.toLowerCase()) ||
     x.userName.toLowerCase().includes(query.toLowerCase()) 
   );
 });
}

/**
* @param {User} values - The user to create.
* @returns {User} The created user.
*/
function create(values) {
 const newItem = {
   id: data.users.length + 1,
   ...values,
 };

 data.users.push(newItem);
 return newItem;
}

/**
* @param {User} values - The user to create.
* @returns {User} The created user.
*/
function register(values) {
 // register is like create but with validation
 // and some extra logic

 const exists = data.users.some(x => x.userName === values.userName);
 if(exists) {
   throw new Error('Username already exists');
 }

 if(values.password.length < 8) {
   throw new Error('Password must be at least 8 characters');
 }

 // TODO: Make sure user is create with least privileges

 const newItem = {
   id: data.users.length + 1,
   ...values,
 };

 data.users.push(newItem);
 return newItem;

}

/**
* @param {string} email
* @param {string} password
* @returns {User} The created user.
*/
function login(email, password) {

 const item = data.users.find(x => x.email === email);
 if(!item) {
   throw new Error('User not found');
 }

 if(item.password !== password) {
   throw new Error('Wrong password');
 }

 return item;
}

/**
* @param {User} newValues - The user's new data.
* @returns {User} The updated user.
*/
function update(newValues) {
 const index = data.users.findIndex(p => p.id === newValues.id);
 if(index === -1) {
   throw new Error('User not found');
 }
 data.users[index] = {
   ...data.users[index],
   ...newValues,
 };
 return data.users[index];
}

/**
* @param {number} id - The user's ID.
*/
function remove(id) {
 const index = data.users.findIndex(x => x.id === id);
 if(index === -1) {
   throw new Error('User not found');
 }
 data.users.splice(index, 1);
}


module.exports = {
 getAll, get, search, create, update, remove, login, register
};
