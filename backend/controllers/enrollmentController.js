const enrollmentModel = require("../models/enrollmentModel");

// ===================================
// Enroll Student
// ===================================
exports.enrollStudent = (req, res) => {

    const { user_id, course_id } = req.body;

    if (!user_id || !course_id) {
        return res.status(400).json({
            success: false,
            message: "User ID and Course ID are required"
        });
    }

    enrollmentModel.enrollStudent(
        { user_id, course_id },
        (err) => {

            if (err) {
                return res.status(500).json({
                    success: false,
                    message: err.message
                });
            }

            res.status(201).json({
                success: true,
                message: "Student Enrolled Successfully"
            });

        }
    );

};

// ===================================
// Get User Enrollments
// ===================================
exports.getUserEnrollments = (req, res) => {

    enrollmentModel.getUserEnrollments(
        req.params.userId,
        (err, results) => {

            if (err) {
                return res.status(500).json({
                    success: false,
                    message: err.message
                });
            }

            res.status(200).json({
                success: true,
                total: results.length,
                enrollments: results
            });

        }
    );

};

// ===================================
// Delete Enrollment
// ===================================
exports.deleteEnrollment = (req, res) => {

    enrollmentModel.deleteEnrollment(
        req.params.id,
        (err) => {

            if (err) {
                return res.status(500).json({
                    success: false,
                    message: err.message
                });
            }

            res.status(200).json({
                success: true,
                message: "Enrollment Deleted Successfully"
            });

        }
    );

};