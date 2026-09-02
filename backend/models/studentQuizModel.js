const db = require("../database/db");

// ======================================
// Get Available Quizzes
// ======================================

const getAvailableQuizzes = (studentId, callback) => {

    const sql = `
        SELECT
    q.id,
    q.course_id,
    q.title,
    q.description,
    q.time_limit,
    q.total_marks,
    q.passing_marks,
    q.status,
    c.title AS course_name,

    (
        SELECT COUNT(*)
        FROM questions
        WHERE quiz_id = q.id
    ) AS total_questions,

    (
        SELECT COUNT(*)
        FROM lessons
        WHERE course_id = q.course_id
    ) AS total_lessons,

    (
        SELECT COUNT(*)
        FROM lesson_progress lp
        WHERE
            lp.user_id = e.user_id
            AND lp.course_id = q.course_id
            AND lp.completed = TRUE
    ) AS completed_lessons

FROM quizzes q

INNER JOIN courses c
    ON c.id = q.course_id

INNER JOIN enrollments e
    ON e.course_id = q.course_id

WHERE
    e.user_id = ?
    AND q.status = 'Published'

ORDER BY q.created_at DESC;
    `;

    db.query(sql, [studentId], callback);

};

// ======================================
// Get Quiz Details
// ======================================

const getQuizById = (quizId, callback) => {

    const sql = `
        SELECT *

        FROM quizzes

        WHERE id = ?
    `;

    db.query(sql, [quizId], callback);

};

// ======================================
// Get Quiz Questions
// ======================================

const getQuizQuestions = (quizId, callback) => {

    const sql = `
        SELECT

            id,
            quiz_id,
            question,
            option1,
            option2,
            option3,
            option4,
            marks

        FROM questions

        WHERE quiz_id = ?

        ORDER BY id ASC
    `;

    db.query(sql, [quizId], callback);

};

// ======================================
// Start Quiz Attempt
// ======================================

const startQuizAttempt = (data, callback) => {

    const sql = `
        INSERT INTO quiz_attempts (

            quiz_id,
            student_id,
            total_questions,
            status

        )

        VALUES (?, ?, ?, 'Started')
    `;

    db.query(

        sql,

        [

            data.quiz_id,

            data.student_id,

            data.total_questions

        ],

        callback

    );

};

// ======================================
// Save Student Answers
// ======================================

const saveQuizAnswers = (answers, callback) => {

    const sql = `
        INSERT INTO quiz_answers (

            attempt_id,
            question_id,
            selected_option,
            correct_option,
            is_correct,
            marks_awarded

        )

        VALUES ?
    `;

    db.query(

        sql,

        [answers],

        callback

    );

};

// ======================================
// Get Correct Answers
// ======================================

const getCorrectAnswers = (quizId, callback) => {

    const sql = `
        SELECT

            id,
            correct_option,
            marks

        FROM questions

        WHERE quiz_id = ?
    `;

    db.query(sql, [quizId], callback);

};

// ======================================
// Update Quiz Result
// ======================================

const updateQuizAttempt = (

    attemptId,

    result,

    callback

) => {

    const sql = `
        UPDATE quiz_attempts

        SET

            correct_answers = ?,

            wrong_answers = ?,

            score = ?,

            total_marks = ?,

            percentage = ?,

            status = 'Submitted',

            submitted_at = NOW()

        WHERE id = ?
    `;

    db.query(

        sql,

        [

            result.correct,

            result.wrong,

            result.score,

            result.totalMarks,

            result.percentage,

            attemptId

        ],

        callback

    );

};

// ======================================
// Get Result
// ======================================

const getQuizResult = (

    attemptId,

    callback

) => {

    const sql = `
        SELECT

            qa.*,

            q.title

        FROM quiz_attempts qa

        INNER JOIN quizzes q

            ON q.id = qa.quiz_id

        WHERE qa.id = ?
    `;

    db.query(

        sql,

        [attemptId],

        callback

    );

};

module.exports = {

    getAvailableQuizzes,

    getQuizById,

    getQuizQuestions,

    startQuizAttempt,

    saveQuizAnswers,

    getCorrectAnswers,

    updateQuizAttempt,

    getQuizResult

};