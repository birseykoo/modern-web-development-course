const express = require('express');
const { register, login, getUser, logout, imageUpload} = require('../controllers/authControllers');
const { getAccsessToRoute } = require('../middlewares/authorization/authAuthorization');
const  profileImageUpload  = require('../middlewares/libraries/profileImageUpload');
const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/profile',getAccsessToRoute, getUser);
router.get('/logout', getAccsessToRoute, logout);
router.post('/upload', [getAccsessToRoute, profileImageUpload.single("profile_image")],imageUpload);

module.exports = router;