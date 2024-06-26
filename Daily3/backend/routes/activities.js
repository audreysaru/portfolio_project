const express = require('express');
const { ActivityHistory } = require('../models/activityHistory');
const { Activity } = require('../models/activity');

const router = express.Router();

router.post('/activities', async (req, res) => {
    const { activity } = req.body;

    try {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];
        if (!token) return res.sendStatus(401);

        jwt.verify(token, process.env.JWT_SECRET, async (err, user) => {
            if (err) return res.sendStatus(403);
            const newActivity = await ActivityHistory.create({ user_id: user.userId, activity });
            res.status(201).json(newActivity);
        });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.get('/', async (req, res) => {
    try {
        const activities = await Activity.findAll();
        res.status(200).json(activities);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
