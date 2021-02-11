// Mongoose setup
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Schema
const workoutsSchema = new Schema({

    name: {
        type: String,
        trim: true,
        required: "Enter a name for the workout"
    },

    type: {
        type: String,
        required: "Enter a type: cardio or resistance"
    },

    distance: {
        type: Number
    },

    weight: {
        type: Number
    },

    sets: {
        type: Number
    },

    reps: {
        type: Number
    },

    duration: {
        type: Number,
        required: "Enter a duration"
    },

});

const Workouts = mongoose.model("workouts", workoutsSchema);

module.exports = Workouts;