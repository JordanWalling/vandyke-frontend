const CreateJob = ({
  number,
  setNumber,
  company,
  setCompany,
  status,
  setStatus,
  handleJobSubmit,
}) => {
  return (
    <div>
      <form className="form" onSubmit={handleJobSubmit}>
        <h2>Create a New Job</h2>
        <div>
          <label>Job Number:</label>
          <input
            type="number"
            value={number}
            placeholder="Enter Job Number"
            onChange={(e) => setNumber(e.target.value)}
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
        <div>
          <label htmlFor="status">Job Status</label>
          <select
            type="string"
            value={status}
            defaultValue={"default"}
            onChange={(e) => setStatus(e.target.value)}
            name="status"
          >
            <option value={"default"}>Choose an option</option>
            <option value={"created"}>Job Created</option>
            <option value={"progress"}>job in progress</option>
            <option value={"completed"}>job completed</option>
            <option value={"sent"}>job sent</option>
          </select>
        </div>

        <button onClick={handleJobSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default CreateJob;
