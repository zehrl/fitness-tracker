// Mongoose setup
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Schema for Workout collection
const workoutSchema = new Schema({

    day: {
        type: Date
    },

    excercises: {
        type: String
    },

    // distance: {
    //     type: Number
    // },

    // weight: {
    //     type: Number
    // },

    // sets: {
    //     type: Number
    // },

    // reps: {
    //     type: Number
    // },

    // duration: {
    //     type: Number,
    //     required: "Enter a duration"
    },

});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;