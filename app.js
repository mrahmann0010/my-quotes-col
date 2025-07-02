const express = require('express');
const app = express();

// Using Middleware
app.use(express.json());

module.exports = app;