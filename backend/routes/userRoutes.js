const express = require('express');
const axios = require('axios');
const router = express.Router();
const {registerNewUser, loginUser, getMe, logOut }=require('../controllers/userController')
const {protect}=require('../middleware/authMiddleware')

router.post('/', registerNewUser);
router.post('/login', loginUser);
router.post('/logout', logOut)
router.get('/me', protect, getMe);
module.exports=router