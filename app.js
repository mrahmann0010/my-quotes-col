const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const quotesRouter = require('./routers/quotes');
const authorsRouter = require('./routers/authors');
const usersRouter = require('./routers/users');

// 1) Middleware
app.use(express.json());
// app.use(bodyParser.urlencoded({extended:false}));

// 2) Adding Routes
app.use('/api/v1/quotes', quotesRouter);
app.use('/api/v1/authors', authorsRouter);

app.use('/api/v1/users', usersRouter);

app.use((req, res, next)=>{
    res.status(404).json({
        status:'fail',
        message:'Can not get the url'
    })
})

module.exports = app;