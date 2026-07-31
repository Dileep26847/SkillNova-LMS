const express = require("express");
const cors = require("cors");
require("dotenv").config();

// ==================================
// Database Connection
// ==================================
require("./database/db");

// ==================================
// Import Routes
// ==================================
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userroutes");
const courseRoutes = require("./routes/courseRoutes");
const lessonRoutes = require("./routes/lessonRoutes");
const uploadRoutes = require("./routes/uploadRoutes");
const enrollmentRoutes = require("./routes/enrollmentRoutes");

// ==================================
// Import Middleware
// ==================================
const verifyToken = require("./middleware/authMiddleware");

// ==================================
// Initialize Express
// ==================================
const app = express();

// ==================================
// Global Middleware
// ==================================
app.use(cors());
app.use(express.json());

// ==================================
// Static Upload Folder
// ==================================
app.use("/uploads", express.static("uploads"));

// ==================================
// Home Route
// ==================================
app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "🚀 Welcome to SkillNova LMS Backend API"
    });
});

// ==================================
// Authentication Routes
// ==================================
app.use("/api/auth", authRoutes);

// ==================================
// User Routes
// ==================================
app.use("/api/user", userRoutes);

// ==================================
// Course Routes
// ==================================
app.use("/api/courses", courseRoutes);

// ==================================
// Lesson Routes
// ==================================
app.use("/api/lessons", lessonRoutes);

// ==================================
// Upload Routes
// ==================================
app.use("/api/upload", uploadRoutes);

// ==================================
// Enrollment Routes
// ==================================
app.use("/api/enrollments", enrollmentRoutes);

// ==================================
// Protected Dashboard
// ==================================
app.get("/dashboard", verifyToken, (req, res) => {
    res.status(200).json({
        success: true,
        message: "Welcome to SkillNova Dashboard",
        user: req.user
    });
});

// ==================================
// 404 Route
// ==================================
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Route Not Found"
    });
});

// ==================================
// Start Server
// ==================================
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});