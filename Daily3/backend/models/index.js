const { Sequelize } = require('sequelize');
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
const ActivityHistory = require('./activityHistory')(sequelize);

User.hasMany(ActivityHistory, { foreignKey: 'user_id' });
ActivityHistory.belongsTo(User, { foreignKey: 'user_id' });

module.exports = {
    sequelize,
    User,
    ActivityHistory
};
