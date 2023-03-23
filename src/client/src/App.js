import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages import
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import Blogs from "./pages/Blogs";
import DashboardLayout from "./pages/DashboardLayout";
import UpdateJobForm from "./pages/UpdateJobForm";
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
import CreateJob from "./components/CreateJob";
import CreateBlog from "./components/CreateBlog/CreateBlog";
import SingleBlogDesc from "./pages/SingleBlogDesc";
import ProductPage from "./pages/ProductPage";
import ProductPage2 from "./pages/ProductPage2";
import ProductPage3 from "./pages/ProductPage3";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="products/1" element={<ProductPage />} />
          <Route path="products/2" element={<ProductPage2 />} />
          <Route path="products/3" element={<ProductPage3 />} />
          <Route path="blogs1" element={<GetBlogs1 />} />
          <Route path="blog/:id" element={<SingleBlogDesc />} />
          {/* <Route path="jobs" element={<GetAllJobs />} /> */}
          <Route path="dashboard" element={<DashboardLayout />}>
            <Route path="all-jobs" element={<GetAllJobs />} />
            <Route path="job/:id" element={<SingleJobDesc />} />
            <Route path="job/update/:id" element={<UpdateJobForm />} />
            <Route path="create-job" element={<CreateJob />} />
            <Route path="create-blog" element={<CreateBlog />} />
            <Route path="emails" element={<GetEmails />} />
            <Route path="email/:id" element={<SingleEmailDesc />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
