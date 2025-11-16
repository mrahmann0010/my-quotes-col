const express = require("express");
const reviewController = require("../controllers/reviewController");

const router = express.Router();

// POST - Add new review
router.post("/", reviewController.addReview);

// GET - Get all reviews
router.get("/", reviewController.getAllReviews);

// GET - Get review by ID
router.get("/:id", reviewController.getReviewById);

// PUT - Update review by ID
router.put("/:id", reviewController.updateReview);

// DELETE - Delete review by ID
router.delete("/:id", reviewController.deleteReview);

module.exports = router;
