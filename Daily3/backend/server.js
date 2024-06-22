const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const config = require('./config');

const app = express();

app.use(express.json());
app.use('/api/users', userRoutes);

mongoose.connect(config.dbUri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

const PORT = config.port || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});