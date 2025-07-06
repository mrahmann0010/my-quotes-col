const express = require('express');
const router = express.Router();
const authorsController = require('../controllers/authorsController');


// Get All Authors
router.get('/', authorsController.getAllAuthors);

// Get An Author by AuthorID
router.get('/authorbyid/:authorID', authorsController.getASingleAuthor);

router.post('/', authorsController.createAuthor);
router.delete('/:id', authorsController.deleteAuthor);





module.exports = router;