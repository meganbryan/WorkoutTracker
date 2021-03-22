const router = require("express").Router();
const db = require("../models");

router.get("/api/workouts", (req, res) => {
    db.Workout.aggregate([{ $addFields: { totalDuration: { $sum: '$exercises.duration' } } }])
    .then(data => {
        res.send(data)
    })
    .catch(error => res.send(error));
})

router.post("/api/workouts", (req, res) => {
    db.Workout.create({})
    .then(data => {
        res.send(data)
    })
    .catch(error => res.send(error));
});

router.put("/api/workouts/:id", (req, res) => {
    const currentWorkout = req.params.id;
    db.Workout.findByIdAndUpdate(currentWorkout, { $push: { exercises: req.body } })
    .then(data => {
        res.send(data)
    })
    .catch(error => res.send(error));
})

router.get("/api/workouts/range", (req,res)=>{
    db.Workout.aggregate([{ $addFields: { totalDuration: { $sum: '$exercises.duration' } } }])
    .sort({_id: -1})
    .limit(7)
    .then(data =>{
        res.send(data);
    })
    .catch(error => res.send(error));
})

module.exports = router;