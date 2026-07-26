require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const appointmentRoutes = require("./routes/appointments");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // allows your React app (different port/domain) to call this API
app.use(express.json()); // parses incoming JSON request bodies

// Routes
app.use("/api/appointments", appointmentRoutes);

// Simple health check — useful to confirm the server is up
app.get("/", (req, res) => {
    res.send("TLC Assist Living API is running.");
});

// Connect to MongoDB, then start the server only once the connection succeeds
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