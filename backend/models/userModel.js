const db = require("../database/db");

// ==========================================
// Find User By Email
// ==========================================
const findUserByEmail = (email, callback) => {

    const sql = `
        SELECT *
        FROM users
        WHERE email = ?
    `;

    db.query(sql, [email], callback);

};

// ==========================================
// Create User
// ==========================================
const createUser = (user, callback) => {

    const sql = `
        INSERT INTO users
        (
            full_name,
            email,
            password,
            role
        )
        VALUES
        (
            ?,
            ?,
            ?,
            ?
        )
    `;

    console.log("========================================");
    console.log("🚀 Executing INSERT INTO users");
    console.log(sql);

    console.log("📦 Values:");
    console.table([
        {
            full_name: user.full_name,
            email: user.email,
            role: user.role,
        },
    ]);

    db.query(
        sql,
        [
            user.full_name,
            user.email,
            user.password,
            user.role,
        ],
        (err, result) => {

            if (err) {

                console.log("========================================");
                console.log("❌ MYSQL INSERT ERROR");
                console.log(err);
                console.log("========================================");

                return callback(err);

            }

            console.log("========================================");
            console.log("✅ MYSQL INSERT SUCCESS");
            console.log(result);

            console.log("🆔 INSERT ID:", result.insertId);

            // ==========================================
            // Verify Immediately After Insert
            // ==========================================
            db.query(
                "SELECT * FROM users",
                (err2, rows) => {

                    console.log("========================================");

                    if (err2) {

                        console.log("❌ VERIFY USERS ERROR");
                        console.log(err2);

                    } else {

                        console.log("📋 USERS TABLE AFTER INSERT");

                        if (rows.length === 0) {
                            console.log("⚠️ USERS TABLE IS EMPTY");
                        } else {
                            console.table(rows);
                        }

                    }

                    console.log("========================================");

                    callback(null, result);

                }
            );

        }
    );

};

module.exports = {
    findUserByEmail,
    createUser,
};