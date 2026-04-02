const mysql = require('mysql2');

const db = mysql.createPool({
    host: 'interchange.proxy.rlwy.net',
    user: 'root',
    password: 'iHpCpxMuKgrRkwwTkjofmsxlDnsAuSnJ',
    database: 'railway',
    port: 59060,
    ssl: {
        rejectUnauthorized: false
    }
});


db.getConnection((err, connection) => {
    if (err) {
        console.error('Database connection failed:', err);
    } else {
        console.log('Connected to Railway MySQL');
        connection.release();
    }
});

module.exports = db;