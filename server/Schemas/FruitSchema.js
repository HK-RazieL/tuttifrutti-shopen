const mongoose = require("mongoose");

const fruitSchema = new mongoose.Schema({
    fruit_name: String,
    color: String,
    price: Number,
    unit: String,
    comments: String,
    in_stock: Boolean
});

module.exports = mongoose.model("Fruit", fruitSchema);