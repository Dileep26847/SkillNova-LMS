const db = require("../database/db");

// ============================
// Enroll Student
// ============================
const enrollStudent = (enrollment, callback) => {

    const sql = `
        INSERT INTO enrollments
        (user_id, course_id)
        VALUES (?, ?)
    `;

    db.query(
        sql,
        [
            enrollment.user_id,
            enrollment.course_id
        ],
        callback
    );

};

// ============================
// Get Courses By User
// ============================
const getUserEnrollments = (userId, callback) => {

    const sql = `
        SELECT
            enrollments.id,
            courses.id AS course_id,
            courses.title,
            courses.description,
            courses.thumbnail,
            courses.price,
            enrollments.enrolled_at
        FROM enrollments
        JOIN courses
        ON enrollments.course_id = courses.id
        WHERE enrollments.user_id = ?
    `;

    db.query(sql, [userId], callback);

};

// ============================
// Delete Enrollment
// ============================
const deleteEnrollment = (id, callback) => {

    db.query(
        "DELETE FROM enrollments WHERE id=?",
        [id],
        callback
    );

};

module.exports = {
    enrollStudent,
    getUserEnrollments,
    deleteEnrollment
};