const express = require('express');
const router = express.Router();
const { getAll, create, get, remove, search, update, seed } = require('../models/workouts')

router.get('/', (req, res, next) => {
    getAll()
    .then((workouts) => {
        res.send(workouts);
    }).catch(next);
})
.get('/search', (req, res, next) => {
    search(req.query.q)
    .then((results) => {
        res.send(results);
    }).catch(next);
})
.get('/:id', (req, res, next) => {
    get(+req.params.id)
    .then((workout) => {
        if(workout) {
            res.send(workout);
        } else {
            res.status(404).send({error: 'workout not found'});
        }
    }).catch(next); 
})
.post('/', (req, res, next) => {
    create(req.body)
    .then((workout) => {
        res.send(workout);
    }).catch(next);
})
.patch('/:id', (req, res, next) => {

    req.body.id = +req.params.id;
    update(req.body)
    .then((workout) => {
        res.send(workout);
    }).catch(next);
})
.delete('/:id', (req, res, next) => {
    remove(+req.params.id)
    .then(() => {
        res.send({message: 'Workout has been removed'});
    }).catch(next);
})
.post('/seed', (req, res, next) => {
    seed()
    .then(() => {
        res.send({message: "Workouts seeded"});
    }).catch(next);
});

module.exports = router;
