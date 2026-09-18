const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    customer: {
        fullName: String,
        phone: String,
        address: String,
        city: String,
        pinCode: String
    },
    products: [
        {
            productId: mongoose.Schema.Types.ObjectId,
            name: String,
            price: Number,
            quantity: Number
        }
    ],
    totalAmount: Number,
    status: {
        type: String,
        default: "Pending"
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Order", orderSchema);