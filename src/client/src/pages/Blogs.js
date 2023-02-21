import { useEffect } from "react";
import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;

// not working yet
const Blogs = () => {
  useEffect =
    (() => {
      fetchBlogs();
    },
    []);

  const fetchBlogs = async () => {
    try {
      const { data } = await axios.get(`${BASE_URL}/all-blogs`);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
    fetchBlogs();
  };

  return (
    <div>
      <h1>Blogs</h1>
      {Blogs.map((blog) => (
        <div>
          <div>{blog.title}</div>
          <div>{blog.content}</div>
          <img src={blog.image.url} alt={blog.title} />
        </div>
      ))}
    </div>
  );
};

export default Blogs;
