const dashboardModel = require("../models/dashboardModel");

// ==========================================
// Dashboard Statistics
// ==========================================
exports.getDashboardStats = (req, res) => {
  const userId = req.params.userId;

  dashboardModel.getDashboardStats(userId, (err, stats) => {
    if (err) {
      console.error(err);

      return res.status(500).json({
        success: false,
        message: "Failed to load dashboard statistics",
      });
    }

    res.status(200).json({
      success: true,
      stats,
    });
  });
};

// ==========================================
// Recent Courses
// ==========================================
exports.getRecentCourses = (req, res) => {
  const userId = req.params.userId;

  dashboardModel.getRecentCourses(userId, (err, courses) => {
    if (err) {
      console.error(err);

      return res.status(500).json({
        success: false,
        message: "Failed to load recent courses",
      });
    }

    res.status(200).json({
      success: true,
      courses,
    });
  });
};