 const express = require("express");
const mongoose = require('mongoose');
const { type } = require("os");
const app = express();

app.use(express.json()); // Middleware to parse JSON bodies

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/Flipcart', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected to MongoDB!");
    })
    .catch(err => console.log("Connection error:", err));

// Define the schema
const mobilesSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        // maxLength:10,
        // trim : true,
        // minLength:3,
    },
    company: {
        type: String,
        lowercase : true,
        // unique : true,
        enum:{
            values:"available",
            message:"Available , unAvailable"
        }
    },
    color: {
        type: String,
        uppercase : true
    },
    price: {
        type: Number,
        required:true,
        // min:0,
        // max:50000
    },
    discount:{
        type:Number,
        default:0
    }
});

// Define the model
const Mobile = mongoose.model("Mobile", mobilesSchema);

// Define the data
const myMobiles = [
    {
        title: "Nokia 1200",
        company: "Japan",
        color: "White",
        price: 1500,
        status : "available"
    },
    {
        title: "Xiaomi",
        company: "South_Korea",
        color: "DarkLite",
        price: 19999
    },
    {
        title: "Vivo_5G",
        company: "China",
        color: "RoyalBlue",
        price: 14599
    },
    {
        title: "Lava Blaze",
        company: "India",
        color: "RedBlack",
        price: 10599
    },
];

// Save data to the database
Mobile.insertMany(myMobiles)
    .then((res) => {
        console.log("Mobiles saved successfully:", res);
    })
    .catch(err => console.log("Error:", err));

// Start the server (optional, if you want to handle HTTP requests)
app.listen(3000, () => {
    console.log("Server running on port 3000");
});
