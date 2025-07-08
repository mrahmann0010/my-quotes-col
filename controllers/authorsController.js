const Authors = require('../models/authorsModel');
const asyncHandler = require('../utilities/asyncHandler');
const CustomError = require('../utilities/CustomError');

exports.getAllAuthors = asyncHandler(async (req, res, next) => {
        const authors = await Authors.find();
        res.status(200).json({
            status:'success',
            results:authors.length,
            data:{
                authors,
            }
        });  
});

exports.getASingleAuthor = asyncHandler(async (req, res, next) =>{
        const authorId = req.params.authorID;
        const author = await Authors.findOne({ authorID: authorId });
        if(!author) {
            const error = new CustomError('Author cannot be found by AuthorID', 404)
            return next(error);
        }
        res.status(200).json({
            status:'success',
            data:{
                author
            }
        });  
});

exports.createAuthor = asyncHandler(async (req, res, next) =>{

        const newAuthor = await Authors.create(req.body);
        res.status(201).json({
            status:'succes',
            message:'Author successfully Created',
            data:{
                author: newAuthor,
            }
        })
});

// Works and Updates, but does not return the updated Author

exports.updateAnAuthor = asyncHandler(async (req, res, next)=>{
    const prevauthorID = req.params.authorID;
    const {newAuthorID} = req.body;
    
    const updatedAuthor = await Authors.findOneAndUpdate(
        {authorID:prevauthorID},
        {authorID: newAuthorID},
        {new:true},
    )

    if (!updatedAuthor) {
        const error = new CustomError('Author not found', 404);
        return next(error);
    }

    res.status(204).json({
        status:'success',
        data:{
            updatedAuthor
        }
    });

    // Updates, but not returns
});


exports.deleteAuthor = asyncHandler(async (req, res, next) => {

        const authorId = req.params.id;
        await Authors.findByIdAndDelete(authorId);

        res.status(204).json({
            status:'success',
            message:'Author Deleted Successfully',
        });
});