const mongoose = require('mongoose');
require('dotenv').config();

//const mongoUrl = "mongodb://127.0.0.1:27017/myDatabase";

//const mongoUrl ="mongodb+srv://manikanta92608:Mani12345@cluster0.5qy06st.mongodb.net/"
const mongoUrl = process.env.MONGODB_URL;
const PORT = process.env.PORT || 3000;
mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('connected', () => {
    console.log("✅ Connected to MongoDB server");
});

db.on('error', (err) => {
    console.error("❌ MongoDB connection error:", err);
});

db.on('disconnected', () => {
    console.log("⚠️ Disconnected from MongoDB server");
});

module.exports = db;
