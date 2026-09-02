const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Farmer Ecommerce API is running");
});

app.get("/api/test", (req, res) => {
    res.json({
        message: "API connection successful"
    });
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});