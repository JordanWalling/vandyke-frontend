// import GetBlogs from "../components/GetBlogs";

// const Blogs = () => {
//   return (
//     <div>
//       <GetBlogs />
//     </div>
//   );
// };
import axios from "axios";
import { useEffect, useState } from "react";
import GetBlogs1 from "../components/GetBlogs1";
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
      <GetBlogs1 blogs={blogs} />
    </div>
  );
};

export default Blogs;
