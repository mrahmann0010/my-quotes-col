const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');


// Get All Quotes
router.get('/signup', usersController.getAllUsers);

// Create an User
router.post('/signup', usersController.signUp);

// Log In an User
router.post('/signin', usersController.signIn);

module.exports = router;