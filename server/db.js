const mysql = require('mysql2');
const dotenv = require("dotenv");
dotenv.config();

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: process.env.PASSWORD,
    database: 'blog',
})

module.exports = db;