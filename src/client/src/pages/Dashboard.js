import { useState } from "react";
import CreateBlog from "../components/CreateBlog";
import CreateJob from "../components/CreateJob";
import axios from "axios";
import JobDetail from "./JobDetail";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const Dashboard = () => {
  // state to create blogs
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState({});
  // state to create jobs
  const [number, setNumber] = useState("");
  const [company, setCompany] = useState("");
  const [status, setStatus] = useState("");

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
      });
      console.log("Job Created =>");
      console.log(data);
      if (data.job) {
        return new Error("Job already exists");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h2>Dashboard</h2>
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
      <CreateJob
        number={number}
        setNumber={setNumber}
        company={company}
        setCompany={setCompany}
        status={status}
        setStatus={setStatus}
        handleJobSubmit={handleJobSubmit}
      />
    </div>
  );
};

export default Dashboard;
