const express = require("express");
const router = express.Router();

const settingsController = require("../controllers/settingsController");
const verifyToken = require("../middleware/authMiddleware");

router.put(
  "/change-password/:id",
  verifyToken,
  settingsController.changePassword
);

module.exports = router;