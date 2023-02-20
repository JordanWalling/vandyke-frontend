import { useState } from "react";
import CreateBlog from "../components/CreateBlog";

const Dashboard = () => {
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <CreateBlog
        content={content}
        setContent={setContent}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default Dashboard;
