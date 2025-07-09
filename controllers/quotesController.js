const Quotes = require('../models/quotesModel');
const CustomError = require('../utilities/CustomError');
const asyncHandler = require('../utilities/asyncHandler');

exports.getAllQuotes = asyncHandler( async (req, res, next) => {
        const quotes = await Quotes.find(req.query);
        console.log(req.query)
        res.status(200).json({
            status:'success',
            results:quotes.length,
            data:{
                quotes,
            }
        });
});

exports.getASingleQuote = asyncHandler (async (req, res, next) =>{
        const quoteId = req.params.id;
        const quote = await Quotes.findById(quoteId);
        if(!quote) {
            const error = new CustomError(`Quote cannot be found by ID`, 404)
            return next(error);
        }
        res.status(200).json({
            status:'success',
            data:{
                quote
            }
        });
});

exports.getAllQuotesByAnAuthorID = asyncHandler (async (req, res, next)=>{
    const authorID = req.params.authorID;
        const quotesByAuthor = await Quotes.find({authorID:authorID});
        if(!quotesByAuthor.length) {
            const error = new CustomError(`Quote cannot be found by AuthorID`, 404)
            return next(error);
        }
        res.status(200).json({
            status:'success',
            result:quotesByAuthor.length,
            data:{
                quotesByAuthor
            }
        })
});

exports.createQuote = asyncHandler(async (req, res, next) =>{
        const newQuote = await Quotes.create(req.body);
        res.status(201).json({
            status:'succes',
            message:'Quote successfully Created',
            data:{
                quote: newQuote,
            }
        })
});

exports.deleteQuote = asyncHandler (async (req, res, next) => {
        const quoteId = req.params.id;
        await Quotes.findByIdAndDelete(quoteId);

        res.status(204).json({
            status:'success',
            message:'Quote Deleted Successfully',
        });
});

exports.getARandomQuote = asyncHandler ( async (req, res, next)=>{
    const [randomQuote] = await Quotes.aggregate([{$sample:{size:1}}]);
    if(!randomQuote) {
        const error = new CustomError('Quote generation failed', 404);
        return next(error);
    }
    res.status(200).json({
        status:'success',
        data:{
            quote:randomQuote,
        }
    });
});





// exports.getQuoteById = async (req, res, next) =>{
//     try {
//         const quoteId = req.params.id;
//         const quote = await Quotes.findById(quoteId);
//         if(!quote) {
//             return res.status(400).json({
//                 status:'fail',
//                 message:'Quote cannot be found By ID 🆔',
//             });
//         }
//         res.status(200).json({
//             status:'success',
//             data:{
//                 quote
//             }
//         });
//     } catch (error) {
//         res.status(500).json({
//             status:'fail',
//             message:error.message,
//         });
//     };
// };