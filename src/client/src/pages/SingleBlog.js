// import { useEffect, useState } from "react";
// import axios from "axios";
import { useParams } from "react-router-dom";

// const BASE_URL = process.env.REACT_APP_BASE_URL;

const SingleBlog = ({ blogs }) => {
  // const [blogs, setBlogs] = useState([]);
  // const { blogId } = useParams();

  // const fetchBlog = async () => {
  //   try {
  //     const { data } = await axios.get(`${BASE_URL}/blogs/${blogId}`);
  //     setBlogs(data);
  //     console.log(data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // useEffect(() => {
  //   fetchBlog();
  // }, []);

  return (
    <div>
      <div key={blogs._id}>
        <img src={blogs.image.url} alt={blogs.title} />
        <div>{blogs.content}</div>
        <div>{blogs.createdAt}</div>
      </div>
    </div>
  );
};

export default SingleBlog;
