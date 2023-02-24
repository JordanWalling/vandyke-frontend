import { Link } from "react-router-dom";
import classes from "./HeroHomePage.module.css";
import granolaRoll from "../assets/vdp_granola_roll.png";

const HeroHomePage = () => {
  return (
    <div className={classes.hero}>
      <div className={classes.heroCard}>
        <h1 className={classes.heroTitle}>Van Dyke Press</h1>
        <h3 className={classes.heroSubTitle}>
          We have got you <strong>Covered</strong>
        </h3>
        <img className={classes.heroImage} src={granolaRoll} alt="label" />
        <Link to="contact-us" className={classes.btn}>
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default HeroHomePage;
