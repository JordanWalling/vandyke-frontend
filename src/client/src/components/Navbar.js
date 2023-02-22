import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Van Dyke Press</Link>
          </li>
          <li>
            <NavLink to="contact-us">Contact Us</NavLink>
          </li>
          <li>
            <NavLink to="blogs">Blogs</NavLink>
          </li>
          <li>
            <NavLink to="dashboard">Dashboard</NavLink>
          </li>
          <li>
            <NavLink to="blog/:_id">Edit Blog</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
