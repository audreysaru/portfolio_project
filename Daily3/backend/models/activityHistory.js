const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const ActivityHistory = sequelize.define('ActivityHistory', {
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Users',
            key: 'id'
        }
    },
    activity: {
        type: DataTypes.STRING,
        allowNull: false
    },
    date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
});

module.exports = ActivityHistory;
