import React, { useState, useEffect } from "react";
import axios from "axios";
import SingleJob from "./SingleJob";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const GetAllJobs = () => {
  const [jobs, setJobs] = useState([]);

  const fetchAllJobs = async () => {
    try {
      const { data } = await axios.get(`${BASE_URL}/jobs`);
      setJobs(data);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchAllJobs();
  }, []);

  return (
    <div>
      <h1>Jobs</h1>
      {jobs.map((job) => (
        <SingleJob key={job._id} job={job} />
      ))}
    </div>
  );
};

export default GetAllJobs;
