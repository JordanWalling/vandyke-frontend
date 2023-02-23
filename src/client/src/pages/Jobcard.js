import { Link, useParams } from "react-router-dom";

const JobCard = ({ job }) => {
  const { _id, number, status, company } = job;
  // const { number, company, status, _id } = job;

  return (
    <div>
      <h1>SingleJob</h1>

      <div key={_id}>
        <div>{number}</div>
        <div>{company} </div>
        <div>{status} </div>
        <div>{_id} </div>
      </div>
      <Link to={`/jobs/${_id}`}>Link</Link>
    </div>
  );
};

export default JobCard;
