// server.js
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const studentRoutes = require("./routes/studentRoutes");

// Load env vars (if using .env)
dotenv.config();

// Connect to MongoDB
mongoose
    .connect("mongodb://127.0.0.1:27017/studentdb", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("✅ MongoDB connected"))
    .catch((err) => console.error("❌ MongoDB error:", err));

//  Initialize app here
const app = express();

//  Middlewares
app.use(cors());
app.use(express.json());

//  Routes
app.use("/api/students", studentRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
