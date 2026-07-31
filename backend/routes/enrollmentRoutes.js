const express = require("express");
const router = express.Router();

const enrollmentController = require("../controllers/enrollmentController");

// ===============================
// Enroll Student
// ===============================
router.post("/", enrollmentController.enrollStudent);

// ===============================
// Get User Enrollments
// ===============================
router.get("/user/:userId", enrollmentController.getUserEnrollments);

// ===============================
// Delete Enrollment
// ===============================
router.delete("/:id", enrollmentController.deleteEnrollment);

module.exports = router;