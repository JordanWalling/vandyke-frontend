import { Link } from "react-router-dom";
import classes from "../components/JobCard.module.css";

const JobCard = ({ job }) => {
  const { _id, number, status, company, notes } = job;

  return (
    <div className={classes.jobCardContainer}>
      <h1 className={classes.jobCardHeading}></h1>

      <div className={classes.jobCardBoxContainer}>
        <div className={classes.jobCardBox}>
          <h2>{company}</h2>
          <h3>Job Status: {status}</h3>
          <h3>Job Number: {number}</h3>
          <h3>Job Id: {_id}</h3>

          <button>
            <Link to={`/jobs/${_id}`}>Job Information</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
