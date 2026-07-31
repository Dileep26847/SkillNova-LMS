const mysql = require("mysql2");
require("dotenv").config();

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT) || 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD.trim(),
    database: process.env.DB_NAME
});

db.connect((err) => {
    if (err) {
        console.error("❌ MySQL Connection Failed");
        console.error(err.message);
        return;
    }

    console.log("✅ MySQL Connected Successfully");
});

module.exports = db;