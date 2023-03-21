import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Background,
  FormDetails,
  Form,
  Label,
  Input,
  Textarea,
  Title,
  Button,
  Select,
} from "../components/CreateJobStyling";

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
    <Background>
      <Form className="form" onSubmit={handleJobSubmit}>
        <Title>Create a New Job</Title>
        <FormDetails>
          <div>
            <Label>Job Number:</Label>
          </div>
          <div>
            <Input
              type="number"
              value={number}
              placeholder="Enter Job Number"
              onChange={(e) => setNumber(e.target.value)}
            />
          </div>
          <div>
            <Label>Company:</Label>
          </div>
          <div>
            <Input
              type="text"
              value={company}
              placeholder="Add Company Name"
              onChange={(e) => setCompany(e.target.value)}
            />
          </div>
          <div>
            <Label>Notes:</Label>
          </div>
          <div>
            <Textarea
              type="text"
              value={notes}
              placeholder="Add any note or N/A"
              onChange={(e) => setNotes(e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="status">Job Status:</Label>
          </div>
          <div>
            <Select
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
            </Select>
          </div>

          <Button onClick={handleJobSubmit}>Submit</Button>
        </FormDetails>
      </Form>
    </Background>
  );
};

export default CreateJob;
