const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
  {
    number: {
      type: Number,
      required: true,
    },
    company: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["created", "progress", "completed", "sent"],
      default: "created",
    },
    notes: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Job", jobSchema);
