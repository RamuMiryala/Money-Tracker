// server/app.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const apiRoutes = require('./api');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB using the new URL parser and unified topology
mongoose.connect('mongodb://localhost/money_tracker', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false, // Set this option to false
  useCreateIndex: true,
});

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// API routes
app.use('/api', apiRoutes);

// Serve static files (if needed)
app.use(express.static('public'));

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
