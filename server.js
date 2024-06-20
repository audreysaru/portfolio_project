require('newrelic');
require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000; // Use the PORT environment variable provided by Heroku, or 3000 locally

// Middleware
app.use(bodyParser.json()); // Parse JSON bodies
app.use(express.json());

// Basic Route
app.get('/', (req, res) => {
  res.send('Welcome to DAILY3 Backend!');
});

// Import API routes
const apiRoutes = require('./routes/api');

// Use API routes
app.use('/api', apiRoutes);

// Start Server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});