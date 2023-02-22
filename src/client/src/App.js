import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// pages import
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import Blogs from "./pages/Blogs";
import Dashboard from "./pages/Dashboard";

// component imports
import Navbar from "./components/Navbar";
import EditBlog from "./pages/EditBlog";
import GetJobs from "./components/GetJobs";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="blog/:_id" element={<EditBlog />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="jobs" element={<GetJobs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
