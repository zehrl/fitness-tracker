// Mongoose setup
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Schema for Workout collection
const WorkoutSchema = new Schema({

    day: {
        type: Date
    },

    excercises: {
        type: String
    }

});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;