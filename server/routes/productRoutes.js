const express = require("express");
const Product = require("../models/Product");

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: "Error fetching products" });
    }
});

router.get("/recommend/:crop", async (req, res) => {
    try {
        const crop = req.params.crop;

        const products = await Product.find({
            suitableCrops: { $regex: new RegExp(`^${crop}$`, "i") }
        });

        res.json(products);
    } catch (error) {
        res.status(500).json({ message: "Error fetching recommendations" });
    }
});
module.exports = router;