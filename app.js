const express = require('express');
const app = express();

// 1) Middleware
app.use(express.json());

// 2) Routes

app.use('/api/v1/quotes', quotesController);
app.use('/api/v1/authors', authorController);




module.exports = app;