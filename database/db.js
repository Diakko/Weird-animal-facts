'use strict';
const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: process.env.DB_HOST, // if you use vpn: mysql.metropolia.fi
    port: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});

module.exports = pool;