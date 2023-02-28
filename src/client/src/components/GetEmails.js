import { useEffect } from "react";
import axios from "axios";
import SingleEmail from "./SingleEmail";
const BASE_URL = process.env.REACT_APP_BASE_URL;

const GetEmails = ({ emails, setEmails }) => {
  const fetchEmails = async () => {
    try {
      const { data } = await axios.get(`${BASE_URL}/emails`);
      setEmails(data);
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
        <SingleEmail key={email._id} emails={emails} setEmails={setEmails} />
      ))}
    </div>
  );
};

export default GetEmails;
