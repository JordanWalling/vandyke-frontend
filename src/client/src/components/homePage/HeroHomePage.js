import { Link } from "react-router-dom";
import classes from "./HeroHomePage.module.css";

const HeroHomePage = () => {
  return (
    <div className={classes.hero}>
      <div className={classes.heroCenter}>
        <h1 className={classes.heroTitle}>Van Dyke Press</h1>
        <h3 className={classes.heroSubTitle}>
          We have got you <strong>Covered</strong>
        </h3>
        <Link to="contact-us" className={classes.btn}>
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default HeroHomePage;
