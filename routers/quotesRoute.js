const express = require('express');
const router = express.Router();

router.route('/', (req, res)=> {
    res.json({quotes})
})

router.route('/:id', (req, res)=>{
    const quoteId = parseInt(req.params.id);
    const quote = quotes.find(q => q.id === quoteId);

    if(!quote) {
        return res.status(404).json({message:'Quote not found'});
    }

    res.status(200).json({quote})

});