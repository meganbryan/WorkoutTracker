const router = require("express").Router();
const db = require("../models");

router.get("/api/workouts", (req, res) => {
    console.log("This works")
    db.Workout.find({})
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
    db.Workout.find({})
    .sort({_id: -1})
    .limit(7)
    .then(data =>{
        res.send(data);
    })
    .catch(error => res.send(error));
})

module.exports = router;