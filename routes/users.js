const express = require('express');
const router = express.Router();
const db = require('../db');
const checkRole = require('../middleware/auth');

// CREATE USER (ONLY ADMIN)
router.post('/', checkRole(['admin']), (req, res) => {
    const { name, role } = req.body;

    if (!name || !role) {
        return res.status(400).json({ error: "Name and role are required" });
    }

    const query = "INSERT INTO users (name, role) VALUES (?, ?)";

    db.query(query, [name, role], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });

        res.json({
            message: "User created successfully",
            userId: result.insertId
        });
    });
});

// GET USERS (ADMIN + ANALYST)
router.get('/', checkRole(['admin', 'analyst']), (req, res) => {
    db.query("SELECT * FROM users", (err, results) => {
        if (err) return res.status(500).json({ error: err.message });

        res.json(results);
    });
});

module.exports = router;