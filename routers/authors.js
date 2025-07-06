const express = require('express');
const router = express.Router();
const authorsController = require('../controllers/authorsController');


// Get All Authors
router.get('/', authorsController.getAllAuthors);

// Get An Author by AuthorID
router.get('/authorbyid/:authorID', authorsController.getASingleAuthor);

// Create an Author
router.post('/', authorsController.createAuthor);

// Delete An Author
router.delete('/:id', authorsController.deleteAuthor);

// Update an Author by authorID
router.put('/authorbyid/:authorID', authorsController.updateAnAuthor);





module.exports = router;