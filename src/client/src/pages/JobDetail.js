import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const JobDetail = ({ number, company, status }) => {
  const [job, setJob] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  const fetchJob = async () => {
    try {
      const { data } = await axios.get(`${BASE_URL}/job/${id}`);
      setJob(data);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchJob();
  }, [id]);

  // JOB HANDLE DELETE
  const handleJobDelete = async () => {
    try {
      const { data } = await axios.delete(`${BASE_URL}/job/${id} `);
      console.log("Job Deleted" - data);
    } catch (err) {
      console.log(err);
    }
  };

  // JOB HANDLE UPDATE
  const handleJobUpdate = () => {
    navigate(`/jobs/update/${id}`);
  };
  return (
    <>
      <div>
        <h1>{job.company}</h1>
        <h2>{job.status}</h2>
        <h2>{job.number}</h2>
        <h2>{job.id}</h2>
        <span>
          <button onClick={handleJobDelete}>Delete</button>
        </span>
        <span>
          <button onClick={handleJobUpdate}>Update</button>
        </span>
      </div>
      ;
    </>
  );
};

export default JobDetail;
