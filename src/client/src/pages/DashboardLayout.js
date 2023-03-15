import styled from "styled-components";
// import { useState } from "react";
// import CreateBlog from "../components/CreateBlog/CreateBlog";
// import CreateJob from "../components/CreateJob";
// import UpdateJobForm from "./UpdateJobForm";
// import axios from "axios";
import { Link, Outlet } from "react-router-dom";
// import GetEmails from "../components/emails/GetEmails";
import Banner from "../components/dashboard/Banner";
import { Button, Container } from "../components/dashboard/DashboardStyling";

const Title = styled.h2`
  color: #fff;
  font-size: 5rem;
`;

const Dashboard = () => {
  // state to get emails
  // const [emails, setEmails] = useState([]);

  return (
    <div>
      <Banner>
        <Title>Welcome, User</Title>
      </Banner>
      <Container>
        <Button>
          <Link to="all-jobs">List of Jobs</Link>
        </Button>
        <Button>
          <Link to="create-job">Create a Job</Link>
        </Button>
        <Button>
          <Link to="create-blog">Create a Blog</Link>
        </Button>
      </Container>
      <Outlet />
    </div>
  );
};

{
  /* <CreateBlog
        content={content}
        setContent={setContent}
        handleSubmit={handleSubmit}
        title={title}
        setTitle={setTitle}
        image={image}
        setImage={setImage}
        handleImage={handleImage}
      />
      <h3>Create a Job</h3>
      <CreateJob
        number={number}
        setNumber={setNumber}
        company={company}
        setCompany={setCompany}
        status={status}
        setStatus={setStatus}
        handleJobSubmit={handleJobSubmit}
        notes={notes}
        setNotes={setNotes}
      /> */
}
export default Dashboard;
