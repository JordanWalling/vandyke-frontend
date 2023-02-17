const express = require("express");
const formidable = require("express-formidable");

const router = express.Router();

// controllers
const { createBlog, uploadBlogImage } = require("../controllers/blog");

router.post("/create-blog", createBlog);
router.post(
  "/upload-blog-image",
  formidable({ maxFileSize: 3 * 1024 * 1024 }),
  uploadBlogImage
);

module.exports = router;
