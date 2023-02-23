const CreateJob = () => {
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h2>Create a New Job</h2>
        <div>
          <label>Job Number:</label>
          <input
            type="number"
            value={jobNumber}
            placeholder="Enter Job Number"
            onChange={(e) => setJobNumber(e.target.value)}
          />
        </div>
        <div>
          <label>Company:</label>
          <textarea
            type="text"
            value={company}
            placeholder="Add Company Name"
            onChange={(e) => setCompany(e.target.value)}
          />
        </div>
        <div></div>
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default CreateJob;
