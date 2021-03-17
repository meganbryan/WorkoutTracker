const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
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
            distance: {
                type: Number
            },
            weight: {
                type: Number
            },
            reps: {
                type: Number
            },
            sets: {
                type: Number
            }
        }
    ]
});

const Workout = mongoose.model("Workout", workoutSchema);

module.export = Workout;