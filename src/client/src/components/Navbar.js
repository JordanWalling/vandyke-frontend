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
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
