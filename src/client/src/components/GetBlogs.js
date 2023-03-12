import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import classes from "./GetBlogs.module.css";
import {
  BlogContainer,
  Title,
  BlogItem,
  Image,
  MainHeading,
  HeroContainer,
  BlogsPage,
  //   GridBody,
} from "./BlogStyling";

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
    <BlogsPage>
      <HeroContainer>
        <MainHeading>Blogs</MainHeading>
      </HeroContainer>
      <section>
        <BlogContainer>
          {blogs.map((blog) => (
            <BlogItem>
              <div>
                <Image src={blog?.image?.url} alt={blog.title} />
              </div>
              <div>
                <Title>{blog.title}</Title>
              </div>
              <div>
                <p>{blog.content}</p>
              </div>
            </BlogItem>
          ))}
        </BlogContainer>
      </section>
    </BlogsPage>
  );
};

export default GetBlogs;
