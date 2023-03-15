import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateJob = () => {
  // state to create jobs
  const [number, setNumber] = useState("");
  const [company, setCompany] = useState("");
  const [status, setStatus] = useState("");
  const [notes, setNotes] = useState("");

  const navigate = useNavigate();
  const BASE_URL = process.env.REACT_APP_BASE_URL;

  // CREATE JOB HANDLE SUBMIT
  const handleJobSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`${BASE_URL}/job`, {
        number,
        company,
        status,
        notes,
      });
      console.log("Job Created =>");
      console.log(data);
      navigate("/all-jobs");
      if (data.job) {
        return new Error("Job already exists");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <form className="form" onSubmit={handleJobSubmit}>
        <h2>Create a New Job</h2>
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
            placeholder="Add any note or N/A"
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

        <button onClick={handleJobSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default CreateJob;
