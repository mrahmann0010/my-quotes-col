const QuotesByOther = require('../models/quotesByOtherModel');
const CustomError = require('../utilities/CustomError');
const asyncHandler = require('../utilities/asyncHandler');



// Get A Quote by Uploader
exports.getQuotesByUploaderName = asyncHandler( async(req, res, next)=> {
    const uploaderName = req.params.uploaderName;

    if(!uploaderName) {
        return res.status(400).json({message:'Uploader name is Required!'})
    }

    const quotesByUploader = await QuotesByOther.find({uploadedBy:uploaderName}).sort({createdAt:-1});

    if(quotesByUploader.length===0) {
        return res.status(404).json({message:`No quotes found for uploader ${uploaderName}`});
    }

    res.json(quotesByUploader);
})



// Create a new Quote
exports.createQuoteByUploaderName = asyncHandler( async(req, res, next)=> {
    const newQuote = await QuotesByOther.create(req.body);
    res.status(201).json({
        status:'success',
        message:'Quote successfully Created!',
        data:{
            quote:newQuote,
        }
    });
});

