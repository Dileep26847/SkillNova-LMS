const bcrypt = require("bcrypt");
const settingsModel = require("../models/settingsModel");

// ===================================
// Change Password
// ===================================
exports.changePassword = (req, res) => {
  const userId = req.params.id;

  const {
    currentPassword,
    newPassword,
  } = req.body;

  if (!currentPassword || !newPassword) {
    return res.status(400).json({
      success: false,
      message: "All fields are required",
    });
  }

  settingsModel.getUserPassword(
    userId,
    async (err, results) => {
      if (err) {
        return res.status(500).json({
          success: false,
          message: err.message,
        });
      }

      if (results.length === 0) {
        return res.status(404).json({
          success: false,
          message: "User not found",
        });
      }

      const isMatch = await bcrypt.compare(
        currentPassword,
        results[0].password
      );

      if (!isMatch) {
        return res.status(401).json({
          success: false,
          message: "Current password is incorrect",
        });
      }

      const hashedPassword = await bcrypt.hash(
        newPassword,
        10
      );

      settingsModel.updatePassword(
        userId,
        hashedPassword,
        (err) => {
          if (err) {
            return res.status(500).json({
              success: false,
              message: err.message,
            });
          }

          res.status(200).json({
            success: true,
            message: "Password updated successfully",
          });
        }
      );
    }
  );
};