import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const SingleEmailDesc = ({ name, phoneNumber, userEmail, message }) => {
  const [email, setEmail] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  const fetchEmail = async () => {
    try {
      const { data } = await axios.get(`${BASE_URL}/email/${id}`);
      setEmail(data);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchEmail();
  }, [id]);

  // EMAIL HANDLE DELETE
  const handleEmailDelete = async () => {
    try {
      const { data } = await axios.delete(`${BASE_URL}/email/${id} `);
      console.log("Email Deleted" - data);
      navigate("/emails");
    } catch (err) {
      console.log(err);
    }
  };

  // HANDLE EMAIL RETURN
  const handleEmailReturn = () => {
    navigate("/emails");
  };

  return (
    <div>
      <h2>id: {email.id}</h2>
      <h2>Name: {email.name}</h2>
      <h3>Phone Number: {email.phoneNumber}</h3>
      <h3>Email Address: {email.userEmail}</h3>
      <p>message: {email.message}</p>
      <span>
        <button onClick={handleEmailDelete}>Delete</button>
      </span>

      <span>
        <button onClick={handleEmailReturn}>Back to Emails</button>
      </span>
    </div>
  );
};

export default SingleEmailDesc;
