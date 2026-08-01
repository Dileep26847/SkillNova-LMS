const db = require("../database/db");

// ===============================
// Get Password By User ID
// ===============================
const getUserPassword = (userId, callback) => {
  const sql = "SELECT password FROM users WHERE id = ?";

  db.query(sql, [userId], callback);
};

// ===============================
// Update Password
// ===============================
const updatePassword = (userId, password, callback) => {
  const sql = "UPDATE users SET password = ? WHERE id = ?";

  db.query(sql, [password, userId], callback);
};

module.exports = {
  getUserPassword,
  updatePassword,
};