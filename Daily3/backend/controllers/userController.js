const argon2 = require('argon2');
const jwt = require('jsonwebtoken');
const { User, ActivityHistory } = require('../models');

exports.signup = async (req, res) => {
    try {
        const { firstName, lastName, username, email, password, birthday, profilePicture } = req.body;
        const hashedPassword = await argon2.hash(password);
        const newUser = await User.create({
            firstName,
            lastName,
            username,
            email,
            password: hashedPassword,
            birthday,
            profilePicture
        });
        res.status(201).json({ message: 'User created successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ where: { username } });
        if (!user) return res.status(404).json({ message: 'User not found' });
        const isMatch = await argon2.verify(user.password, password);
        if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });
        const token = jwt.sign({ userId: user.id }, 'secretkey', { expiresIn: '1h' });
        res.json({ token });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getProfile = async (req, res) => {
    try {
        const user = await User.findByPk(req.user.userId, { attributes: { exclude: ['password'] } });
        res.json(user);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.updateProfile = async (req, res) => {
    try {
        const updatedData = req.body;
        if (updatedData.password) {
            updatedData.password = await argon2.hash(updatedData.password);
        }
        const [affectedRows, updatedUser] = await User.update(updatedData, { where: { id: req.user.userId }, returning: true });
        res.json(updatedUser[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.addActivityHistory = async (req, res) => {
    try {
        const { activity } = req.body;
        const newActivityHistory = await ActivityHistory.create({
            user_id: req.user.userId,
            activity
        });
        res.json(newActivityHistory);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
