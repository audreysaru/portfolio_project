const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const ActivityHistory = sequelize.define('ActivityHistory', {
        activity: {
            type: DataTypes.STRING,
            allowNull: false
        },
        date: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        }
    });

    return ActivityHistory;
};
