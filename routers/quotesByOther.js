const express = require('express');
const router = express.Router();
const quotesByOtherController = require('../controllers/quotesByOthersController');

// Get Quotes By Uploader Name
router.get('/uploader/:uploaderName', quotesByOtherController.getQuotesByUploaderName);

// Create a Quote by Uploader Name
router.post('/', quotesByOtherController.createQuoteByUploaderName);


module.exports = router;