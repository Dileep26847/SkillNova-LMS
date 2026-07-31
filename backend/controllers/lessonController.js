const lessonModel = require("../models/lessonModel");

// ===============================
// Create Lesson
// ===============================
exports.createLesson = (req, res) => {

    const {
        course_id,
        title,
        description,
        video_url,
        pdf_url,
        lesson_order
    } = req.body;

    if (!course_id || !title) {
        return res.status(400).json({
            success: false,
            message: "Course ID and Title are required"
        });
    }

    lessonModel.createLesson(
        {
            course_id,
            title,
            description,
            video_url,
            pdf_url,
            lesson_order
        },
        (err) => {

            if (err) {
                return res.status(500).json({
                    success: false,
                    message: err.message
                });
            }

            res.status(201).json({
                success: true,
                message: "Lesson Created Successfully"
            });

        }
    );

};

// ===============================
// Get All Lessons
// ===============================
exports.getAllLessons = (req, res) => {

    lessonModel.getAllLessons((err, results) => {

        if (err) {
            return res.status(500).json({
                success: false,
                message: err.message
            });
        }

        res.json({
            success: true,
            total: results.length,
            lessons: results
        });

    });

};

// ===============================
// Get Lessons By Course
// ===============================
exports.getLessonsByCourse = (req, res) => {

    lessonModel.getLessonsByCourse(
        req.params.courseId,
        (err, results) => {

            if (err) {
                return res.status(500).json({
                    success: false,
                    message: err.message
                });
            }

            res.json({
                success: true,
                lessons: results
            });

        }
    );

};

// ===============================
// Get Lesson By ID
// ===============================
exports.getLessonById = (req, res) => {

    lessonModel.getLessonById(
        req.params.id,
        (err, results) => {

            if (err) {
                return res.status(500).json({
                    success: false,
                    message: err.message
                });
            }

            if (results.length === 0) {
                return res.status(404).json({
                    success: false,
                    message: "Lesson Not Found"
                });
            }

            res.json({
                success: true,
                lesson: results[0]
            });

        }
    );

};

// ===============================
// Update Lesson
// ===============================
exports.updateLesson = (req, res) => {

    lessonModel.updateLesson(
        req.params.id,
        req.body,
        (err) => {

            if (err) {
                return res.status(500).json({
                    success: false,
                    message: err.message
                });
            }

            res.json({
                success: true,
                message: "Lesson Updated Successfully"
            });

        }
    );

};

// ===============================
// Delete Lesson
// ===============================
exports.deleteLesson = (req, res) => {

    lessonModel.deleteLesson(
        req.params.id,
        (err) => {

            if (err) {
                return res.status(500).json({
                    success: false,
                    message: err.message
                });
            }

            res.json({
                success: true,
                message: "Lesson Deleted Successfully"
            });

        }
    );

};