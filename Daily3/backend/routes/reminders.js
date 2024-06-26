const express = require('express');
const router = express.Router();
const { Reminder } = require('../models');
const auth = require('../middleware/auth');

// Add routes for reminder CRUD operations
router.post('/', auth, async (req, res) => {
    try {
        const reminder = await Reminder.create({ ...req.body, user_id: req.user.userId });
        res.status(201).json(reminder);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
