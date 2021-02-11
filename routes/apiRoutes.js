const router = require("express").Router();

// MongoDB Model(s)
const Workouts = require("../models/Workout.js");

router.get("/api/workouts", ({ body }, res) => {
    Workouts.find({})
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.status(400).json(err);
        });
    // res.send("GET /api/workouts");
});

router.put("/api/workouts/:id", ({ body }, res) => {
    Workouts.insert(body)
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.status(400).json(err);
        });
    // res.send("PUT /api/workouts");
});

router.post("/api/workouts", (req, res) => {
    //   Transaction.find({})
    //     .sort({ date: -1 })
    //     .then(dbTransaction => {
    //       res.json(dbTransaction);
    //     })
    //     .catch(err => {
    //       res.status(400).json(err);
    //     });
    res.send("POST /api/workouts");
});

router.get("/api/workouts/range", (req, res) => {
    //   Transaction.find({})
    //     .sort({ date: -1 })
    //     .then(dbTransaction => {
    //       res.json(dbTransaction);
    //     })
    //     .catch(err => {
    //       res.status(400).json(err);
    //     });
    res.send("GET /api/workouts/range");
});

module.exports = router;