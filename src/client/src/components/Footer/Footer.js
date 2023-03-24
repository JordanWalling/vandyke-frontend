import image from "../../assets/vdp_safety_certified.png";
import { Image, Container } from "./FooterStyles";

const Footer = () => {
  return (
    <Container>
      <Image src={image} />;
    </Container>
  );
};

export default Footer;
