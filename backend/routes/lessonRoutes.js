const express = require("express");
const router = express.Router();

const lessonController = require("../controllers/lessonController");

// Create Lesson
router.post("/", lessonController.createLesson);

// Get All Lessons
router.get("/", lessonController.getAllLessons);

// Get Lessons By Course
router.get("/course/:courseId", lessonController.getLessonsByCourse);

// Get Lesson By ID
router.get("/:id", lessonController.getLessonById);

// Update Lesson
router.put("/:id", lessonController.updateLesson);

// Delete Lesson
router.delete("/:id", lessonController.deleteLesson);

module.exports = router;