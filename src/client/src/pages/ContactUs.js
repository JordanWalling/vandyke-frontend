import Iframe from "react-iframe";
import { useState } from "react";
import axios from "axios";

import {
  ContactContainer,
  Container,
  ContainerItem,
  ContactUsHeading,
  ContactUsForm,
  FormItem,
  Label,
  SubHeading,
  ContactUsButton,
} from "../components/ContactUsStyle.jsx";
import Banner from "../components/dashboard/Banner";

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
      setName("");
      setPhoneNumber("");
      setUserEmail("");
      setMessage("");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <ContactContainer>
      <Banner>
        <ContactUsHeading>Contact Us</ContactUsHeading>
      </Banner>
      <Container>
        <ContainerItem>
          <Iframe
            url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d923.5267687746074!2d151.27091612019757!3d-33.76899836476214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12aa5b982b3543%3A0x42c313a9f25fc931!2s8%20Short%20St%2C%20Brookvale%20NSW%202100!5e0!3m2!1sen!2sau!4v1678486291314!5m2!1sen!2sau"
            width="100%"
            height="100%"
            style="border:0;"
            allowFullScreen=""
            loading="lazy"
            content="no-referrer-when-downgrade"
          />
        </ContainerItem>
        <ContactUsForm onSubmit={handleEmailSubmit}>
          <SubHeading>Please provide your details</SubHeading>
          <FormItem>
            <Label htmlFor="name">Name:</Label>
            <input
              type="text"
              autoFocus
              value={name}
              placeholder="Please enter your name"
              onChange={(e) => setName(e.target.value)}
            />
          </FormItem>
          <FormItem>
            <Label htmlFor="phone">Phone Number:</Label>
            <input
              type="number"
              value={phoneNumber}
              placeholder="Please enter your Phone Number"
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </FormItem>
          <FormItem>
            <Label htmlFor="email">Email:</Label>
            <input
              type="email"
              value={userEmail}
              placeholder="Please enter your email address"
              onChange={(e) => setUserEmail(e.target.value)}
            />
          </FormItem>
          <FormItem>
            <Label>Enquiry:</Label>
            <textarea
              type="text"
              value={message}
              placeholder="Please type any enquiries"
              onChange={(e) => setMessage(e.target.value)}
            />
          </FormItem>
          <ContactUsButton onSubmit={handleEmailSubmit}>Submit</ContactUsButton>
        </ContactUsForm>
      </Container>
    </ContactContainer>
  );
};
export default ContactUs;
