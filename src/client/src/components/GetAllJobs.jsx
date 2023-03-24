import React, { useState, useEffect } from "react";
import axios from "axios";
import SingleJob from "./SingleJob";
import { Ul, Li, Background } from "./GetAllJobsStyling";

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
    <Background>
      <Ul>
        {/* <h1>Jobs</h1> */}
        {jobs.map((job) => (
          <Li>
            <SingleJob key={job._id} job={job} />
          </Li>
        ))}
      </Ul>
    </Background>
  );
};

export default GetAllJobs;
