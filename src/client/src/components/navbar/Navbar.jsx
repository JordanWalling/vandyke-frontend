import { NavLink, Link } from "react-router-dom";
import classes from "./Navbar.module.css";
import vdp_logo from "../../assets/logo.png";
import styled from "styled-components";

const Container = styled.div`
  background: #fff;
  justify-content: center;
  align-items: center;
  height: 3rem;
  display: flex;
  position: sticky;
  z-index: 9;
  border-bottom: 2px solid #dedede;
  @media screen and (min-width: 767px) {
    height: 5rem;
  }
  @media screen and (min-width: 1024px) {
    height: 6rem;
  }
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
  /* padding-top: 1rem; */
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
            <NavLink className={classes.navLink} to="dashboard">
              Dashboard
            </NavLink>
          </NavItems>
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
        </NavList>
      </NavRight>
    </Container>
  );
};
export default Navbar;
