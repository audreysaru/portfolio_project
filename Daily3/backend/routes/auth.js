const express = require('express');
const argon2 = require('argon2');
const jwt = require('jsonwebtoken');
const { User } = require('../models/user');

const router = express.Router();

router.post('/signup', async (req, res) => {
    const { firstName, lastName, username, email, password, birthday } = req.body;

    try {
        const hashedPassword = await argon2.hash(password, 10);
        const user = await User.create({ firstName, lastName, username, email, password: hashedPassword, birthday });

        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ where: { email } });
        if (!user || !await argon2.compare(password, user.password)) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

/*router.get('/profile', async (req, res) => {
    try {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];
        if (!token) return res.sendStatus(401);

        jwt.verify(token, process.env.JWT_SECRET, async (err, user) => {
            if (err) return res.sendStatus(403);
            const userProfile = await User.findByPk(user.userId);
            res.json(userProfile);
        });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});*/

/*router.get('/profile', async (req, res) => {
    try {
        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(404).json({ message: 'User profile not found' });
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});*/

module.exports = router;
