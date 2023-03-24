import { Link } from "react-router-dom";
import classes from "./HeroHomePage.module.css";
import {
  Wrapper,
  ImageContainer,
  TitleContainer,
  MainTitle,
  SubTitle,
  Image1,
  Image2,
  Image3,
  Image4,
  Special,
} from "./HeroHomePageStyling";
import ink from "../../assets/vdp_ink_in_roll.webp";
import backImage from "../../assets/background_image_home.webp";
import grease from "../../assets/vdp_grease_proof_packaging.png";
import heat from "../../assets/vdp_heat_sealable_lidding.png";

const HeroHomePage = () => {
  return (
    <Wrapper>
      <ImageContainer>
        <Image1>
          <img src={ink} alt="ink roll" />
        </Image1>
        <Image2>
          <img
            src={backImage}
            style={{ width: "30rem", height: "15rem" }}
            alt="label photo"
          />
        </Image2>
        <Image3>
          <img src={grease} alt="grease proof packaging" />
        </Image3>
        <Image4>
          <img src={heat} alt="heat sealable lidding image" />
        </Image4>
      </ImageContainer>
      <TitleContainer>
        <MainTitle>Van Dyke Press</MainTitle>
        <SubTitle>We Have Got You...</SubTitle>
        <Special>Covered</Special>
      </TitleContainer>
    </Wrapper>
  );
};

export default HeroHomePage;

/* <div className={classes.hero}>
<div className={classes.heroCenter}>
  <h1 className={classes.heroTitle}>Van Dyke Press</h1>
  <h3 className={classes.heroSubTitle}>
    We have got you <strong>Covered</strong>
  </h3>
  <Link to="contact-us" className={classes.btn}>
    Contact Us
  </Link>
</div>
</div> */
