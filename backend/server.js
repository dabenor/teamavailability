const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 8000;

// Enable CORS same origin requests
app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());

// Serve static files (React app)
app.use(express.static(path.join(__dirname, '../frontend/build')));

// API route example
app.get('/api/status', (req, res) => {
  res.json({ message: 'API is working!' });
});

// Serve the React app for any other route not defined in the API
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/dist', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
