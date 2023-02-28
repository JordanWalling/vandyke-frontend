import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages import
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import Blogs from "./pages/Blogs";
import Dashboard from "./pages/Dashboard";
import UpdateJobForm from "./pages/UpdateJobForm";
import Login from "./pages/Login";

// component imports
import Navbar from "./components/Navbar";
import SingleBlog from "./pages/SingleBlog";
import GetJobs from "./components/GetJobs";
import JobDetail from "./pages/JobDetail";
import PracticeGrid from "./components/PracticeGrid";
import GetEmails from "./components/GetEmails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="blogs/:blogId" element={<SingleBlog />} />
          <Route path="login" element={<Login />}>
            <Route path="dashboard" element={<Dashboard />}>
              <Route path="jobs" element={<GetJobs />} />
              <Route path="jobs/:id" element={<JobDetail />} />
              <Route path="jobs/update/:id" element={<UpdateJobForm />} />
              <Route path="practice-grid" element={<PracticeGrid />} />
              <Route path="emails" element={<GetEmails />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
