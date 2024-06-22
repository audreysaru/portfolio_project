const express = require('express');
const { signup, login, getProfile, updateProfile, addActivityHistory } = require('../controllers/userController');
const auth = require('../middleware/auth');

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.get('/profile', auth, getProfile);
router.put('/profile', auth, updateProfile);
router.post('/activity', auth, addActivityHistory);

module.exports = router;