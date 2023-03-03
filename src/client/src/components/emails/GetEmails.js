import { useEffect, useState } from "react";
import axios from "axios";
import SingleEmail from "./SingleEmail";
import { MainHeading } from "./SingleEmailStyles";

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
      <MainHeading>Emails</MainHeading>

      {emails.map((email) => (
        <SingleEmail email={email} />
      ))}
    </div>
  );
};

export default GetEmails;
