const BookReview = require("../models/reviewModel"); // Import your Mongoose model

// Add a new review
exports.addReview = async (req, res) => {
  try {
    const {
      bookName,
      authorName,
      description,
      rating,
      review,
      reviewerName,
      genre,
      bookImage,
    } = req.body;

    // Create a new BookReview document
    const newReview = new BookReview({
      bookName,
      authorName,
      description,
      rating,
      review,
      reviewerName,
      genre,
      bookImage,
    });

    // Save the review to the database
    await newReview.save();

    res.status(201).json({
      message: "Review added successfully!",
      review: newReview,
    });
  } catch (error) {
    console.error("Error adding review:", error);
    res.status(500).json({
      message: "Failed to add review",
      error: error.message,
    });
  }
};

// Get all reviews
exports.getAllReviews = async (req, res) => {
  try {
    const reviews = await BookReview.find(); // Get all reviews from the database
    res.status(200).json(reviews);
  } catch (error) {
    console.error("Error getting reviews:", error);
    res.status(500).json({
      message: "Failed to fetch reviews",
      error: error.message,
    });
  }
};

// Get a review by ID
exports.getReviewById = async (req, res) => {
  try {
    const reviewId = req.params.id; // Get the ID from the URL params
    const review = await BookReview.findById(reviewId); // Find the review by ID

    if (!review) {
      return res.status(404).json({ message: "Review not found" });
    }

    res.status(200).json(review);
  } catch (error) {
    console.error("Error fetching review:", error);
    res.status(500).json({
      message: "Failed to fetch review",
      error: error.message,
    });
  }
};

// Update a review by ID
exports.updateReview = async (req, res) => {
  try {
    const reviewId = req.params.id;
    const {
      bookName,
      authorName,
      description,
      rating,
      review,
      reviewerName,
      genre,
      bookImage,
    } = req.body;

    // Update the review by ID
    const updatedReview = await BookReview.findByIdAndUpdate(
      reviewId,
      {
        bookName,
        authorName,
        description,
        rating,
        review,
        reviewerName,
        genre,
        bookImage,
      },
      { new: true } // `new: true` returns the updated document
    );

    if (!updatedReview) {
      return res.status(404).json({ message: "Review not found" });
    }

    res.status(200).json({
      message: "Review updated successfully!",
      review: updatedReview,
    });
  } catch (error) {
    console.error("Error updating review:", error);
    res.status(500).json({
      message: "Failed to update review",
      error: error.message,
    });
  }
};

// Delete a review by ID
exports.deleteReview = async (req, res) => {
  try {
    const reviewId = req.params.id;

    // Find and delete the review by ID
    const deletedReview = await BookReview.findByIdAndDelete(reviewId);

    if (!deletedReview) {
      return res.status(404).json({ message: "Review not found" });
    }

    res.status(200).json({
      message: "Review deleted successfully!",
      review: deletedReview,
    });
  } catch (error) {
    console.error("Error deleting review:", error);
    res.status(500).json({
      message: "Failed to delete review",
      error: error.message,
    });
  }
};
