const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            trim: true,
            lowercase: true,
        },
        phone: {
            type: String,
            required: true,
            trim: true,
        },
        gender: {
            type: String,
            default: "",
        },
        dob: {
            type: String, // "YYYY-MM-DD", optional
            default: "",
        },
        emergencyContact: {
            type: String,
            default: "",
        },
        insurance: {
            type: String,
            default: "",
        },
        service: {
            type: String,
            required: true,
        },
        preferredDate: {
            type: String,
            required: true,
        },
        preferredTime: {
            type: String,
            required: true,
        },
        message: {
            type: String,
            default: "",
        },
        status: {
            type: String,
            enum: ["Pending", "Confirmed", "Cancelled", "Completed"],
            default: "Pending",
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Appointment", appointmentSchema);