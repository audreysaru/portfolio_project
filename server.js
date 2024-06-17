// server.js

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000; // Use the PORT environment variable provided by Heroku, or 3000 locally

// Middleware
app.use(bodyParser.json()); // Parse JSON bodies

// Basic Route
app.get('/', (req, res) => {
  res.send('Welcome to DAILY3 Backend!');
});

// Start Server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
// Example route for fetching movement data
app.get('/api/movement', (req, res) => {
    // Logic to fetch movement data
    res.json({ message: 'Fetching movement data' });
  });
  
  // Example route for user data
  app.post('/api/user', (req, res) => {
    // Logic to handle user data
    res.json({ message: 'User data received' });
  });  