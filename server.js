// Dependencies
const express = require("express");
const mongoose = require("mongoose");

// Express server setup
const PORT = process.env.PORT || 3000; // Heroku setup

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Define public folder
app.use(express.static("public"));

// Mongoose DB Setup
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/budget", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes
// app.use(require("./routes/api.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});