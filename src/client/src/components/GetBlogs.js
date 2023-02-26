import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import classes from "./GetBlogs.module.css";

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
      <h2>Blogs</h2>
      {blogs.map((blog) => (
        <div className={classes.container}>
          <div className={classes.ul} key={blog._id}>
            <div className={classes.li}>
              <h4>{blog.title}</h4>
              <img src={blog?.image?.url} alt={blog.title} />
              <p>{blog.content}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GetBlogs;
