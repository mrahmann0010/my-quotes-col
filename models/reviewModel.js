const mongoose = require("mongoose");

// Define the schema for the BookReview with an image field
const bookReviewSchema = new mongoose.Schema({
  bookName: {
    type: String,
    required: true,
    trim: true,
  },
  authorName: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5, // assuming rating is between 1 and 5
  },
  review: {
    type: String,
    required: true,
  },
  reviewerName: {
    type: String,
    required: true,
    trim: true,
  },
  genre: {
    type: String,
    trim: true,
  },
  reviewDate: {
    type: Date,
    default: Date.now,
  },
  likes: {
    type: Number,
    default: 0,
  },
  dislikes: {
    type: Number,
    default: 0,
  },
  // New field for the book cover image
  bookImage: {
    type: String,
    trim: true, // assuming you store an image URL here
    required: false, // optional
  },
});

// Create the BookReview model based on the schema
const BookReview = mongoose.model("BookReview", bookReviewSchema);

module.exports = BookReview;
