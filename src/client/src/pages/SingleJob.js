import { Link } from "react-router-dom";

const SingleJob = ({ job }) => {
  //const { jobId } = useParams();
  const { jobNumber, company, status, _id: jobId } = job;

  return (
    <div>
      <h1>SingleJob</h1>

      <div key={jobId}>
        <div>{jobNumber}</div>
        <div>{company} </div>
        <div>{status} </div>
        <div>{jobId} </div>
      </div>
      <Link to={`/jobs/${jobId}`}>Link</Link>
    </div>
  );
};

export default SingleJob;
