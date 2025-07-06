const Authors = require('../models/authorsModel');

exports.getAllAuthors = async (req, res, next) => {
    try {
        const authors = await Authors.find();
        res.status(200).json({
            status:'success',
            results:authors.length,
            data:{
                authors,
            }
        });

    } catch (error) {
        res.status(500).json({
            status:'fail',
            message:'Cannot get Authors',
        }); 
    };
};

exports.getASingleAuthor = async (req, res, next) =>{
    try {
        const authorId = req.params.authorID;
        const author = await Authors.findOne({ authorID: authorId });
        if(!author) {
            return res.status(400).json({
                status:'fail',
                message:'Author cannot be found by ID',
            });
        }
        res.status(200).json({
            status:'success',
            data:{
                author
            }
        });
    } catch (error) {
        res.status(500).json({
            status:'fail',
            message:error.message,
        });
    };
};

exports.createAuthor = async (req, res, next) =>{
    try {
        const newAuthor = await Authors.create(req.body);
        res.status(201).json({
            status:'succes',
            message:'Author successfully Created',
            data:{
                author: newAuthor,
            }
        })
    } catch (error) {
        res.status(400).json({
            status:'fail',
            message:'Author cannot be created!',
            err:error.message,
        });
        
    };
};

exports.deleteAuthor = async (req, res, next) => {
    try {
        const authorId = req.params.id;
        await Authors.findByIdAndDelete(authorId);

        res.status(204).json({
            status:'success',
            message:'Author Deleted Successfully',
        });

    } catch (error) {
        res.status(500).json({
            status:'fail',
            message:error.message,
        });
    };
};