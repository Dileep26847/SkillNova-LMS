const db = require("../database/db");

// ============================
// Create Lesson
// ============================
const createLesson = (lesson, callback) => {

    const sql = `
        INSERT INTO lessons
        (course_id, title, description, video_url, pdf_url, lesson_order)
        VALUES (?, ?, ?, ?, ?, ?)
    `;

    db.query(
        sql,
        [
            lesson.course_id,
            lesson.title,
            lesson.description,
            lesson.video_url,
            lesson.pdf_url,
            lesson.lesson_order
        ],
        callback
    );

};

// ============================
// Get All Lessons
// ============================
const getAllLessons = (callback) => {

    db.query(
        "SELECT * FROM lessons ORDER BY lesson_order ASC",
        callback
    );

};

// ============================
// Get Lessons By Course
// ============================
const getLessonsByCourse = (courseId, callback) => {

    db.query(
        "SELECT * FROM lessons WHERE course_id=? ORDER BY lesson_order ASC",
        [courseId],
        callback
    );

};

// ============================
// Get Lesson By ID
// ============================
const getLessonById = (id, callback) => {

    db.query(
        "SELECT * FROM lessons WHERE id=?",
        [id],
        callback
    );

};

// ============================
// Update Lesson
// ============================
const updateLesson = (id, lesson, callback) => {

    const sql = `
        UPDATE lessons
        SET
        title=?,
        description=?,
        video_url=?,
        pdf_url=?,
        lesson_order=?
        WHERE id=?
    `;

    db.query(
        sql,
        [
            lesson.title,
            lesson.description,
            lesson.video_url,
            lesson.pdf_url,
            lesson.lesson_order,
            id
        ],
        callback
    );

};

// ============================
// Delete Lesson
// ============================
const deleteLesson = (id, callback) => {

    db.query(
        "DELETE FROM lessons WHERE id=?",
        [id],
        callback
    );

};

module.exports = {

    createLesson,
    getAllLessons,
    getLessonsByCourse,
    getLessonById,
    updateLesson,
    deleteLesson

};