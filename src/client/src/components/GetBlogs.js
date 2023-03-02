import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import {
  Container,
  Title,
  Card,
  Image,
  MainHeading,
  HeroContainer,
  GridBody,
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
    <div>
      <HeroContainer>
        <MainHeading>Blogs</MainHeading>
      </HeroContainer>
      <GridBody>
        <Container>
          {blogs.map((blog) => (
            <Card>
              <Image src={blog?.image?.url} alt={blog.title} />
              <Title>{blog.title}</Title>
              <p>{blog.content}</p>
            </Card>
          ))}
        </Container>
      </GridBody>
    </div>
  );
};

export default GetBlogs;

{
  /* <div key={blog._id}>
<div>
  <Title>{blog.title}</Title>
  <img src={blog?.image?.url} alt={blog.title} />
  <p>{blog.content}</p>
</div>
</div> */
}
