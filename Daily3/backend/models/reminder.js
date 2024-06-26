const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Reminder = sequelize.define('Reminder', {
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Users',
            key: 'id'
        }
    },
    reminder_time: {
        type: DataTypes.TIME,
        allowNull: false
    }
}, {
    timestamps: true
});

module.exports = Reminder;
