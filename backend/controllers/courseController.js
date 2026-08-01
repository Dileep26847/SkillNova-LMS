const courseModel = require("../models/courseModel");

// ======================================
// Create Course
// ======================================
exports.createCourse = (req, res) => {
  const {
    title,
    description,
    price,
    instructor,
    thumbnail,
  } = req.body;

  if (!title || !description || !price || !instructor) {
    return res.status(400).json({
      success: false,
      message: "Please fill all required fields",
    });
  }

  courseModel.createCourse(
    {
      title,
      description,
      price,
      instructor,
      thumbnail,
    },
    (err) => {
      if (err) {
        return res.status(500).json({
          success: false,
          message: err.message,
        });
      }

      res.status(201).json({
        success: true,
        message: "Course Created Successfully",
      });
    }
  );
};

// ======================================
// Get All Courses
// ======================================
exports.getAllCourses = (req, res) => {
  courseModel.getAllCourses((err, results) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: err.message,
      });
    }

    res.status(200).json({
      success: true,
      total: results.length,
      courses: results,
    });
  });
};

// ======================================
// Search Courses
// ======================================
exports.searchCourses = (req, res) => {
  const keyword = req.query.q || "";

  courseModel.searchCourses(keyword, (err, results) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: err.message,
      });
    }

    res.status(200).json({
      success: true,
      total: results.length,
      courses: results,
    });
  });
};

// ======================================
// Get Course By ID
// ======================================
exports.getCourseById = (req, res) => {
  const id = req.params.id;

  courseModel.getCourseById(id, (err, results) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: err.message,
      });
    }

    if (results.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Course Not Found",
      });
    }

    res.status(200).json({
      success: true,
      course: results[0],
    });
  });
};

// ======================================
// Update Course
// ======================================
exports.updateCourse = (req, res) => {
  const id = req.params.id;

  const {
    title,
    description,
    price,
    instructor,
    thumbnail,
  } = req.body;

  courseModel.updateCourse(
    id,
    {
      title,
      description,
      price,
      instructor,
      thumbnail,
    },
    (err) => {
      if (err) {
        return res.status(500).json({
          success: false,
          message: err.message,
        });
      }

      res.status(200).json({
        success: true,
        message: "Course Updated Successfully",
      });
    }
  );
};

// ======================================
// Delete Course
// ======================================
exports.deleteCourse = (req, res) => {
  const id = req.params.id;

  courseModel.deleteCourse(id, (err) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: err.message,
      });
    }

    res.status(200).json({
      success: true,
      message: "Course Deleted Successfully",
    });
  });
};