const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    content: {
      type: {},
      required: true,
    },
    image: {
      url: String,
      public_id: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Blog", blogSchema);
