const express = require("express");
const router = express.Router();
const quotesByOtherController = require("../controllers/quotesByOthersController");

// Get Quotes By Uploader Name
router.get(
  "/uploader/:uploaderName",
  quotesByOtherController.getQuotesByUploaderName
);

// Create a Quote by Uploader Name
router.post("/", quotesByOtherController.createQuoteByUploaderName);

// Get All uploaders -> Modified Version
router.get("/uploaders", quotesByOtherController.getAllUploaders);

// Create a Uploader
router.post("/uploaders", quotesByOtherController.createUploader);

// Get All Quotes From this Collection
router.get("/allquotes", quotesByOtherController.getAllQuotes);

module.exports = router;
