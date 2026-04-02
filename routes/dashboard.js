const express = require('express');
const router = express.Router();
const db = require('../db');
const checkRole = require('../middleware/auth');

// DASHBOARD SUMMARY (ADMIN + ANALYST)
router.get('/summary', checkRole(['admin', 'analyst']), (req, res) => {
    const summary = {};

    db.query("SELECT SUM(amount) AS total_income FROM records WHERE type='income'", (err, result) => {
        if (err) return res.status(500).json({ error: err.message });

        summary.total_income = Number(result[0].total_income) || 0;

        db.query("SELECT SUM(amount) AS total_expense FROM records WHERE type='expense'", (err, result) => {
            if (err) return res.status(500).json({ error: err.message });

            summary.total_expense = Number(result[0].total_expense) || 0;
            summary.balance = summary.total_income - summary.total_expense;

            db.query(`
                SELECT category, SUM(amount) AS total 
                FROM records 
                GROUP BY category
            `, (err, result) => {
                if (err) return res.status(500).json({ error: err.message });

                summary.category_totals = result;

                res.json(summary);
            });
        });
    });
});

module.exports = router;