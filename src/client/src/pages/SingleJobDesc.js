import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const SingleJobDesc = ({ number, company, status, notes }) => {
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
      navigate("/dashboard/all-jobs");
    } catch (err) {
      console.log(err);
    }
  };

  // JOB HANDLE UPDATE
  const handleJobUpdate = () => {
    navigate(`/dashboard/job/update/${id}`);
  };

  // HANDLE JOB RETURN
  const handleJobReturn = () => {
    navigate("/dashboard/all-jobs");
  };
  return (
    <div>
      <h1>Single Job Page</h1>

      <div>
        <div>
          <h1>{job.company}</h1>
          <h3>{job.status}</h3>
          <h3>{job.number}</h3>
          <h3>{job.id}</h3>
          <p>{job.notes}</p>

          <span>
            <button onClick={handleJobDelete}>Delete</button>
          </span>
          <span>
            <button onClick={handleJobUpdate}>Update</button>
          </span>
          <span>
            <button onClick={handleJobReturn}>Back to Jobs</button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SingleJobDesc;
