const jwt = require("jsonwebtoken");
const { User } = require("../models/user");
const logger = require("../utils/logger");
const {uploadImage}  = require('../services/ImageUploadService')
const login = async (req, res) => {
  console.log("HEy bro");
  const { email, password } = req.body;

  try {
    const user = await User.findFirst({
      where: { email },
    });
    if (!user || user.password !== password) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    logger.info("Data fetched successfully:", data);
    // Generate JWT token
    const token = jwt.sign({ userId: user.id }, "BILAL");

    // Set cookie with user details
    res.cookie("user", JSON.stringify({ userId: user.id, email: user.email }), {
      httpOnly: true, // Prevents client-side JavaScript from accessing the cookie
      sameSite: "Strict",
    });

    // Send response with token
    res.json({ token });
  } catch (error) {
    console.error(error);
    logger.error('Error fetching data from the database:', error);
    res.status(500).json({ message: "Server error" });
  }
};
const register = async (req, res) => {
console.log('Hi i am register')
res.json({message:"hey i am backend method"})
// const imgURL = await uploadImage(req)
// console.log(req.body);
// console.log(imgURL);

// try {
  //   // Check if the email is already registered
  //   const existingUser = await User.findFirst({ where: { email } });
  //   if (existingUser) {
  //     return res.status(400).json({ message: "Email already exists" });
  //   }
  //   // Create a new user
  //   const newUser = await User.create({ name, email, password, age });
  //   // You may want to send a verification email here if required.

  //   // Optionally, you can generate a JWT token for immediate login after registration
  //   const token = jwt.sign({ userId: newUser.id }, "BILAL");

  //   // Set cookie with user details (optional, you might not want to set cookie at registration)
  //   res.cookie("user", JSON.stringify({ userId: newUser.id, email: newUser.email }), {
  //     httpOnly: true, // Prevents client-side JavaScript from accessing the cookie
  //     sameSite: "Strict",
  //   });

  //   // Send response with token
  //   res.status(201).json({ token });
  // } catch (error) {
  //   console.error(error);
  //   logger.error('Error registering user:', error);
  //   res.status(500).json({ message: "Server error" });
  // }
};

module.exports = { register };

module.exports = { login ,register};
