// This model will be used to store only quotes from other persons
const mongoose = require('mongoose');

const quotesByOtherSchema = new mongoose.Schema({
  quote: {
    type: String,
    required: true,
    trim: true,
  },
  authorName: {
    type: String,
    // required: true,
    trim: true,
  },
  // Old String -> Prev Implementation
  uploadedBy: {
    type: String,
    required: true,
    trim: true,
    set: (val) => val.toLowerCase(), // Store Uploader Name in Lowercase
  },
  // New String -> New Implementation -- Better way to Keep track of uploader
  uploader:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Uploader',   // Each quote is linked with an object from Uploader Collection
  },
  tags: {
    type: [String],
    default: [],
  },

  // Added to new DB Model to complete it
  language: {
    type: String,
    enum: ['english', 'bangla'],
    required: true,
  },
  source: {
    type:String,
    trim:true,
    default:'',
  },

}, {
  timestamps: true  // ✅ adds createdAt and updatedAt
});

const QuotesByOther = mongoose.model('QuotesByOther', quotesByOtherSchema);

module.exports = QuotesByOther;