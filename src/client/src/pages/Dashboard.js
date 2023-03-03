import styled from "styled-components";
import { useState } from "react";
import CreateBlog from "../components/CreateBlog/CreateBlog";
import CreateJob from "../components/CreateJob";
import UpdateJobForm from "../pages/UpdateJobForm";
import axios from "axios";
import JobDetail from "./JobDetail";
import { Link, useNavigate } from "react-router-dom";
import GetEmails from "../components/emails/GetEmails";
import Banner from "../components/dashboard/Banner";
const BASE_URL = process.env.REACT_APP_BASE_URL;

const Title = styled.h2`
  color: #fff;
  font-size: 5rem;
`;

const Dashboard = () => {
  const navigate = useNavigate();
  // state to create blogs
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState({});
  // state to create jobs
  const [number, setNumber] = useState("");
  const [company, setCompany] = useState("");
  const [status, setStatus] = useState("");
  const [notes, setNotes] = useState("");

  // state to get emails
  const [emails, setEmails] = useState([]);

  // handle image
  const handleImage = async (e) => {
    const uploadFile = await e.target.files[0];
    let formData = await new FormData();
    formData.append("image", uploadFile);

    try {
      const { data } = await axios.post(
        `${BASE_URL}/upload-blog-image`,
        formData
      );
      console.log(data);
      setImage({
        url: data.url,
        public_id: data.public_id,
      });
    } catch (err) {
      console.log(err);
    }
  };

  // CREATE BLOG HANDLE SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(`${BASE_URL}/create-blog`, {
        content,
        title,
        image,
      });
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

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
      navigate("/jobs");
      if (data.job) {
        return new Error("Job already exists");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Banner>
        <Title>Welcome, User</Title>
      </Banner>
      <CreateBlog
        content={content}
        setContent={setContent}
        handleSubmit={handleSubmit}
        title={title}
        setTitle={setTitle}
        image={image}
        setImage={setImage}
        handleImage={handleImage}
      />
      <h3>Create a Job</h3>
      <CreateJob
        number={number}
        setNumber={setNumber}
        company={company}
        setCompany={setCompany}
        status={status}
        setStatus={setStatus}
        handleJobSubmit={handleJobSubmit}
        notes={notes}
        setNotes={setNotes}
      />
    </div>
  );
};

export default Dashboard;
