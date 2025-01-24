const express = require('express');
const router = express.Router();
const portfolioController = require('../controllers/portfolioController');

// Handle portfolio creation
router.post('/create', portfolioController.createPortfolio);

// Handle fetching portfolios
router.get('/view/:id', portfolioController.viewPortfolio);

module.exports = router;
