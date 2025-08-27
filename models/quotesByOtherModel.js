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
    required: true,
    trim: true,
  },
  uploadedBy: {
    type: String,
    required: true,
    trim: true,
    set: (val) => val.toLowerCase(), // Store Uploader Name in Lowercase
  },
  tags: {
    type: [String],
    default: [],
  },
}, {
  timestamps: true  // ✅ adds createdAt and updatedAt
});

const QuotesByOther = mongoose.model('QuotesByOther', quotesByOtherSchema);

module.exports = QuotesByOther;