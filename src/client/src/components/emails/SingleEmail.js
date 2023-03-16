import { Link } from "react-router-dom";
import {
  Heading,
  HideFullMessage,
  Container,
  Wrapper,
  SubSize,
} from "./SingleEmailStyles";

const SingleEmail = ({ email }) => {
  const { name, phoneNumber, userEmail, message, _id } = email;
  return (
    <div>
      <Wrapper>
        <Container>
          <Heading>{name}</Heading>
          <SubSize>Phone Number:</SubSize> {phoneNumber}
          <SubSize>Email Address:</SubSize> {userEmail}
          <HideFullMessage>message:{message}</HideFullMessage>
          <button>
            <Link to={`/dashboard/email/${_id}`}>Email information</Link>
          </button>
        </Container>
      </Wrapper>
    </div>
  );
};

export default SingleEmail;
