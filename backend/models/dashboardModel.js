const db = require("../database/db");

// ==========================================
// Total Enrolled Courses
// ==========================================
const getTotalCourses = (userId, callback) => {
  const sql = `
    SELECT COUNT(*) AS totalCourses
    FROM enrollments
    WHERE user_id = ?
  `;

  db.query(sql, [userId], callback);
};

// ==========================================
// Total Lessons
// ==========================================
const getTotalLessons = (userId, callback) => {
  const sql = `
    SELECT COUNT(l.id) AS totalLessons
    FROM lessons l
    INNER JOIN enrollments e
      ON l.course_id = e.course_id
    WHERE e.user_id = ?
  `;

  db.query(sql, [userId], callback);
};

// ==========================================
// Completed Lessons
// (Placeholder until lesson tracking is added)
// ==========================================
const getCompletedLessons = (userId, callback) => {
  callback(null, [
    {
      completedLessons: 0,
    },
  ]);
};

// ==========================================
// Learning Hours
// (Calculated from lesson duration later)
// ==========================================
const getLearningHours = (userId, callback) => {
  callback(null, [
    {
      learningHours: 0,
    },
  ]);
};

// ==========================================
// Dashboard Stats
// ==========================================
const getDashboardStats = (userId, callback) => {
  getTotalCourses(userId, (err, courses) => {
    if (err) return callback(err);

    getTotalLessons(userId, (err, lessons) => {
      if (err) return callback(err);

      getCompletedLessons(userId, (err, completed) => {
        if (err) return callback(err);

        getLearningHours(userId, (err, hours) => {
          if (err) return callback(err);

          callback(null, {
            totalCourses:
              courses[0].totalCourses,

            totalLessons:
              lessons[0].totalLessons,

            completedLessons:
              completed[0].completedLessons,

            learningHours:
              hours[0].learningHours,
          });
        });
      });
    });
  });
};
// ==========================================
// Recent Enrolled Courses
// ==========================================
const getRecentCourses = (userId, callback) => {
  const sql = `
    SELECT
      c.id,
      c.title,
      c.description,
      c.thumbnail,
      c.instructor,
      e.enrolled_at
    FROM enrollments e
    INNER JOIN courses c
      ON e.course_id = c.id
    WHERE e.user_id = ?
    ORDER BY e.enrolled_at DESC
    LIMIT 5
  `;

  db.query(sql, [userId], callback);
};
module.exports = {
  getDashboardStats,
    getRecentCourses,
};