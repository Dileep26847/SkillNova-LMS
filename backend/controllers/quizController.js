const quizModel = require("../models/quizModel");

// ======================================
// Get Quiz By Course
// ======================================
exports.getQuizByCourse = (req, res) => {
  const courseId = req.params.courseId;

  quizModel.getQuizByCourse(courseId, (err, results) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: err.message,
      });
    }

    if (results.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Quiz not found",
      });
    }

    res.status(200).json({
      success: true,
      quiz: results[0],
    });
  });
};

// ======================================
// Get Quiz Questions
// ======================================
exports.getQuestions = (req, res) => {
  const quizId = req.params.quizId;

  quizModel.getQuestions(quizId, (err, results) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: err.message,
      });
    }

    res.status(200).json({
      success: true,
      total: results.length,
      questions: results,
    });
  });
};

// ======================================
// Submit Quiz Result
// ======================================
exports.submitQuiz = (req, res) => {
  const {
    user_id,
    quiz_id,
    score,
    total_questions,
  } = req.body;

  if (
    !user_id ||
    !quiz_id ||
    score === undefined ||
    !total_questions
  ) {
    return res.status(400).json({
      success: false,
      message: "All fields are required",
    });
  }

  quizModel.saveResult(
    {
      user_id,
      quiz_id,
      score,
      total_questions,
    },
    (err) => {
      if (err) {
        return res.status(500).json({
          success: false,
          message: err.message,
        });
      }

      res.status(201).json({
        success: true,
        message: "Quiz submitted successfully",
      });
    }
  );
};