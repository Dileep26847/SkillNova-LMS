const express = require("express");
const router = express.Router();

const adminCourseController = require("../controllers/adminCourseController");
const verifyToken = require("../middleware/authMiddleware");

// ==========================================
// Get All Courses
// ==========================================
router.get(
  "/courses",
  verifyToken,
  adminCourseController.getAllCourses
);

// ==========================================
// Get Course By ID
// ==========================================
router.get(
  "/courses/:id",
  verifyToken,
  adminCourseController.getCourseById
);

// ==========================================
// Add Course
// ==========================================
router.post(
  "/courses",
  verifyToken,
  adminCourseController.addCourse
);

// ==========================================
// Update Course
// ==========================================
router.put(
  "/courses/:id",
  verifyToken,
  adminCourseController.updateCourse
);

// ==========================================
// Delete Course
// ==========================================
router.delete(
  "/courses/:id",
  verifyToken,
  adminCourseController.deleteCourse
);

module.exports = router;