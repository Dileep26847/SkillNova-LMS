const studentQuizModel = require("../models/studentQuizModel");

// ======================================
// Get Available Quizzes
// ======================================

exports.getAvailableQuizzes = (req, res) => {

    const studentId = req.params.studentId;

    studentQuizModel.getAvailableQuizzes(

        studentId,

        (err, quizzes) => {

            if (err) {

                return res.status(500).json({
                    success: false,
                    message: err.message
                });

            }

            const updatedQuizzes = quizzes.map((quiz) => ({

                ...quiz,

                unlocked:

                    Number(quiz.completed_lessons) >=
                    Number(quiz.total_lessons)

            }));

            return res.json({

                success: true,

                total: updatedQuizzes.length,

                quizzes: updatedQuizzes

            });

        }

    );

};

// ======================================
// Get Quiz Details
// ======================================

exports.getQuizById = (req, res) => {

    const quizId = req.params.quizId;

    studentQuizModel.getQuizById(

        quizId,

        (err, quiz) => {

            if (err) {

                return res.status(500).json({
                    success: false,
                    message: err.message
                });

            }

            if (quiz.length === 0) {

                return res.status(404).json({
                    success: false,
                    message: "Quiz Not Found"
                });

            }

            return res.json({

                success: true,

                quiz: quiz[0]

            });

        }

    );

};

// ======================================
// Get Quiz Questions
// ======================================

exports.getQuizQuestions = (req, res) => {

    const quizId = req.params.quizId;

    studentQuizModel.getQuizQuestions(

        quizId,

        (err, questions) => {

            if (err) {

                return res.status(500).json({
                    success: false,
                    message: err.message
                });

            }

            return res.json({

                success: true,

                total: questions.length,

                questions

            });

        }

    );

};

// ======================================
// Start Quiz
// ======================================

exports.startQuiz = (req, res) => {

    const {

        quiz_id,
        student_id,
        total_questions

    } = req.body;

    studentQuizModel.startQuizAttempt(

        {

            quiz_id,
            student_id,
            total_questions

        },

        (err, result) => {

            if (err) {

                return res.status(500).json({
                    success: false,
                    message: err.message
                });

            }

            return res.status(201).json({

                success: true,

                attemptId: result.insertId,

                message: "Quiz Started Successfully"

            });

        }

    );

};

// ======================================
// Submit Quiz
// ======================================

exports.submitQuiz = (req, res) => {

    const {

        attemptId,
        quizId,
        answers

    } = req.body;

    studentQuizModel.getCorrectAnswers(

        quizId,

        (err, correctAnswers) => {

            if (err) {

                return res.status(500).json({
                    success: false,
                    message: err.message
                });

            }

            let correct = 0;
            let wrong = 0;
            let score = 0;
            let totalMarks = 0;

            const rows = [];

            correctAnswers.forEach((question) => {

                totalMarks += question.marks;

                const studentAnswer = answers.find(

                    (a) => a.question_id == question.id

                );

                const selected = studentAnswer
                    ? studentAnswer.selected_option
                    : null;

                const isCorrect =
                    Number(selected) ===
                    Number(question.correct_option);

                if (isCorrect) {

                    correct++;
                    score += question.marks;

                } else {

                    wrong++;

                }

                rows.push([

                    attemptId,
                    question.id,
                    selected,
                    question.correct_option,
                    isCorrect,
                    isCorrect ? question.marks : 0

                ]);

            });

            const percentage =
                totalMarks === 0
                    ? 0
                    : Number(
                          (
                              (score / totalMarks) *
                              100
                          ).toFixed(2)
                      );

            studentQuizModel.saveQuizAnswers(

                rows,

                (err2) => {

                    if (err2) {

                        return res.status(500).json({
                            success: false,
                            message: err2.message
                        });

                    }

                    studentQuizModel.updateQuizAttempt(

                        attemptId,

                        {

                            correct,
                            wrong,
                            score,
                            totalMarks,
                            percentage

                        },

                        (err3) => {

                            if (err3) {

                                return res.status(500).json({
                                    success: false,
                                    message: err3.message
                                });

                            }

                            return res.json({

                                success: true,

                                result: {

                                    attemptId,

                                    score,

                                    totalMarks,

                                    correct,

                                    wrong,

                                    percentage,

                                    status:
                                        percentage >= 40
                                            ? "PASS"
                                            : "FAIL"

                                }

                            });

                        }

                    );

                }

            );

        }

    );

};

// ======================================
// Get Quiz Result
// ======================================

exports.getQuizResult = (req, res) => {

    const attemptId = req.params.attemptId;

    studentQuizModel.getQuizResult(

        attemptId,

        (err, result) => {

            if (err) {

                return res.status(500).json({
                    success: false,
                    message: err.message
                });

            }

            if (result.length === 0) {

                return res.status(404).json({
                    success: false,
                    message: "Result Not Found"
                });

            }

            return res.json({

                success: true,

                result: result[0]

            });

        }

    );

};