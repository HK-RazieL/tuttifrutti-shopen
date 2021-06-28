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
const Order = require("./Schemas/orderSchema");

var router = express.Router();

router.post("/add-new-fruit", (req, res) => {
    console.log(req.body)
    const fruit = new Fruit(req.body);
    fruit.save((err, fruit) => {
        if (err) return console.error(err);
        console.log(`-----\nA new FRUIT was added to the DB!\n${fruit}\n-----`);
        res.send(req.status);
    });
});

router.post("/make-order", (req, res) => {
    const order = new Order(req.body);
    
    order.save((err, order) => {
        if (err) return console.error(err);
        console.log(`-----\nA new order has been made!\n${order}\n-----`);
        res.send(JSON.stringify("Your order was made!"));
    });
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

router.get("/shopping-list", (req, res) => {
    Fruit.find({}, (err, result) => {
        if (err) return console.error(err);

        if (!result) {
            res.status(404).send("No stock found");
            return console.error("No stock found");
        }

        res.send(result);
    });
});

router.post("/create-user", (req, res) => {
    const user = new User(req.body);
    user.password = hash(user.password);

    User.findOne({username: user.username}, (err, result) => {
        if (result) {
            res.status(409).send("Username already exists");
            return console.error("Username already exists");
        }
        user.save((err, user) => {
            if (err) return console.error(err);
            console.log(`-----\nA new user was created in the DB!\n${user}!\n-----`);
            res.send(JSON.stringify("New user created"));
        });
    });
});

module.exports = router;