    // const {upload} = require('../services/uploadService')
    // router.route('/login').post(login)
    // router.route('/register').post(upload.single('image'), register)
    
// server/routes/authRoutes.js
const express = require('express');
const { login,register } = require('../controllers/authController');
const {ImageUpload,upload} = require('../services/ImageUploadService')
const router = express.Router();


router.post('/login', login);
router.post('/register',upload.single('image'),register);

module.exports = router;
