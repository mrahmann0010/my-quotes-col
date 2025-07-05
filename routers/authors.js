const express = require('express');
const router = express.Router();
const authorsController = require('../controllers/authorsController');

router.get('/', authorsController.getAllAuthors);
router.get('/:author', authorsController.getASingleAuthor);

router.post('/', authorsController.createAuthor);





module.exports = router;