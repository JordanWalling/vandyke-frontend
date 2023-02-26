const mongoose = require("mongoose");

const emailSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    userEmail: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Email", emailSchema);
