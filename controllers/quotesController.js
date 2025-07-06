const Quotes = require('../models/quotesModel');

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
        const quoteId = req.params.id;
        const quote = await Quotes.findById(quoteId);
        if(!quote) {
            return res.status(400).json({
                status:'fail',
                message:'Quote cannot be found by ID',
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

exports.getAllQuotesByAnAuthorID = async (req, res, next)=>{
    const authorID = req.params.authorID;
    try {
        const quotesByAuthor = await Quotes.find({authorID:authorID});
        if(!quotesByAuthor.length) {
            return res.status(404).json({
                status:'fail',
                message:'Cannot find Quotes by AuthorID',
            })
        }
        res.status(200).json({
            status:'success',
            result:quotesByAuthor.length,
            data:{
                quotesByAuthor
            }
        })
    } catch (error) {
        res.status(500).json({
            status:'fail',
            message:error.message,
        })
    }
}

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

exports.deleteQuote = async (req, res, next) => {
    try {
        const quoteId = req.params.id;
        await Quotes.findByIdAndDelete(quoteId);

        res.status(204).json({
            status:'success',
            message:'Quote Deleted Successfully',
        });

    } catch (error) {
        res.status(500).json({
            status:'fail',
            message:error.message,
        });
    };
};

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