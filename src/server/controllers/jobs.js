const Job = require("../models/jobs");

const getJobs = async (req, res) => {
  try {
    const allJobs = await Job.find({}).sort("createdAt");
    res.status(200).json(allJobs);
  } catch (err) {
    console.log(err);
  }
};

// GET A JOB
const getJob = async (req, res) => {
  const {
    params: { id: jobId },
  } = req;
  try {
    const job = await Job.findOne({
      _id: jobId,
    });
    if (!job) {
      return res.json({ error: "Job not found" });
    }
    res.json(job);
  } catch (err) {
    console.log(err);
  }
};
// CREATE A JOB
const createJob = async (req, res) => {
  const { number, company, status } = req.body;

  const job = await Job.findOne({ number });

  if (job) {
    return res.json({ error: "Job already exists" });
  }
  if (!number) {
    return res.json({ error: "Please provide a number" });
  }
  if (!company) {
    return res.json({ error: "Please provide company company" });
  }
  try {
    const job = await Job.create({
      number,
      company,
      status,
    });
    job.save();
    res.status(200).json({ job });
  } catch (err) {
    console.log(err);
  }
};
const updateJob = async (req, res) => {
  res.json({ message: "UPDATE existing JOB" });
};
const deleteJob = async (req, res) => {
  res.json({ message: "DELETE a JOB" });
};

module.exports = {
  getJob,
  getJobs,
  createJob,
  updateJob,
  deleteJob,
};
