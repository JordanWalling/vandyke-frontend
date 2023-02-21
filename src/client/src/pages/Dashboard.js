import { useState } from "react";
import CreateBlog from "../components/CreateBlog";
import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const Dashboard = () => {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState({});

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
    </div>
  );
};

export default Dashboard;
