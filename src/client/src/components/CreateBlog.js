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
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h2>Create a new blog</h2>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            placeholder="Enter a Title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>
            <input type="file" accept="images/*" onChange={handleImage} />
          </label>
        </div>
        <div>
          <label>Content:</label>
          <textarea
            type="text"
            value={content}
            placeholder="Add Content here"
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default CreateBlog;
