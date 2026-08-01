const express = require("express");
const router = express.Router();

const adminController = require("../controllers/adminController");
const verifyToken = require("../middleware/authMiddleware");

// ==========================================
// Dashboard Statistics
// ==========================================
router.get(
  "/dashboard",
  verifyToken,
  adminController.getDashboardStats
);

// ==========================================
// Get All Students
// ==========================================
router.get(
  "/students",
  verifyToken,
  adminController.getAllStudents
);

// ==========================================
// Delete Student
// ==========================================
router.delete(
  "/students/:id",
  verifyToken,
  adminController.deleteStudent
);

module.exports = router;