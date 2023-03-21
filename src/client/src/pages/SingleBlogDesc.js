import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Timestamp from "react-timestamp";
import {
  Background,
  Box,
  Card,
  Content,
  Title,
  Paragraph,
} from "../components/SingleBlogDescStyling";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const SingleBlogDesc = ({ image, content, title, createdAt }) => {
  const [blog, setBlog] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  const fetchBlog = async () => {
    try {
      const { data } = await axios.get(`${BASE_URL}/blog/${id}`);
      setBlog(data);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchBlog();
  }, [id]);

  // HANDLE JOB RETURN
  const handleBlogReturn = () => {
    navigate("/blogs");
  };
  return (
    <Background>
      <Card>
        <Box>
          <div>
            <img src={blog?.image?.url} alt={title} />
          </div>
          <Content>
            <Title key={blog._id}>{blog.title}</Title>
            <div>
              <Paragraph>{blog.content}</Paragraph>
            </div>
            <div>
              <p>
                <Timestamp date={blog.createdAt} />
              </p>
            </div>
            <div>
              <span>
                <button onClick={handleBlogReturn}>Return to Blogs</button>
              </span>
            </div>
          </Content>
        </Box>
      </Card>
    </Background>
  );
};

export default SingleBlogDesc;
