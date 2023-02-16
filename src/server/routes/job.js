const express = require("express");
const {
  getJob,
  getJobs,
  createJob,
  deleteJob,
  updateJob,
} = require("../controllers/jobs");

const router = express.Router();

// GET JOB/S
router.get("/jobs", getJobs).get("/job/:id", getJob);

// CREATE JOB
router.post("/job", createJob);

// DELETE JOB
router.delete("/job/:id", deleteJob);

// UPDATE JOB
router.patch("/job/:id", updateJob);

module.exports = router;
