const express = require("express");
const mongoose = require("mongoose");
const hash = require("./Auth");

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
const User = require("./Schemas/UserSchema");

var router = express.Router();

router.post("/add-new-fruit", (req, res) => {
    const fruit = new Fruit(req.body);

    fruit.save((err, fruit) => {
        if (err) return console.error(err);
        console.log(`-----\nA new FRUIT was added to the DB!\n${fruit}\n-----`);
        res.send(req.status);
    });
});

router.post("/buy-fruit", (req, res) => {
    if (!req.session.authenticated) {
        res.status(403);
    }

    // TODO: handle buy
});

router.post("/login-user", (req, res) => {
    User.findOne({username: req.body.username}, (err, result) => {
        if (err) return console.error(err);
        if (!result) {
            res.status(404).send("No user found");
            return console.error("No user found");
        }

        if (hash(req.body.password) === result.password) {
            req.session.authenticated = true;
            console.log(`-----\nUser "${req.body.username}" successfully logged in!\n-----`);
            res.send(JSON.stringify("Success!"));
        }
    });
});

router.post("/shopping-list", (req, res) => {
    res.send(req);
});

router.post("/create-user", (req, res) => {
    const user = new User(req.body);
    user.password = hash(user.password);
    
    user.save((err, user) => {
        if (err) return console.error(err);
        console.log(`-----\nA new user was created in the DB!\n${user}!\n-----`);
        res.send(JSON.stringify("New user created"));
    });
});

module.exports = router;