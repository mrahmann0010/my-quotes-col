const express = require('express');
const router = express.Router();

router.get('/', (req, res, next)=> {
    res.json({quotes})
})

const quotes = [{name:'Robert', quote:'Future is dangerous'}];
router.get('/:id', (req, res, next)=>{
    const quoteId = parseInt(req.params.id);
    const quote = quotes.find(q => q.id === quoteId);

    if(!quote) {
        return res.status(404).json({message:'Quote not found'});
    }

    res.status(200).json({quote})

});

module.exports = router;