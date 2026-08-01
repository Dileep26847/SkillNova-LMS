const express = require("express");
const cors = require("cors");
require("dotenv").config();

// =====================================
// Database Connection
// =====================================
require("./database/db");

// =====================================
// Initialize Express
// =====================================
const app = express();

// =====================================
// Global Middleware
// =====================================
app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// =====================================
// Static Folder
// =====================================
app.use("/uploads", express.static("uploads"));

// =====================================
// Import Middleware
// =====================================
const verifyToken = require("./middleware/authMiddleware");

// =====================================
// Import Routes
// =====================================
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userroutes");
const courseRoutes = require("./routes/courseRoutes");
const lessonRoutes = require("./routes/lessonRoutes");
const uploadRoutes = require("./routes/uploadRoutes");
const enrollmentRoutes = require("./routes/enrollmentRoutes");
const profileRoutes = require("./routes/profileRoutes");
const settingsRoutes = require("./routes/settingsRoutes");
const quizRoutes = require("./routes/quizRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");

// Admin
const adminRoutes = require("./routes/adminRoutes");
const adminCourseRoutes = require("./routes/adminCourseRoutes");

// =====================================
// Home Route
// =====================================
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "🚀 Welcome to DataWave LMS Backend API",
  });
});

// =====================================
// Authentication
// =====================================
app.use("/api/auth", authRoutes);

// =====================================
// Users
// =====================================
app.use("/api/user", userRoutes);

// =====================================
// Courses
// =====================================
app.use("/api/courses", courseRoutes);

// =====================================
// Lessons
// =====================================
app.use("/api/lessons", lessonRoutes);

// =====================================
// Upload
// =====================================
app.use("/api/upload", uploadRoutes);

// =====================================
// Enrollments
// =====================================
app.use("/api/enrollments", enrollmentRoutes);

// =====================================
// Profile
// =====================================
app.use("/api/profile", profileRoutes);

// =====================================
// Settings
// =====================================
app.use("/api/settings", settingsRoutes);

// =====================================
// Quiz
// =====================================
app.use("/api/quizzes", quizRoutes);

// =====================================
// Student Dashboard
// =====================================
app.use("/api/dashboard", dashboardRoutes);

// =====================================
// Admin
// =====================================
app.use("/api/admin", adminRoutes);

// =====================================
// Admin Course CRUD
// =====================================
app.use("/api/admin", adminCourseRoutes);

console.log("✅ Admin Routes Loaded");

// =====================================
// Protected Route Test
// =====================================
app.get("/dashboard", verifyToken, (req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome to DataWave Dashboard",
    user: req.user,
  });
});

// =====================================
// Health Check
// =====================================
app.get("/health", (req, res) => {
  res.status(200).json({
    success: true,
    status: "Server Running",
  });
});

// =====================================
// 404 Handler
// =====================================
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route Not Found",
  });
});

// =====================================
// Global Error Handler
// =====================================
app.use((err, req, res, next) => {
  console.error(err);

  res.status(500).json({
    success: false,
    message: "Internal Server Error",
    error: err.message,
  });
});

// =====================================
// Start Server
// =====================================
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("========================================");
  console.log("🚀 DataWave LMS Backend Started");
  console.log(`🌐 Server Running : http://localhost:${PORT}`);
  console.log("✅ Database Connected");
  console.log("✅ Admin Routes Loaded");
  console.log("========================================");
});