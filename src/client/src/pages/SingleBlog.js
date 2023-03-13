import SingleBlogStyling from "react";
import { Article, Card, Content, Title } from "../components/SingleBlogStyling";

const SingleBlog = ({ id, image, content, title, createdAt }) => {
  return (
    <>
      <Article>
        <Card>
          <img src={image.url} alt={title} />

          <Content>
            <div>
              <Title>{title}</Title>
              <p>{content}</p>
              <p>{createdAt}</p>
            </div>
          </Content>
        </Card>
      </Article>
    </>
  );
};

export default SingleBlog;
