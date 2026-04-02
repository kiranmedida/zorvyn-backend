const mysql = require('mysql2');

// create connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'virat@9009',
    database: 'zorvyn_db'
});

// connect to database
db.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err);
    } else {
        console.log('Connected to MySQL database');
    }
});

module.exports = db;