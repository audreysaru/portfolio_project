const express = require('express');
const router = express.Router();
const checkApiKey = require('../middleware/checkApiKey');

// secure routes
router.use(checkApiKey);

// Movement endpoint
router.get('/movement', (req, res) => {
  res.json({ message: 'Movement data' });
});

// Meditation endpoint
router.get('/meditation', (req, res) => {
  res.json({ message: 'Meditation data' });
});

// Morning pages endpoint
router.get('/morning-pages', (req, res) => {
  res.json({ message: 'Morning pages data' });
});

// user data endpoint
router.post('/user', (req, res) => {
    res.json({ message: 'User data received' });
  });

module.exports = router;