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
});



// Create a new Quote
exports.createQuoteByUploaderName = asyncHandler( async(req, res, next)=> {
    // Checking for required fields
    const { quote, uploadedBy, language } = req.body;
    if(!quote || !uploadedBy || !language) {
        return res.status(400).json({
            status:'fail',
            message:'Please fill in all the required fields'
        });
    }
    
    const newQuote = await QuotesByOther.create(req.body);
    res.status(201).json({
        status:'success',
        message:'Quote successfully Created!',
        data:{
            quote:newQuote,
        }
    });
});


// Get Lists of all Uploaders
exports.getAllUploaders = asyncHandler( async (req, res, next)=>{
    const uploaders = await QuotesByOther.aggregate([
        // Step 1: Group the data
        {$group: {  _id:"$uploadedBy", count:{ $sum: 1} } },
        // Step 2: Sort by Count
        {$sort: { count: -1} },
        // Step 3: Clean up output: rename fileds for frontend
        {$project: {uploader: "$_id", totalQuotes: "$count", _id:0 }}
    ]);
    
    // Guard Clause: no uploaders
    if(!uploaders || uploaders.length ===0){
        return res.status(404).json({
            status:"fail",
            message:"No uploaders found in the database"
        });
    }

    res.status(200).json({
        status:"success",
        results:uploaders.length,
        data: uploaders
    });
})