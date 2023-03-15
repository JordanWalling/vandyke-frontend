import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const UpdateJobForm = () => {
  const navigate = useNavigate();

  const [number, setNumber] = useState("");
  const [company, setCompany] = useState("");
  const [status, setStatus] = useState("");
  const [id, setId] = useState("");
  const [notes, setNotes] = useState("");

  useEffect(() => {
    fetchJob();
  }, []);

  const params = useParams();

  const fetchJob = async () => {
    try {
      const { data } = await axios.get(`${BASE_URL}/job/${params.id}`);
      setNumber(data.number);
      setCompany(data.company);
      setStatus(data.status);
      setId(data.id);
      setNotes(data.notes);
    } catch (err) {
      console.log(err);
    }
  };

  const handleJobUpdate = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.patch(`${BASE_URL}/job/${params.id}`, {
        number,
        company,
        status,
        notes,
      });
      console.log("Job Updated");
      console.log(data);
      navigate("/dashboard/all-jobs");
      if (data.job) {
        return new Error("Job already exists");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <form className="form" onSubmit={handleJobUpdate}>
        <h2>Update a Job</h2>
        <div>
          <label>Job Number:</label>
          <input
            type="number"
            value={number}
            placeholder="Enter Job Number"
            onChange={(e) => setNumber(e.target.value)}
          />
        </div>
        <div>
          <label>Company:</label>
          <textarea
            type="text"
            value={company}
            placeholder="Add Company Name"
            onChange={(e) => setCompany(e.target.value)}
          />
        </div>
        <div>
          <label>Notes:</label>
          <textarea
            type="text"
            value={notes}
            placeholder="Add Notes or n/a"
            onChange={(e) => setNotes(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="status">Job Status</label>
          <select
            type="string"
            value={status}
            defaultValue={"default"}
            onChange={(e) => setStatus(e.target.value)}
            name="status"
          >
            <option value={"default"}>Choose an option</option>
            <option value={"created"}>Job Created</option>
            <option value={"progress"}>job in progress</option>
            <option value={"completed"}>job completed</option>
            <option value={"sent"}>job sent</option>
          </select>
        </div>

        <button onClick={handleJobUpdate}>Submit</button>
      </form>
    </div>
  );
};

export default UpdateJobForm;
