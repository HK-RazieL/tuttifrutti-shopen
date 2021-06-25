const express = require("express");
const mongoose = require("mongoose");


mongoose.connect("mongodb://localhost/tuttifrutti-shopen", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Connected to DB");
});

const Fruit = require("./Schemas/FruitSchema");

var router = express.Router();

router.get("/", (req, res) => {
    res.send("test");
});

module.exports = router;