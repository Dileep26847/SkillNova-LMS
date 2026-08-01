const db = require("../database/db");

// ===============================
// Create Course
// ===============================
const createCourse = (course, callback) => {
  const sql = `
    INSERT INTO courses
    (title, description, price, instructor, thumbnail)
    VALUES (?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [
      course.title,
      course.description,
      course.price,
      course.instructor,
      course.thumbnail,
    ],
    callback
  );
};

// ===============================
// Get All Courses
// ===============================
const getAllCourses = (callback) => {
  const sql = `
    SELECT *
    FROM courses
    ORDER BY id DESC
  `;

  db.query(sql, callback);
};

// ===============================
// Search Courses
// ===============================
const searchCourses = (keyword, callback) => {
  const sql = `
    SELECT *
    FROM courses
    WHERE
      title LIKE ?
      OR instructor LIKE ?
      OR description LIKE ?
    ORDER BY id DESC
  `;

  const search = `%${keyword}%`;

  db.query(
    sql,
    [search, search, search],
    callback
  );
};

// ===============================
// Get Course By ID
// ===============================
const getCourseById = (id, callback) => {
  const sql = `
    SELECT *
    FROM courses
    WHERE id=?
  `;

  db.query(sql, [id], callback);
};

// ===============================
// Update Course
// ===============================
const updateCourse = (id, course, callback) => {
  const sql = `
    UPDATE courses
    SET
      title=?,
      description=?,
      price=?,
      instructor=?,
      thumbnail=?
    WHERE id=?
  `;

  db.query(
    sql,
    [
      course.title,
      course.description,
      course.price,
      course.instructor,
      course.thumbnail,
      id,
    ],
    callback
  );
};

// ===============================
// Delete Course
// ===============================
const deleteCourse = (id, callback) => {
  const sql = `
    DELETE FROM courses
    WHERE id=?
  `;

  db.query(sql, [id], callback);
};

module.exports = {
  createCourse,
  getAllCourses,
  searchCourses,
  getCourseById,
  updateCourse,
  deleteCourse,
};