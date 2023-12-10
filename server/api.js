// server/routes/api.js
const express = require('express');
const router = express.Router();

const transactionController = require('./transactionController'); 

// API endpoints
router.get('/transactions', transactionController.getAllTransactions);
router.post('/transactions', transactionController.addTransaction);

module.exports = router;
