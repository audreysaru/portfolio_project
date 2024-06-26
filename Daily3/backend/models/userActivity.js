const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const UserActivity = sequelize.define('UserActivity', {
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Users',
            key: 'id'
        }
    },
    activity_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Activities',
            key: 'id'
        }
    },
    completed_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
}, {
    timestamps: true
});

module.exports = UserActivity;
