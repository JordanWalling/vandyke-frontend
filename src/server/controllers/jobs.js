const Job = require("../models/jobs");

const getJobs = async (req, res) => {
  res.json({ message: "GET ALL of the JOBS" });
};
const getJob = async (req, res) => {
  res.json({ message: "GET a JOB" });
};
const createJob = async (req, res) => {
  res.json({ message: "CREATE a JOB" });
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
