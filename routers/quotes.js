const express = require('express');
const router = express.Router();
const quotesController = require('../controllers/quotesController');


// Get All Quotes
router.get('/', quotesController.getAllQuotes);

// Get A Quote by QuoteID
router.get('/quotebyid/:id', quotesController.getASingleQuote);

// Get All Quotes of an Author by AuthorID
router.get('/byauthor/:authorID', quotesController.getAllQuotesByAnAuthorID);

// Create a Quote
router.post('/', quotesController.createQuote);

// Delete a Quote by ID
router.delete('/:id', quotesController.deleteQuote);

module.exports = router;