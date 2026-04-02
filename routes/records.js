const express = require('express');
const router = express.Router();
const db = require('../db');
const checkRole = require('../middleware/auth');

// CREATE RECORD (ONLY ADMIN)
router.post('/', checkRole(['admin']), (req, res) => {
    const { amount, type, category, date, notes, user_id } = req.body;

    if (!amount || !type || !category || !date || !user_id) {
        return res.status(400).json({ error: "All required fields must be provided" });
    }

    const query = `
        INSERT INTO records (amount, type, category, date, notes, user_id)
        VALUES (?, ?, ?, ?, ?, ?)
    `;

    db.query(query, [amount, type, category, date, notes, user_id], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });

        res.json({ message: "Record created", recordId: result.insertId });
    });
});

// GET RECORDS (ADMIN + ANALYST)
router.get('/', checkRole(['admin', 'analyst']), (req, res) => {
    let query = "SELECT * FROM records WHERE 1=1";
    const values = [];

    if (req.query.type) {
        query += " AND type = ?";
        values.push(req.query.type);
    }

    if (req.query.category) {
        query += " AND category = ?";
        values.push(req.query.category);
    }

    if (req.query.date) {
        query += " AND date = ?";
        values.push(req.query.date);
    }

    db.query(query, values, (err, results) => {
        if (err) return res.status(500).json({ error: err.message });

        res.json(results);
    });
});

// UPDATE RECORD (ONLY ADMIN)
router.put('/:id', checkRole(['admin']), (req, res) => {
    const { amount, type, category, date, notes } = req.body;

    const query = `
        UPDATE records 
        SET amount=?, type=?, category=?, date=?, notes=?
        WHERE id=?
    `;

    db.query(query, [amount, type, category, date, notes, req.params.id], (err) => {
        if (err) return res.status(500).json({ error: err.message });

        res.json({ message: "Record updated" });
    });
});

// DELETE RECORD (ONLY ADMIN)
router.delete('/:id', checkRole(['admin']), (req, res) => {
    db.query("DELETE FROM records WHERE id = ?", [req.params.id], (err) => {
        if (err) return res.status(500).json({ error: err.message });

        res.json({ message: "Record deleted" });
    });
});

module.exports = router;