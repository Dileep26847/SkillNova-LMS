const express = require("express");
const router = express.Router();

const courseController = require("../controllers/courseController");
const verifyToken = require("../middleware/authMiddleware");
const authorizeRoles = require("../middleware/roleMiddleware");

// ======================================
// Public Routes
// ======================================

// Get All Courses
router.get("/", courseController.getAllCourses);

// Search Courses
router.get("/search", courseController.searchCourses);

// Get Course By ID
router.get("/:id", courseController.getCourseById);

// ======================================
// Protected Routes
// ======================================

// Create Course
router.post(
  "/",
  verifyToken,
  authorizeRoles("mentor", "admin"),
  courseController.createCourse
);

// Update Course
router.put(
  "/:id",
  verifyToken,
  authorizeRoles("mentor", "admin"),
  courseController.updateCourse
);

// Delete Course
router.delete(
  "/:id",
  verifyToken,
  authorizeRoles("mentor", "admin"),
  courseController.deleteCourse
);

module.exports = router;