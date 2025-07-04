const express = require('express');
const router = express.Router();

const authors = [{name:'Robert'}, {name:'Oscar Wild'}];

router.get('/', (req, res, next)=>{
    res.status(200).json({authors});
});

router.get('/:id', (req, res, next)=>{
    const Id = parseInt(req.params.id);
    const author = authors.find(a=> a.id===id);

    if(!author) {
        return res.status(404).json({message:'Author not found!'});
    }

    res.status(200).json({author});
})

module.exports = router;