// import { useEffect, useState } from "react";
// import axios from "axios";

// const BASE_URL = process.env.REACT_APP_BASE_URL;

// const EditBlog = () => {
//   const [blog, setBlog] = useState({});

//   const fetchBlog = async () => {
//     try {
//       const { data } = await axios.get(`${BASE_URL}/blog/:${_id}`);
//       setBlog(data);
//       console.log(data)
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   useEffect(() => {
//     fetchBlog();
//   }, [_id]);

//   return (
//     <>
//       <pre>{JSON.stringify(blog, null, 4)}</pre>
//     </>
//   );
// };

// export default EditBlog;
