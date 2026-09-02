const express = require("express");

const router = express.Router();

const verifyToken =
    require("../middleware/authMiddleware");

const adminStudentController =
    require("../controllers/adminStudentController");


// ============================================================
// GET ALL STUDENTS
// ============================================================

router.get(
    "/students",
    verifyToken,
    adminStudentController.getAllStudents
);


// ============================================================
// GET ONE STUDENT
// ============================================================

router.get(
    "/students/:id",
    verifyToken,
    adminStudentController.getStudent
);


// ============================================================
// GET AVAILABLE BATCHES
// ============================================================

router.get(
    "/student-batches",
    verifyToken,
    adminStudentController.getBatches
);


// ============================================================
// CREATE STUDENT
// ============================================================

router.post(
    "/create-student",
    verifyToken,
    adminStudentController.createStudent
);


// ============================================================
// UPDATE STUDENT
// ============================================================

router.put(
    "/update-student/:id",
    verifyToken,
    adminStudentController.updateStudent
);


// ============================================================
// DELETE STUDENT
// ============================================================

router.delete(
    "/delete-student/:id",
    verifyToken,
    adminStudentController.deleteStudent
);


// ============================================================
// EXPORT
// ============================================================

module.exports = router;