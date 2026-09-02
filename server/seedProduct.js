const mongoose = require("mongoose");
require("dotenv").config();

const Product = require("./models/Product");

const products = [
    {
        name: "Premium Wheat Seeds",
        category: "Seeds",
        description: "High-quality wheat seeds for better crop yield.",
        price: 499,
        stock: 100,
        suitableCrops: ["Wheat"]
    },
    {
        name: "Premium Rice Seeds",
        category: "Seeds",
        description: "Quality rice seeds suitable for rice cultivation.",
        price: 549,
        stock: 100,
        suitableCrops: ["Rice"]
    },
    {
        name: "Hybrid Maize Seeds",
        category: "Seeds",
        description: "High-yield hybrid maize seeds.",
        price: 449,
        stock: 80,
        suitableCrops: ["Maize"]
    },
    {
        name: "Organic Fertilizer",
        category: "Fertilizers",
        description: "Natural fertilizer for healthy crop growth.",
        price: 699,
        stock: 50,
        suitableCrops: ["Wheat", "Rice", "Maize", "Potato", "Tomato", "Cotton"]
    },
    {
        name: "Vegetable Fertilizer",
        category: "Fertilizers",
        description: "Fertilizer specially designed for vegetable crops.",
        price: 599,
        stock: 60,
        suitableCrops: ["Potato", "Tomato"]
    },
    {
        name: "General Farming Tool Kit",
        category: "Tools",
        description: "Essential tools for everyday farming activities.",
        price: 899,
        stock: 30,
        suitableCrops: ["Wheat", "Rice", "Maize", "Potato", "Tomato", "Cotton"]
    }
];

async function seedProducts() {
    try {
        await mongoose.connect(process.env.MONGO_URI);

        await Product.deleteMany();

        await Product.insertMany(products);

        console.log("Products added successfully");

        await mongoose.connection.close();
    } catch (error) {
        console.error("Error adding products:", error);
    }
}

seedProducts();