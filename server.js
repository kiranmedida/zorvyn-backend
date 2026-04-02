const express = require('express');
const app = express();
const recordRoutes = require('./routes/records');
const db = require('./db'); // DB connection
const userRoutes = require('./routes/users');
const dashboardRoutes = require('./routes/dashboard');
// middleware
app.use(express.json());

// routes
app.use('/users', userRoutes);
app.use('/records', recordRoutes);
app.use('/dashboard', dashboardRoutes);
// test route
app.get('/', (req, res) => {
    res.send("Backend is running");
});

// start server
app.listen(3000, () => {
    console.log("Server running on port 3000");
});

