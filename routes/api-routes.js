const router = require("express").Router();
const db = require("../models/index");

const getWorkoutsInRange = () => {
    router.get("/api/workouts", (req, res) => {
        db.Workout.find({})
        .then(data => {
            res.json(data)
        }).catch(error => res.json(error));
    })
}

const getLastWorkout = () => {
    router.get("/api/workouts", (req, res) => {
        db.Workout.findOne().sort({created_at: -1})
        .then(data => {
            res.json(data)
        }).catch(error => res.json(error));
    })
}

const addExercise = (workoutData) => {
    router.post("/api/workouts", (req, res) => {
        db.Workout.create(workoutData).then(data => {
            res.json(data)
        }).catch(error => res.json(error));
    });
}

router.put("/api/workouts/:id", (req, res) => {
    const currentWorkout = req.params.id;
    db.Workout.findByIdAndUpdate(currentWorkout, { $push: { exercises: req.body } })
    .then(workO => {
        res.json(workO)
    }).catch(error => res.json(error));
})

module.exports = router;