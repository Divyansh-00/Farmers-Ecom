const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const cropRoutes = require("./routes/cropRoutes");
const productRoutes = require("./routes/productRoutes");
const getWeather = require("./services/weatherService");
const orderRoutes = require("./routes/orderRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/crops", cropRoutes);
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);
app.get("/", (req, res) => {
    res.send("Farmer Ecommerce API is running");
});

app.get("/api/test", (req, res) => {
    res.json({
        message: "API connection successful"
    });
});

app.get("/api/weather/:location", async (req, res) => {
    try {
        const weather = await getWeather(req.params.location);
        res.json(weather);
    } catch (error) {
        console.error("WEATHER ERROR:", error);

        res.status(500).json({
            message: error.message
        });
    }
});

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB connected successfully");

        app.listen(5000, () => {
            console.log("Server running on port 5000");
        });
    })
    .catch((error) => {
        console.error("MongoDB connection failed:", error);
    });