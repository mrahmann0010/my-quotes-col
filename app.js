const express = require('express');
const cors = require('cors');

const quotesRouter = require('./routers/quotes');
const authorsRouter = require('./routers/authors');
const usersRouter = require('./routers/users');
const globalErrorHandler = require('./controllers/errorHandler');
const CustomError = require('./utilities/CustomError');

const app = express();
// 1) Middleware
app.use(express.json());

// For Front-end Connections
app.use(cors({
  origin: 'http://localhost:3000', // allow React dev server
  methods: ['GET', 'POST'],
}));

// 2) Adding Routes
app.use('/api/v1/quotes', quotesRouter);
app.use('/api/v1/authors', authorsRouter);

app.use('/api/v1/users', usersRouter);

app.use((req, res, next) =>{
    const err = new CustomError(`Cannot find the url ${req.originalUrl} in the server`, 404);
    console.log('From here')
    next(err);
})

app.use(globalErrorHandler);
module.exports = app;