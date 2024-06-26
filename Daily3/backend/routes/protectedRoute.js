const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/auth');
const { User } = require('../models/user');

router.get('/protected', verifyToken, async (req, res) => {
    try {
        const user = await User.findByPk(req.userId);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
