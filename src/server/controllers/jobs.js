const Job = require("../models/jobs");

const getJobs = async (req, res) => {
  res.json({ message: "GET ALL of the JOBS" });
};
const getJob = async (req, res) => {
  res.json({ message: "GET a JOB" });
};
const createJob = async (req, res) => {
  const { number, company } = req.body;

  const jobExists = Job.find({ number });
  if (jobExists) {
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
      number: req.body.number,
      company: req.body.company,
      status: req.body.status,
    });
    job.save();
    res.status(200).json(job);
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
