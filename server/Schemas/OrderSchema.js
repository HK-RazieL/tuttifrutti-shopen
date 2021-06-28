const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    client: String,
    order: [],
    date: Date,
    status: String
});

module.exports = mongoose.model("Order", orderSchema);