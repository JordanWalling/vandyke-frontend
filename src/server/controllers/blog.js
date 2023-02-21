const Blog = require("../models/blog");
require("dotenv").config();

const cloudinary = require("cloudinary");

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

// CREATE A BLOG
const createBlog = async (req, res) => {
  // console.log(req.body);
  const { content, title, image } = req.body;
  if (!content || !title) {
    res.json({ error: "Please fill in all fields" });
  }
  try {
    const blog = await Blog.create({
      content: req.body.content,
      title: req.body.title,
      image,
    });
    blog.save();
    res.status(200).json(blog);
  } catch (err) {
    console.log(err);
  }
};

// UPLOAD IMAGE TO CLOUDINARY
const uploadBlogImage = async (req, res) => {
  try {
    const uploadImage = await cloudinary.uploader.upload(req.files.image.path);
    console.log("uploaded image url => ", uploadImage);
    res.json({
      url: uploadImage.secure_url,
      public_id: uploadImage.public_id,
    });
  } catch (err) {
    console.log(err);
  }
};

// GET ALL BLOGS
const getBlogs = async (req, res) => {
  try {
    const getAllBlogs = await Blog.find({}).sort("createdAt");
    res.status(200).json(getAllBlogs);
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  createBlog,
  uploadBlogImage,
  getBlogs,
};
