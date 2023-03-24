import { Link } from "react-router-dom";
import {
  EmailInfo,
  Heading,
  Content,
  Message,
  ButtonContainer,
  Button,
  Sub,
} from "./SingleEmailStyles";

const SingleEmail = ({ email }) => {
  const { name, phoneNumber, userEmail, message, _id } = email;
  return (
    <>
      <EmailInfo>
        <Heading>
          <h2>{name}</h2>
        </Heading>
        <Content>
          <div>
            <Sub>Phone Number:</Sub>
          </div>
          <div>
            <p>{phoneNumber}</p>
          </div>
        </Content>
        <Content>
          <div>
            <Sub>Email Address:</Sub>
          </div>
          <div>
            <p>{userEmail}</p>
          </div>
        </Content>
        <Message>
          <div>
            <Sub>Message:</Sub>
          </div>
          <div>
            <p>{message}</p>
          </div>
        </Message>
        <ButtonContainer>
          <Button>
            <Link
              to={`/dashboard/email/${_id}`}
              style={{
                textDecoration: "none",
              }}
            >
              <p>Email information</p>
            </Link>
          </Button>
        </ButtonContainer>
      </EmailInfo>
    </>
  );
};

export default SingleEmail;
