import styled from "styled-components";
import classes from "./CreateBlog.module.css";

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
  const Wrapper = styled.div`
    border: 2px solid red;
    display: flex;
    justify-content: center;
    justify-items: center;
    height: 50vh;
  `;

  const Label = styled.label`
    font-size: 2rem;
  `;

  const Title = styled.h2`
    font-size: 3rem;
    padding: 1rem 0;
  `;

  const Input = styled.input`
    font-size: 1.5rem;
    padding-left: 0.25rem;
  `;
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
            <input type="file" accept="images/*" onChange={handleImage} />
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
