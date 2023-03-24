import { AiFillDelete } from "react-icons/ai";
import { CiEdit } from "react-icons/ci";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import {
  Container,
  Job,
  JobItem,
  Button,
  Background,
} from "../components/SingleJobDescStyling";
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
    <Background>
      <Container>
        <Job>
          <h1>{job.company}</h1>
          <JobItem>
            <h3>Job Status: </h3>
            <p> {job.status} </p>
          </JobItem>
          <JobItem>
            <h3>Job Number: </h3>
            <p>{job.number}</p>
          </JobItem>
          <JobItem>
            <h3>Job Id:</h3>
            <p>{job._id}</p>
          </JobItem>
          <JobItem>
            <h3>Notes:</h3>
            <p>{job.notes}</p>
          </JobItem>

          <span>
            <Button onClick={handleJobDelete}>
              <AiFillDelete />
            </Button>
          </span>
          <span>
            <Button onClick={handleJobUpdate}>
              <CiEdit />
            </Button>
          </span>
          <span>
            <button onClick={handleJobReturn}>Back to Jobs</button>
          </span>
        </Job>
      </Container>
    </Background>
  );
};

export default SingleJobDesc;
