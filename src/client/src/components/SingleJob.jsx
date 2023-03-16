import { Link } from "react-router-dom";

const SingleJob = ({ job }) => {
  const { _id, number, status, company, notes } = job;

  return (
    <>
      <h2>{company}</h2>
      <h3>Job Status: {status}</h3>
      <h3>Job Number: {number}</h3>
      <h3>Job Id: {_id}</h3>
      <button>
        <Link to={`/dashboard/job/${_id}`}>Job Information</Link>
      </button>
    </>
  );
};

export default SingleJob;
