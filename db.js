const mongoose = require('mongoose');
require('dotenv').config();

const mongoUrl = process.env.MONGODB_URL;

mongoose.connect(mongoUrl)
  .then(() => {
    console.log("✅ Connected to MongoDB server");
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1);
  });

const db = mongoose.connection;

db.on('disconnected', () => {
  console.log("⚠️ Disconnected from MongoDB server");
});

module.exports = db;
