const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    date: {
        type: Date,
        default: () => new Date()
    },
    exercises: [
        {
            type: {
                type: String,
                required: "Please enter type",
            },
            name: {
                type: String,
                required: "Please enter name",
            },
            duration: {
                type: Number,
                required: "Please enter duration",
            },
            distance: Number,
            weight: Number,
            reps: Number,
            sets: Number,
        }
    ]
});

const Workouts = mongoose.model("Workouts", WorkoutSchema);

module.export = Workouts;