const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.signup = async (req, res) => {
    try {
        const { firstName, lastName, username, email, password, birthday, profilePicture } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            firstName,
            lastName,
            username,
            email,
            password: hashedPassword,
            birthday,
            profilePicture
        });
        await newUser.save();
        res.status(201).json({ message: 'User created successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        if (!user) return res.status(404).json({ message: 'User not found' });
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });
        const token = jwt.sign({ userId: user._id }, 'secretkey', { expiresIn: '1h' });
        res.json({ token });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user.userId).select('-password');
        res.json(user);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.updateProfile = async (req, res) => {
    try {
        const updatedData = req.body;
        if (updatedData.password) {
            updatedData.password = await bcrypt.hash(updatedData.password, 10);
        }
        const user = await User.findByIdAndUpdate(req.user.userId, updatedData, { new: true }).select('-password');
        res.json(user);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.addActivityHistory = async (req, res) => {
    try {
        const { activity } = req.body;
        const user = await User.findById(req.user.userId);
        user.activityHistory.push({ activities: [activity] });
        await user.save();
        res.json(user);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};