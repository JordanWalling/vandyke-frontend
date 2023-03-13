import { useState } from "react";
import SingleBlog from "../pages/SingleBlog";

const GetBlogs1 = ({ blogs }) => {
  return (
    <main>
      <div>
        <h2>All the blogs</h2>
      </div>
      <div>
        {blogs.map((blog) => {
          return <SingleBlog key={blog.id} {...blog} />;
        })}
      </div>
    </main>
  );
};

export default GetBlogs1;
