import backgroundImage from "../../assets/background_image_home.webp";
import classes from "../../components/homePage/PhotoDividerHomePage.module.css";

const PhotoDividerHomePage = () => {
  return (
    <div className={classes.divideSection}>
      <div className={classes.divideContainer}>
        <img src={backgroundImage} alt="label divider" />
        <div className={classes.caption}>
          <h3>"We strive to make our customers the best in the business"</h3>
        </div>
      </div>
    </div>
  );
};

export default PhotoDividerHomePage;
