import { Link } from "react-router-dom";

const SingleEmail = ({ email }) => {
  const { name, phoneNumber, userEmail, message, id } = email;
  return (
    <div>
      <div>
        <div>
          <h2>Name: {name}</h2>
          <h3>Phone Number: {phoneNumber}</h3>
          <h3>Email Address: {userEmail}</h3>
          <p>message: {message}</p>

          <button>
            <Link to={`login/dashboard/email/${id}`}>Email information</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleEmail;
