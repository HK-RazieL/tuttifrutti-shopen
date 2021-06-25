const mongoose = require("mongoose");

const fruitSchema = new mongoose.Schema({
    fruit_name: String,
    color: String,
    price: Number,
    unit: String,
    comments: String,
    pres_or_abs_ent: Boolean
});

module.exports = mongoose.model("Fruit", fruitSchema);