const mongoose = require("mongoose");
require("dotenv").config();

const Crop = require("./models/Crop");

const crops = [
    {
        name: "Wheat",
        minTemperature: 10,
        maxTemperature: 25,
        minHumidity: 40,
        maxHumidity: 70
    },
    {
        name: "Rice",
        minTemperature: 20,
        maxTemperature: 35,
        minHumidity: 60,
        maxHumidity: 90
    },
    {
        name: "Maize",
        minTemperature: 18,
        maxTemperature: 30,
        minHumidity: 50,
        maxHumidity: 80
    },
    {
        name: "Potato",
        minTemperature: 15,
        maxTemperature: 25,
        minHumidity: 50,
        maxHumidity: 80
    },
    {
        name: "Tomato",
        minTemperature: 18,
        maxTemperature: 30,
        minHumidity: 50,
        maxHumidity: 80
    },
    {
        name: "Cotton",
        minTemperature: 21,
        maxTemperature: 35,
        minHumidity: 50,
        maxHumidity: 75
    }
];

async function seedCrops() {
    try {
        await mongoose.connect(process.env.MONGO_URI);

        await Crop.deleteMany();

        await Crop.insertMany(crops);

        console.log("Crops added successfully");

        await mongoose.connection.close();
    } catch (error) {
        console.error("Error adding crops:", error);
    }
}

seedCrops();