import axios from "axios";
import { useEffect, useState } from "react";
import GetBlogs1 from "../components/GetBlogs1";
import SingleBlog from "./SingleBlog";
const BASE_URL = process.env.REACT_APP_BASE_URL;

const Blogs = () => {
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
      <ul>
        {/* <h1>Jobs</h1> */}
        {blogs.map((blog) => (
          <li>
            <SingleBlog blog={blog} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blogs;
