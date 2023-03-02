import { NavLink, Link } from "react-router-dom";
import classes from "./Navbar.module.css";
import vdp_logo from "../assets/logo.png";
import styled from "styled-components";

const Container = styled.div`
  background: #cddeee;
  justify-content: center;
  height: 5rem;
  display: flex;
  position: sticky;
  z-index: 9;
`;
const NavLeft = styled.div`
  flex: 2;
`;
const NavRight = styled.div`
  flex: 5;
`;
const NavList = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const NavItems = styled.div`
  list-style-type: none;
  padding-top: 1rem;
`;

const Navbar = () => {
  return (
    <Container>
      <NavLeft>
        <Link to="/">
          <img
            className={classes.navbarImage}
            src={vdp_logo}
            alt="van dyke logo"
          />
        </Link>
      </NavLeft>
      <NavRight>
        <NavList>
          <NavItems>
            <NavLink className={classes.navLink} to="contact-us">
              Contact Us
            </NavLink>
          </NavItems>
          <NavItems>
            <NavLink className={classes.navLink} to="blogs">
              Blogs
            </NavLink>
          </NavItems>
          <NavItems>
            <NavLink className={classes.navLink} to="login">
              Login
            </NavLink>
          </NavItems>
          <NavItems>
            <NavLink className={classes.navLink} to="blogs/:id">
              Edit Blog
            </NavLink>
          </NavItems>
          <NavItems>
            <NavLink className={classes.navLink} to="jobs">
              Jobs
            </NavLink>
          </NavItems>
        </NavList>
      </NavRight>
    </Container>
  );
};
export default Navbar;

//<div className={classes.container}>
//       <div className={classes.navLeft}>
//         <Link className={classes.navLink} to="/">
//           <img src={vdp_logo} alt="van dyke logo" />
//         </Link>
//       </div>
//       <div className={classes.navRight}>

//       </div>
//     </div>
//   );
// };
