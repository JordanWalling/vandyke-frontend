import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages import
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import Blogs from "./pages/Blogs";
import Dashboard from "./pages/Dashboard";
import UpdateJobForm from "./pages/UpdateJobForm";

// component imports
import Navbar from "./components/Navbar";
import SingleBlog from "./pages/SingleBlog";
import GetJobs from "./components/GetJobs";
import JobDetail from "./pages/JobDetail";
import PracticeGrid from "./components/PracticeGrid";

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
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="/jobs" element={<GetJobs />} />
          <Route path="/jobs/:id" element={<JobDetail />} />
          <Route path="/jobs/update/:id" element={<UpdateJobForm />} />
          <Route path="/practice-grid" element={<PracticeGrid />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
