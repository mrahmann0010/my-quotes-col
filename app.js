const express = require('express');
const app = express();

const quotesRoute = require('./routers/quotesRoute');
const authorsRoute = require('./routers/authorsRoute');

// 1) Middleware
app.use(express.json());

// 2) Routes

app.use('/api/v1/quotes', quotesRoute);
app.use('/api/v1/authors', authorsRoute);

module.exports = app;