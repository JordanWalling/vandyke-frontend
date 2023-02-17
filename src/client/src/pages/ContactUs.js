const ContactUs = () => {
  return (
    <div>
      <form className="form">
        <h2>ContactUs</h2>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            //value="name"
            placeholder="Please enter your name"
          />
        </div>
        <div>
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="number"
            //value="phone"
            placeholder="Please enter your Phone Number"
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            //value="email"
            placeholder="Please enter your email address"
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};
export default ContactUs;
