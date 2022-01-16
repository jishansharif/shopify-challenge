var mongoose = require("mongoose");
var productSchema = new mongoose.Schema({
    productName: String,
    quantity: Number,
    created: {type: Date, default: Date.now},
});
module.exports = mongoose.model("Product", productSchema);