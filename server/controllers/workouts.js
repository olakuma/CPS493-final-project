const express = require('express');
const router = express.Router();
const { getAll, create, get, remove, search, update } = require('../models/workouts')

router.get('/', (req, res, next) => {
    getAll()
    .then((workouts) => {
        res.send(workouts);
    }).catch(next);
})
.get('/search', (req, res, next) => {
    const results = search(req.query.q);
    res.send(results);
})
.get('/:id', (req, res, next) => {
    const workout = get(+req.params.id);
    if(workout) {
        res.send(workout);
    } else {
        res.status(404).send({error: 'workout not found'});
    }
})
.post('/', (req, res, next) => {
    const workout = create(req.body);
    res.send(workout);
})
.patch('/:id', (req, res, next) => {

    req.body.id = +req.params.id;
    const workout = update(req.body);
    res.send(workout)
})
.delete('/:id', (req, res, next) => {
    remove(+req.params.id);
    res.send({success: 'Workout has been removed'});
})

module.exports = router;
