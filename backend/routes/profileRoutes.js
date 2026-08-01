const express = require("express");
const router = express.Router();

const profileController = require("../controllers/profileController");
const verifyToken = require("../middleware/authMiddleware");

// ======================================
// Get Profile
// ======================================
router.get(
  "/:id",
  verifyToken,
  profileController.getProfile
);

// ======================================
// Create / Update Profile
// ======================================
router.put(
  "/:id",
  verifyToken,
  profileController.updateProfile
);

module.exports = router;