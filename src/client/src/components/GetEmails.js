import { useEffect, useState } from "react";
import axios from "axios";
import SingleEmail from "./SingleEmail";
const BASE_URL = process.env.REACT_APP_BASE_URL;

const GetEmails = () => {
  const [emails, setEmails] = useState([]);
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const fetchEmails = async () => {
    try {
      const { data } = await axios.get(`${BASE_URL}/emails`);
      setEmails(data);
      setName(data.name);
      setPhoneNumber(data.phoneNumber);
      setUserEmail(data.userEmail);
      setMessage(data.message);
      setId(data._id);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchEmails();
  }, []);

  return (
    <div>
      <h1>Emails</h1>
      {emails.map((email) => (
        <SingleEmail
          email={email}
          // key={id}
          // id={id}
          // name={name}
          // userEmail={userEmail}
          // message={message}
          // phoneNumber={phoneNumber}
        />
      ))}
    </div>
  );
};

export default GetEmails;
