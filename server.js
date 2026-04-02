const express = require('express');
const app = express();

const recordRoutes = require('./routes/records');
const db = require('./db'); // DB connection
const userRoutes = require('./routes/users');
const dashboardRoutes = require('./routes/dashboard');


app.use(express.json());


app.use('/users', userRoutes);
app.use('/records', recordRoutes);
app.use('/dashboard', dashboardRoutes);


app.get('/', (req, res) => {
    res.send("Backend is running");
});


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});