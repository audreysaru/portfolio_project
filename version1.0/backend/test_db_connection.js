const { Pool } = require('pg');

const pool = new Pool({
    user: 'all',
    host: '197.254.106.238',
    database: 'd1vlde81nnt2m6',
    password: 'pc2ccdadb1cde6d14a80a5135096172dc5e204a0ee1efae4d24ac2e5eee2d1571',
    port: 5432,
});

pool.query('SELECT NOW()', (err, res) => {
    if (err) {
        console.error('Error connecting to database:', err);
    } else {
        console.log('Connected to database. Current timestamp:', res.rows[0].now);
    }
    pool.end(); // Close the connection pool
});