const jwt = require("jsonwebtoken");
const { User } = require("../models/user");

const logger = require("../utils/logger");
const { uploadImage } = require("../services/ImageUploadService");
const getProfile = async (req, res) => {
  try {
    const userData = JSON.parse(req.user);
    const userId = userData.userId;
    const user = await User.findUnique({
      where: {
        id: userId,
      },
    });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json({
     user
    });
  } catch (error) {
    console.error("Error fetching user profile:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { getProfile };
