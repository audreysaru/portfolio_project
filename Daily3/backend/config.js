module.exports = {
    port: process.env.PORT || 5000,
    dbUri: process.env.DB_URI || 'postgresql://username:password@localhost:5432/database_name',
};