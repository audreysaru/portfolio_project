const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { sequelize } = require('./models');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use((req, res, next) => {
    if (req.headers['x-forwarded-proto'] !== 'https') {
        return res.redirect(`https://${req.headers.host}${req.url}`);
    }
    next();
});

const authRoutes = require('./routes/auth');
const activitiesRoutes = require('./routes/activities');
const remindersRoutes = require('./routes/reminders');
const userRoutes = require('./routes/userRoutes');

app.use('/api', authRoutes);
app.use('/api', activitiesRoutes);
app.use('/api/reminders', remindersRoutes);
app.use('/api/users', userRoutes);

sequelize.sync().then(() => {
    app.listen(process.env.PORT || 3000, () => {
        console.log('Server is running...');
    });
}).catch(err => {
    console.error('Unable to connect to the database:', err);
});
