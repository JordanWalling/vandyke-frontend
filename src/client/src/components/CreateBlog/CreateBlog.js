import styled from "styled-components";
import classes from "./CreateBlog.module.css";
import { Wrapper, Label, Title, Input } from "./FormStyling";

const CreateBlog = ({
  content,
  setContent,
  handleSubmit,
  title,
  setTitle,
  image,
  setImage,
  handleImage,
}) => {
  return (
    <Wrapper>
      <form className={classes.Form} onSubmit={handleSubmit}>
        <Title>Create a new blog</Title>
        <div>
          <Label>Title:</Label>
          <Input
            type="text"
            value={title}
            placeholder="Enter a Title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <Label>
            <Input type="file" accept="images/*" onChange={handleImage} />
          </Label>
        </div>
        <div>
          <Label>Content:</Label>
          <textarea
            type="text"
            value={content}
            placeholder="Add Content here"
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </Wrapper>
  );
};

export default CreateBlog;
