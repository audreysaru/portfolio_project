const express = require('express');
const jwt = require('jsonwebtoken');
const { ActivityHistory, Activity } = require('../models');
const auth = require('../middleware/auth');

const router = express.Router();

router.post('/activities', auth, async (req, res) => {
    const { activity } = req.body;

    try {
        const newActivity = await ActivityHistory.create({ user_id: req.user.userId, activity });
        res.status(201).json(newActivity);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.get('/activities', async (req, res) => {
    try {
        const activities = await Activity.findAll();
        res.status(200).json(activities);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
