const express = require('express');
const router = express.Router();

const quotes = [{quote:'We all live here', id:'1'}, {quote:'I love you', id:'2'}];

router.get('/', (req, res, next)=>{
    res.json({
        message:'Hello from Quotes',
    });
});

router.get('/:id',  (req, res, next)=>{
    const quoteId = req.params.id;
    const quote = 'A lovely day';
    res.json({
        message:'success',
        quoteId,
        body:quote,
    });
});

module.exports = router;