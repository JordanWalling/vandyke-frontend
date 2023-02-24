import { NavLink, Link } from "react-router-dom";
import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul className={classes.container}>
          <li className={classes.listItem}>
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
            <NavLink to="blogs/:id">Edit Blog</NavLink>
          </li>
          <li>
            <NavLink to="jobs">Jobs</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
