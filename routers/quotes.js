const express = require('express');
const router = express.Router();
const quotesController = require('../controllers/quotesController');

const quotes = [{quote:'We all live here', id:'1'}, {quote:'I love you', id:'2'}];

router.get('/', quotesController.getAllQuotes);
router.get('/:author', quotesController.getASingleQuote);

router.post('/', quotesController.createQuote);
router.delete('/:id', quotesController.deleteQuote);

module.exports = router;