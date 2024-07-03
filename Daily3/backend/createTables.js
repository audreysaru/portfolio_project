const sequelize = require('./config/database');
const User = require('./models/user');

const createTables = async () => {
    try {
        await sequelize.sync({ force: true }); // 'force: true' will drop the table if it already exists
        console.log('Tables created successfully!');
    } catch (err) {
        console.error('Error creating tables:', err);
    } finally {
        await sequelize.close();
    }
};

createTables();
