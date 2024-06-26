const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./user');

const Reminder = sequelize.define('Reminder', {
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
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

Reminder.belongsTo(User, { foreignKey: 'user_id' });

module.exports = Reminder;
