import { useState } from "react";
import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const ContactUs = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`${BASE_URL}/email`, {
        phoneNumber,
        userEmail,
        name,
        message,
      });
      console.log("Email Created");
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <form className="form" onSubmit={handleEmailSubmit}>
        <h2>ContactUs</h2>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            value={name}
            placeholder="Please enter your name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="number"
            value={phoneNumber}
            placeholder="Please enter your Phone Number"
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            value={userEmail}
            placeholder="Please enter your email address"
            onChange={(e) => setUserEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Enquiry:</label>
          <input
            type="text"
            value={message}
            placeholder="Please type any enquiries"
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <button onSubmit={handleEmailSubmit}>Submit</button>
      </form>
    </div>
  );
};
export default ContactUs;
