const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ error: "Email and password are required." });
        }

        const validEmail = email === process.env.ADMIN_EMAIL;
        const validPassword = await bcrypt.compare(password, process.env.ADMIN_PASSWORD_HASH);

        if (!validEmail || !validPassword) {
            return res.status(401).json({ error: "Invalid email or password." });
        }

        const token = jwt.sign(
            { email },
            process.env.JWT_SECRET,
            { expiresIn: "7d" }
        );

        res.json({ token });
    } catch (err) {
        console.error("Login error:", err);
        res.status(500).json({ error: "Something went wrong logging in." });
    }
});

module.exports = router;