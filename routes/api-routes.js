const router = require("express").Router();
const db = require("../models");

router.get("/api/workouts", (req, res) => {
    db.Workouts.find({})
    .then(data => {
        res.json(data)
    }).catch(error => res.json(error));
})

router.get("/api/workouts", (req, res) => {
    db.Workouts.findOne().sort({created_at: -1})
    .then(data => {
        res.json(data)
    }).catch(error => res.json(error));
})

router.post("/api/workouts", (req, res) => {
    db.Workouts.create({}).then(data => {
        res.json(data)
    }).catch(error => res.json(error));
});

router.put("/api/workouts/:id", (req, res) => {
    const currentWorkout = req.params.id;
    db.Workouts.findByIdAndUpdate(currentWorkout, { $push: { exercises: req.body } })
    .then(data => {
        res.json(data)
    }).catch(error => res.json(error));
})

module.exports = router;