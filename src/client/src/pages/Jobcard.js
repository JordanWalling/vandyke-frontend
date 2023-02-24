import { Link } from "react-router-dom";
import classes from "../components/JobCard.module.css";

const JobCard = ({ job }) => {
  const { _id, number, status, company } = job;
  // const { number, company, status, _id } = job;

  return (
    // <div className={classes.JobCardContainers}>
    <div className={classes.JobCardInfo} key={_id}>
      <h3>{company}</h3>
      <div>Job Number: {number}</div>
      <div>Job Status: {status} </div>
      <div>Job Id: {_id} </div>
      <button>
        <Link to={`/jobs/${_id}`}>{company}</Link>
      </button>
    </div>
    // </div>
  );
};

export default JobCard;
