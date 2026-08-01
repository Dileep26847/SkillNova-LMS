const db = require("../database/db");

// Find user by email
const findUserByEmail = (email, callback) => {

    const sql = "SELECT * FROM users WHERE email=?";

    db.query(sql, [email], callback);

};

// Create user
const createUser = (user, callback) => {

    const sql = `
    INSERT INTO users
    (full_name,email,password,role)
    VALUES(?,?,?,?)
    `;

    db.query(sql, [

        user.full_name,
        user.email,
        user.password,
        user.role

    ], callback);

};

module.exports = {

    findUserByEmail,
    createUser

};