import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const GetBlogs = () => {
  const { blogId } = useParams();
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    try {
      const { data } = await axios.get(`${BASE_URL}/all-blogs`);
      setBlogs(data);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div>
      <h1>Blogs</h1>
      {blogs.map((blog) => (
        <div key={blog._id}>
          <div>{blog.title}</div>
          <div>{blog.content}</div>
          <img src={blog?.image?.url} alt={blog.title} />

          <Link to={`/blogs/${blogId}}`}>Link</Link>
        </div>
      ))}
    </div>
  );
};

export default GetBlogs;
