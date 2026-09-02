const express = require("express");
const router = express.Router();

const verifyToken = require("../middleware/authMiddleware");

const adminController = require("../controllers/adminController");
const adminDashboardController = require("../controllers/adminDashboardController");

// ==========================================
// New Admin Dashboard
// ==========================================
router.get(
  "/dashboard",
  verifyToken,
  adminDashboardController.getDashboard
);

// ==========================================
// Students
// ==========================================
router.get(
  "/students",
  verifyToken,
  adminController.getAllStudents
);

router.delete(
  "/students/:id",
  verifyToken,
  adminController.deleteStudent
);

module.exports = router;