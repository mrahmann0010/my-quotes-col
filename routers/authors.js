const express = require('express');
const router = express.Router();

const authors = [{name:'Robert'}, {name:'Bobby'}];

router.get('/', (req, res, next)=>{
    res.json({
        status:'success',
        message: authors,
    });
});

router.get('/:id',  (req, res, next)=>{
    const authorId = req.params.id;
    const author = 'James';
    res.json({
        message:'success',
        authorId,
        body:author,
    });
});

module.exports = router;