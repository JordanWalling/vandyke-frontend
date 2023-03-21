import { Link } from "react-router-dom";
import Timestamp from "react-timestamp";
import {
  Container,
  Card,
  Box,
  BlogDesc,
  Title,
} from "../components/SingleBlogStyling";

const SingleBlog = ({ blog }) => {
  const { image, title, content, createdAt, _id } = blog;
  return (
    <>
      <Container>
        <Card>
          <Box key={_id}>
            <img src={image.url} alt={title} />
            <BlogDesc>
              <div>
                <Title>{title}</Title>
              </div>
              <div>
                <p>{content}</p>
              </div>
              <div>
                <p>
                  <Timestamp date={createdAt} />
                </p>
              </div>
              <button>
                <Link to={`/blog/${_id}`}>Blog Information</Link>
              </button>
            </BlogDesc>
          </Box>
        </Card>
      </Container>
    </>
  );
};

export default SingleBlog;
