const CreateBlog = ({ content, setContent, handleSubmit }) => {
  return (
    <div>
      <form className="form">
        <h2>Create a new blog</h2>
        <div>
          <label htmlFor="name">Title:</label>
          <input
            type="text"
            //value="Title"
            placeholder="Enter a Title"
          />
        </div>
        <div>
          <label>Image:</label>
          <input
            type="file"
            //value="image"
          />
        </div>
        <div>
          <label>Content:</label>
          <input
            type="text"
            //value="content"
            placeholder="Add Content here"
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default CreateBlog;
