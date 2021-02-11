const router = require("express").Router();

// MongoDB Model(s)
const Workout = require("../models/workout");

router.get("/api/workouts", (req, res) => {
    Workout.find({})
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.status(400).json(err);
        });
    // res.send("GET /api/workouts");
});

// router.put("/api/workouts/:id", ({ body }, res) => {
//     Workout.create(body)
//         .then(data => {
//             res.json(data);
//         })
//         .catch(err => {
//             res.status(400).json(err);
//         });
//     // res.send("PUT /api/workouts");
// });

// router.post("/api/workouts", ({body}, res) => {
//     Workout.create(body)
//         .then(data => {
//             res.json(data);
//         })
//         .catch(err => {
//             res.status(400).json(err);
//         });
// });

// router.get("/api/workouts/range", (req, res) => {
//     //   Transaction.find({})
//     //     .sort({ date: -1 })
//     //     .then(dbTransaction => {
//     //       res.json(dbTransaction);
//     //     })
//     //     .catch(err => {
//     //       res.status(400).json(err);
//     //     });
//     res.send("GET /api/workouts/range");
// });

module.exports = router;