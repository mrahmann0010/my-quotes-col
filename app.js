const express = require('express');
const app = express();
const quotesRouter = require('./routers/quotes');
const authorsRouter = require('./routers/authors');

// 1) Middleware
app.use(express.json());

// 2) Adding Routes
app.use('/api/v1/quotes', quotesRouter);
app.use('/api/v1/authors', authorsRouter);

app.use((req, res, next)=>{
    res.status(404).json({
        status:'fail',
        message:'Can not get the url'
    })
})

module.exports = app;