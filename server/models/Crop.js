const mongoose = require("mongoose");

const cropSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },

    minTemperature: {
        type: Number,
        required: true
    },

    maxTemperature: {
        type: Number,
        required: true
    },

    minHumidity: {
        type: Number,
        required: true
    },

    maxHumidity: {
        type: Number,
        required: true
    }
});

const Crop = mongoose.model("Crop", cropSchema);

module.exports = Crop;