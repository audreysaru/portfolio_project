// routes/reminders.js
const express = require('express');
const router = express.Router();
const { Reminder } = require('../models/reminder');

// Add routes for reminder CRUD operations
router.post('/', async (req, res) => {
    try {
        const reminder = await Reminder.create(req.body);
        res.status(201).json(reminder);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
