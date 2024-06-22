// middleware/checkApiKey.js

function checkApiKey(req, res, next) {
    const apiKey = req.headers['x-api-key'];
    if (apiKey && apiKey === process.env.API_KEY) {
      next();
    } else {
      res.status(403).json({ message: 'Forbidden' });
    }
  }
  
  module.exports = checkApiKey;  