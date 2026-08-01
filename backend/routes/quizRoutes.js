const express = require("express");
const router = express.Router();

const quizController = require("../controllers/quizController");
const verifyToken = require("../middleware/authMiddleware");

// ======================================
// Get Quiz By Course
// ======================================
router.get(
  "/course/:courseId",
  verifyToken,
  quizController.getQuizByCourse
);

// ======================================
// Get Quiz Questions
// ======================================
router.get(
  "/questions/:quizId",
  verifyToken,
  quizController.getQuestions
);

// ======================================
// Submit Quiz
// ======================================
router.post(
  "/submit",
  verifyToken,
  quizController.submitQuiz
);

module.exports = router;