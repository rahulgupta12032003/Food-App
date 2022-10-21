const mongoose = require("mongoose");

// const MONGO_URL = "mongodb+srv://rahulg9838:sDAE44BkkaE0UBoY@cluster0.68iit7k.mongodb.net/food-app";
const MONGO_URL = "mongodb+srv://rahulg9838:sDAE44BkkaE0UBoY@cluster0.68iit7k.mongodb.net/food-app"

mongoose.connect(MONGO_URL, { useUnifiedTopology: true, useNewUrlParser: true });

const db = mongoose.connection;

db.on("connected", () => {
    console.log("Server is Successfully Connected to MONGO DB Database");
})

db.on("error", (err) => {
    console.log("Error: " + err);
})

module.exports = mongoose;