const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    protocol: 'postgres',
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
});

const User = require('./user')(sequelize);
const ActivityHistory = require('./activityHistory');
const Activity = require('./activity');
const UserActivity = require('./userActivity');
const Reminder = require('./reminder');

User.hasMany(ActivityHistory, { foreignKey: 'user_id' });
ActivityHistory.belongsTo(User, { foreignKey: 'user_id' });

User.hasMany(Reminder, { foreignKey: 'user_id' });
Reminder.belongsTo(User, { foreignKey: 'user_id' });

User.belongsToMany(Activity, { through: UserActivity, foreignKey: 'user_id' });
Activity.belongsToMany(User, { through: UserActivity, foreignKey: 'activity_id' });

module.exports = {
    sequelize,
    User,
    ActivityHistory,
    Activity,
    UserActivity,
    Reminder
};
