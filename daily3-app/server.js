const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the 'build' folder
app.use(express.static(path.join(__dirname, 'build')));

// Serve index.html on all non-API routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});