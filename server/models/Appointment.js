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
            type: String, // stored as "YYYY-MM-DD" from the date input
            required: true,
        },
        preferredTime: {
            type: String, // e.g. "Morning", "Afternoon", "Evening"
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
    { timestamps: true } // adds createdAt / updatedAt automatically
);

module.exports = mongoose.model("Appointment", appointmentSchema);