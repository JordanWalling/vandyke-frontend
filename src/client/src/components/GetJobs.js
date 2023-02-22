import { useEffect, useState } from "react";
import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const GetJobs = () => {
  const [jobs, setJobs] = useState([]);
  const fetchJobs = async () => {
    try {
      const { data } = await axios.get(`${BASE_URL}/jobs`);
      setJobs(data);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <div>
      <h1>Jobs</h1>
      {jobs.map((job) => (
        <div>
          <div>{job.number}</div>
          <div>{job.company} </div>
          <div>{job.status} </div>
        </div>
      ))}
    </div>
  );
};

export default GetJobs;
