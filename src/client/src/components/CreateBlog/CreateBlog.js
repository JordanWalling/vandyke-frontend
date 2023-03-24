import "./CreateBlog.module.css";
import {
  Background,
  Form,
  FormDetails,
  Label,
  Input,
  Title,
  Button,
  Textarea,
  ImageButton,
} from "../CreateJobStyling";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateBlog = () => {
  // state to create blogs
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState({});

  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const navigate = useNavigate();

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
      navigate("/blogs");
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Background>
      <Form onSubmit={handleSubmit}>
        <Title>Create a new blog</Title>
        <FormDetails>
          <div>
            <Label>Title:</Label>
            <Input
              type="text"
              value={title}
              placeholder="Enter a Title"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <Label>Upload an image </Label>
            <Input type="file" accept="images/*" onChange={handleImage} />
          </div>

          <div>
            <Label>Content:</Label>
            <Textarea
              type="text"
              value={content}
              placeholder="Add Content here"
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
          <Button onClick={handleSubmit}>Submit</Button>
        </FormDetails>
      </Form>
    </Background>
  );
};

export default CreateBlog;
