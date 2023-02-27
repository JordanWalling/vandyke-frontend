import { NavLink, Link } from "react-router-dom";
import classes from "./Navbar.module.css";
import vdp_logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className={classes.container}>
      <div className={classes.navLeft}>
        <Link className={classes.navLink} to="/">
          <img src={vdp_logo} alt="van dyke logo" />
        </Link>
      </div>
      <div className={classes.navRight}>
        <ul className={classes.navList}>
          <li>
            <NavLink className={classes.navLink} to="contact-us">
              Contact Us
            </NavLink>
          </li>
          <li>
            <NavLink className={classes.navLink} to="blogs">
              Blogs
            </NavLink>
          </li>
          <li>
            <NavLink className={classes.navLink} to="login">
              Login
            </NavLink>
          </li>
          <li>
            <NavLink className={classes.navLink} to="blogs/:id">
              Edit Blog
            </NavLink>
          </li>
          <li>
            <NavLink className={classes.navLink} to="jobs">
              Jobs
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
