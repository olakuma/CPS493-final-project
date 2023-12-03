const { ObjectId, connect } = require('./mongo')
const data = require('../data/workouts.json');

const COLLECTION_NAME = 'workouts';

async function getCollection() {
    const db = await connect();
    return db.collection(COLLECTION_NAME);
}

/**
 * Returns all products.
 * @returns {Promise<Workout[]>} An array of workouts
 */
async function getAll() {
    const col = await getCollection();
    return col.find({}).toArray();
}

/**
 * @param {string} id - The workout's ID.
 */

async function get(id) {
    const col = await getCollection;
    return await col.findOne({ _id: ObjectId(id) });
}

/**
 * @param {string} email - The workout's email.
 */

async function getByEmail(email) {
    const col = await getCollection;
    return await col.findOne({ email });
}

async function search(query) {
    const col = await getCollection();
    const workouts = await col.find({
        $or: [
            { title: { $regrex: query, $options: 'i' } },
            { description: { $regrex: query, $options: 'i' } },
        ],
    }).toArray
    return workouts;
}

/**
 * 
 * @param {Workout} workout - The workout to see
 * @returns {Promise<Workout>} The created workout
 */
async function create(workout) {
    const newWorkout = {
        id: data.workouts.length + 1,
        ...workout,
    };
    const col = await getCollection();
    const result = await col.insertOne(newWorkout);
    newWorkout._id = result.insertedId;

    return newWorkout;
}

async function update(workout) {
    const col = await getCollection();
    const result = await col.findOneAndUpdate(
        { _id: ObjectId(workout.id) },
        { $set: workout },
        { returnDocument: 'after' }
    );
    return result;
}

/**
 * @param {number} id - The workout's ID.
 */
async function remove(id) {
    const col = await getCollection();
    const result = await col.deleteOne({ _id: ObjectId(id) });
    if(result.deletedCount === 0) {
        throw new Error('Workout not found');
    }
}

async function seed() {
    const col = await getCollection();

    await col.insertMany(data.workouts);
}

module.exports = {
    getAll,
    get,
    getByEmail,
    search,
    create,
    update,
    remove,
    getCollection,
    COLLECTION_NAME,
    seed
};
