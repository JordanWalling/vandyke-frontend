import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages import
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import Blogs from "./pages/Blogs";
import Dashboard from "./pages/Dashboard";
import UpdateJobForm from "./pages/UpdateJobForm";
import Login from "./pages/Login";
import GetBlogs1 from "./components/GetBlogs1";
import SingleJobDesc from "./pages/SingleJobDesc";

// component imports
import Navbar from "./components/navbar/Navbar";
import SingleBlog from "./pages/SingleBlog";
import GetAllJobs from "./components/GetAllJobs";
import SingleJob from "./components/SingleJob";
import GetEmails from "./components/emails/GetEmails";
import SingleEmailDesc from "./components/emails/SingleEmailDesc";
import SingleEmail from "./components/emails/SingleEmail";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="blogs1" element={<GetBlogs1 />} />
          <Route path="blogs/:blogId" element={<SingleBlog />} />
          <Route path="emails" element={<GetEmails />} />
          <Route path="email/:id" element={<SingleEmailDesc />} />
          <Route path="jobs" element={<GetAllJobs />} />
          <Route path="jobs/:id" element={<SingleJobDesc />} />
          <Route path="jobs/update/:id" element={<UpdateJobForm />} />
          <Route path="login" element={<Login />}>
            <Route path="dashboard" element={<Dashboard />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
