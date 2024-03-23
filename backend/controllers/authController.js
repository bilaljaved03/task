const jwt = require("jsonwebtoken");
const { User } = require("../models/user");
const logger = require("../utils/logger");
const {uploadImage}  = require('../services/ImageUploadService')
const login = async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);

  try {
    const user = await User.findFirst({
      where: { email },
    });
    if (!user || user.password !== password) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const token = jwt.sign({ userId: user.id }, "BILAL");

    res.cookie("user", JSON.stringify({ userId: user.id, email: user.email }), {
      httpOnly: true, // Prevents client-side JavaScript from accessing the cookie
      sameSite: "Strict",
    });
    res.json({email:user.email, token });
  } catch (error) {
    console.error(error);
    logger.error('Error fetching data from the database:', error);
    res.status(500).json({ message: "Server error" });
  }
};
const register = async (req, res) => {
  // console.log('Hi i am register')
  // res.json({message:"hey i am backend method"})
  // const imgURL = await uploadImage(req)
  // console.log(req.body);
  // console.log(imgURL);
  const {name,email,password, age} = req.body;
  console.log(req.body)
 const AGE = parseInt(age)
  try {
      // Check if the email is already registered
      const existingUser = await User.findFirst({ where: { email } });
      if (existingUser) {
        return res.status(400).json({ message: "Email already exists" });
      }
      // Create a new user
      const newUser = await User.create({data:{ name, email, password, 
        age:20
       }});
      // You may want to send a verification email here if required.
  
      res.status(201).json({ newUser });
    } catch (error) {
      console.error(error);
      logger.error('Error registering user:', error);
      res.status(500).json({ message: "Server error" });
    }
}

module.exports = { login ,register};
