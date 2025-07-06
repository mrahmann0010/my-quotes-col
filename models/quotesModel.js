const mongoose = require('mongoose');

const quoteSchema = new mongoose.Schema({
  quote: {
    type: String,
    required: true,
    trim: true,
  },
  authorID: {
    type: String,
    required: true,
    trim: true,
  },
  author: {
  type: mongoose.Schema.Types.ObjectId,
  ref: 'Authors',
  required: true
  },
  authorName: {
  type: String,
  required: true,
  trim:true,
  },
  source: {
    type: String,
    default: '',
    trim: true,
  },
  tags: {
    type: [String],
    default: [],
  },
  likes: {
    type: Number,
    default: 0,
    min: 0,
  }
}, {
  timestamps: true  // Automatically adds createdAt and updatedAt
});

const Quotes = mongoose.model('Quotes', quoteSchema);

module.exports = Quotes;
