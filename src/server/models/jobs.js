const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
  {
    jobNumber: {
      type: Number,
      required: true,
      unique: true,
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
