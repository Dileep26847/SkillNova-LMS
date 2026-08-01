const express = require("express");
const router = express.Router();

const dashboardController = require("../controllers/dashboardController");
const verifyToken = require("../middleware/authMiddleware");

// ==========================================
// Dashboard Statistics
// ==========================================
router.get(
  "/stats/:userId",
  verifyToken,
  dashboardController.getDashboardStats
);

// ==========================================
// Recent Courses
// ==========================================
router.get(
  "/recent-courses/:userId",
  verifyToken,
  dashboardController.getRecentCourses
);

module.exports = router;