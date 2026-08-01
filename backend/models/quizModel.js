const db = require("../database/db");

// ===============================
// Get Quiz By Course
// ===============================
const getQuizByCourse = (courseId, callback) => {
  const sql = `
    SELECT *
    FROM quizzes
    WHERE course_id = ?
  `;

  db.query(sql, [courseId], callback);
};

// ===============================
// Get Questions
// ===============================
const getQuestions = (quizId, callback) => {
  const sql = `
    SELECT
      id,
      question,
      option1,
      option2,
      option3,
      option4,
      correct_option
    FROM questions
    WHERE quiz_id = ?
  `;

  db.query(sql, [quizId], callback);
};

// ===============================
// Save Result
// ===============================
const saveResult = (result, callback) => {
  const sql = `
    INSERT INTO quiz_results
    (user_id, quiz_id, score, total_questions)
    VALUES (?, ?, ?, ?)
  `;

  db.query(
    sql,
    [
      result.user_id,
      result.quiz_id,
      result.score,
      result.total_questions,
    ],
    callback
  );
};

module.exports = {
  getQuizByCourse,
  getQuestions,
  saveResult,
};