const express = require('express');
const { getProfile } = require('../controllers/userController');
const {ImageUpload,upload} = require('../services/ImageUploadService')
const { authMiddleware } = require('../middlewares/authMiddleware');
const router = express.Router();


router.get('/profile',authMiddleware, getProfile);
// router.post('/register',upload.single('image'),register);

module.exports = router;
