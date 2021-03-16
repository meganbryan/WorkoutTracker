const router = require("express").Router();
const db = require("../models");

router.get("/api/workouts", (req, res) => {
    db.Workouts.findOne({})
    .sort({created_at: -1})
    .then(data => {
        res.send(data)
    })
    .catch(error => res.send(error));
})

router.post("/api/workouts", (req, res) => {
    db.Workouts.create({}).then(data => {
        res.send(data)
    })
    .catch(error => res.send(error));
});

router.put("/api/workouts/:id", (req, res) => {
    const currentWorkout = req.params.id;
    db.Workouts.findByIdAndUpdate(currentWorkout, { $push: { exercises: req.body } })
    .then(data => {
        res.send(data)
    })
    .catch(error => res.send(error));
})

router.get("/api/workouts/range", (req,res)=>{
    db.Workouts.find({})
    .sort({_id: -1})
    .limit(7)
    .then(data =>{
        res.send(data);
    })
    .catch(error => res.send(error));
})

module.exports = router;