const profileModel = require("../models/profileModel");

// =====================================
// Get User Profile
// =====================================
exports.getProfile = (req, res) => {
  const userId = req.params.id;

  profileModel.getProfileByUserId(userId, (err, results) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: err.message,
      });
    }

    if (results.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Profile not found",
      });
    }

    res.status(200).json({
      success: true,
      profile: results[0],
    });
  });
};

// =====================================
// Create / Update Profile
// =====================================
exports.updateProfile = (req, res) => {
  const userId = req.params.id;

  const {
    phone,
    bio,
    profile_image,
  } = req.body;

  profileModel.checkProfile(userId, (err, results) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: err.message,
      });
    }

    // Create Profile
    if (results.length === 0) {
      profileModel.createProfile(
        {
          user_id: userId,
          phone,
          bio,
          profile_image,
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
            message: "Profile Created Successfully",
          });
        }
      );
    }

    // Update Profile
    else {
      profileModel.updateProfile(
        userId,
        {
          phone,
          bio,
          profile_image,
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
            message: "Profile Updated Successfully",
          });
        }
      );
    }
  });
};