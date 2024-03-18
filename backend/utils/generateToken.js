// server/utils/generateToken.js
const jwt = require('jsonwebtoken');
// const { JWT_SECRET } = require('../config/config');

const generateToken = (userId) => {
  return jwt.sign({ userId }, "BILAL");
};

module.exports = { generateToken };
