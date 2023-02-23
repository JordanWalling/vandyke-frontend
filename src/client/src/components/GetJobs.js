import { useEffect, useState } from "react";
import axios from "axios";
import SingleJob from "../pages/SingleJob";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const GetJobs = () => {
  const [jobs, setJobs] = useState([]);

  const fetchJobs = async () => {
    try {
      const { data } = await axios.get(`${BASE_URL}/jobs`);
      const { number, _id, status, company } = data;
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
        <SingleJob key={job._id} job={job} />
        // <div key={job._number}>
        //   <div>{job._number}</div>
        //   <div>{job.company} </div>
        //   <div>{job.status} </div>
        // </div>
      ))}
    </div>
  );
};

export default GetJobs;
