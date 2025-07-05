const Quotes = require('../model/quotesModel');

exports.getAllQuotes = async (req, res, next) => {
    try {
        const quotes = await Quotes.find();
        res.status(200).json({
            status:'success',
            results:quotes.length,
            data:{
                quotes,
            }
        });

    } catch (error) {
        res.status(500).json({
            status:'fail',
            message:'Cannot get Quotes',
        }); 
    };
};

exports.getASingleQuote = async (req, res, next) =>{
    try {
        const authorName = req.params.author;
        const quote = await Quotes.findOne({authorId:authorName});
        if(!quote) {
            res.status(400).json({
                status:'fail',
                message:'Quote cannot be found by Author',
            });
        }
        res.status(200).json({
            status:'success',
            data:{
                quote
            }
        });
    } catch (error) {
        res.status(500).json({
            status:'fail',
            message:error.message,
        });
    };
};

exports.createQuote = async (req, res, next) =>{
    try {
        const newQuote = await Quotes.create(req.body);
        res.status(201).json({
            status:'succes',
            message:'Quote successfully Created',
            data:{
                quote: newQuote,
            }
        })
    } catch (error) {
        res.status(400).json({
            status:'fail',
            message:'Quote cannot be created!',
            err:error.message,
        });
        
    };
};