const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./user');
const Activity = require('./activity');

const UserActivity = sequelize.define('UserActivity', {
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'id'
        }
    },
    activity_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Activity,
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

UserActivity.belongsTo(User, { foreignKey: 'user_id' });
UserActivity.belongsTo(Activity, { foreignKey: 'activity_id' });

module.exports = UserActivity;
