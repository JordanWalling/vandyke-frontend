import { Link } from "react-router-dom";
import classes from "../components/JobCard.module.css";

const SingleJob = ({ job }) => {
  const { _id, number, status, company, notes } = job;

  return (
    <div>
      <h1></h1>

      <div>
        <div>
          <h2>{company}</h2>
          <h3>Job Status: {status}</h3>
          <h3>Job Number: {number}</h3>
          <h3>Job Id: {_id}</h3>

          <button>
            <Link to={`/dashboard/job/${_id}`}>Job Information</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleJob;
