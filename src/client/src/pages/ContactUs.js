import { useState } from "react";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div>
      <form className="form">
        <h2>ContactUs</h2>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            value={name}
            placeholder="Please enter your name"
          />
        </div>
        <div>
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="number"
            value={phoneNumber}
            placeholder="Please enter your Phone Number"
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            value={email}
            placeholder="Please enter your email address"
          />
        </div>
        <div>
          <label>Enquiry:</label>
          <input
            type="text"
            value={message}
            placeholder="Please type any enquiries"
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};
export default ContactUs;
