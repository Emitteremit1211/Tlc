const express = require("express");
const router = express.Router();
const Appointment = require("../models/Appointment");

// POST /api/appointments — create a new booking (used by the public Appointment page)
router.post("/", async (req, res) => {
    try {
        const {
            name, email, phone, service, preferredDate, preferredTime,
            message, gender, dob, emergencyContact, insurance,
        } = req.body;

        if (!name || !email || !phone || !service || !preferredDate || !preferredTime) {
            return res.status(400).json({ error: "Missing required fields." });
        }

        const appointment = new Appointment({
            name,
            email,
            phone,
            service,
            preferredDate,
            preferredTime,
            message,
            gender,
            dob,
            emergencyContact,
            insurance,
        });

        const saved = await appointment.save();
        res.status(201).json(saved);
    } catch (err) {
        console.error("Error creating appointment:", err);
        res.status(500).json({ error: "Something went wrong saving the appointment." });
    }
});

// GET /api/appointments — list all bookings (used by the Admin panel)
router.get("/", async (req, res) => {
    try {
        const appointments = await Appointment.find().sort({ createdAt: -1 });
        res.json(appointments);
    } catch (err) {
        console.error("Error fetching appointments:", err);
        res.status(500).json({ error: "Something went wrong fetching appointments." });
    }
});

// PATCH /api/appointments/:id — update status (e.g. mark Confirmed/Cancelled from the admin panel)
router.patch("/:id", async (req, res) => {
    try {
        const { status } = req.body;
        const allowed = ["Pending", "Confirmed", "Cancelled", "Completed"];

        if (!allowed.includes(status)) {
            return res.status(400).json({ error: "Invalid status value." });
        }

        const updated = await Appointment.findByIdAndUpdate(
            req.params.id,
            { status },
            { new: true }
        );

        if (!updated) {
            return res.status(404).json({ error: "Appointment not found." });
        }

        res.json(updated);
    } catch (err) {
        console.error("Error updating appointment:", err);
        res.status(500).json({ error: "Something went wrong updating the appointment." });
    }
});

// DELETE /api/appointments/:id — remove a booking (used by the Admin panel)
router.delete("/:id", async (req, res) => {
    try {
        const deleted = await Appointment.findByIdAndDelete(req.params.id);

        if (!deleted) {
            return res.status(404).json({ error: "Appointment not found." });
        }

        res.json({ message: "Appointment deleted." });
    } catch (err) {
        console.error("Error deleting appointment:", err);
        res.status(500).json({ error: "Something went wrong deleting the appointment." });
    }
});

module.exports = router;