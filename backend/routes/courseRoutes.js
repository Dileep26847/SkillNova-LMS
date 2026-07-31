const express = require("express");
const router = express.Router();

const courseController = require("../controllers/courseController");
const verifyToken = require("../middleware/authMiddleware");
const authorizeRoles = require("../middleware/roleMiddleware");

// Public Routes
router.get("/", courseController.getAllCourses);
router.get("/:id", courseController.getCourseById);

// Protected Routes
router.post(
    "/",
    verifyToken,
    authorizeRoles("mentor", "admin"),
    courseController.createCourse
);

router.put(
    "/:id",
    verifyToken,
    authorizeRoles("mentor", "admin"),
    courseController.updateCourse
);

router.delete(
    "/:id",
    verifyToken,
    authorizeRoles("mentor", "admin"),
    courseController.deleteCourse
);

module.exports = router;