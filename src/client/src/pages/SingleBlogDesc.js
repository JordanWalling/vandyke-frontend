import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

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
    <div>
      {/* <Container> */}
      {/* <Card> */}
      <h1>{blog.title}</h1>
      <img src={blog.image.url} alt={title} />
      <p>{blog.content}</p>
      <p>{blog.createdAt}</p>

      <span>
        <button onClick={handleBlogReturn}>Return to Blogs</button>
      </span>
      {/* </Card> */}
      {/*  </Container> */}
    </div>
  );
};

export default SingleBlogDesc;
