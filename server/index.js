require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const blogRoutes = require("./routes/blogs");

const appointmentRoutes = require("./routes/appointments");
const authRoutes = require("./routes/auth");

const app = express();
const PORT = process.env.PORT || 5000;

// Configure CORS to allow your admin panel and main website
const allowedOrigins = [
  'http://localhost:3000',
  'http://localhost:5173',
  'https://tlc-admin-phi.vercel.app',
  'https://tlc-fbt4.onrender.com',
];

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('CORS not allowed'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(express.json());

app.use("/api/appointments", appointmentRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/blogs", blogRoutes);

app.get("/", (req, res) => {
    res.send("TLC Assist Living API is running.");
});

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log("Connected to MongoDB");
        app.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT}`);
        });
    })
    .catch((err) => {
        console.error("MongoDB connection error:", err);
    });