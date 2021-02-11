const router = require("express").Router();

// MongoDB Model(s)
// const Transaction = require("../models/transaction.js");

router.get("/api/workouts", ({ body }, res) => {
    //   Transaction.create(body)
    //     .then(dbTransaction => {
    //       res.json(dbTransaction);
    //     })
    //     .catch(err => {
    //       res.status(400).json(err);
    //     });
    console.log("GET /api/workouts");
});

router.put("/api/workouts", ({ body }, res) => {
    //   Transaction.insertMany(body)
    //     .then(dbTransaction => {
    //       res.json(dbTransaction);
    //     })
    //     .catch(err => {
    //       res.status(400).json(err);
    //     });
    console.log("PUT /api/workouts");
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
    console.log("POST /api/workouts");
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
    console.log("GET /api/workouts/range");
});

module.exports = router;