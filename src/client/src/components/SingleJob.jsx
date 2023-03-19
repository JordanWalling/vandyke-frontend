import { Link } from "react-router-dom";
import { Container, JobHeading } from "../components/SingleJobStyling";
const SingleJob = ({ job }) => {
  const { _id, number, status, company, notes } = job;

  return (
    <>
      <Container>
        <JobHeading>{company}</JobHeading>
        <h3>Job Status: </h3>
        <p>{status}</p>
        <h3>Job Number:</h3> <p>{number} </p>
        <h3>Job Id:</h3> <p>{_id} </p>
        <button>
          <Link to={`/dashboard/job/${_id}`}>Job Information</Link>
        </button>
      </Container>
    </>
  );
};

export default SingleJob;
