import classes from "../components/Products.module.css";
import inkRoll from "../assets/vdp_ink_in_roll.webp";
import hsl from "../assets/vdp_heat_sealable_lidding.png";
import gpp from "../assets/vdp_grease_proof_packaging.png";
import { useNavigate, Link } from "react-router-dom";
import {
  Card,
  Background,
  Heading,
  CardContainer,
  Content,
  Button,
} from "../components/ProductsHomePageStyling";

const Products = () => {
  const navigate = useNavigate();
  return (
    <section>
      <Heading>Products</Heading>
      <Background>
        <CardContainer>
          <Card>
            <div>
              <img
                className={classes.productImages}
                src={inkRoll}
                alt="label"
              />
            </div>
            <Content>
              <h4>In Mould Labels</h4>
              <p>
                We introduced IML technology to Australia 25 years ago. Offering
                a wide range of films and finishes, The Van Dyke Press can offer
                the perfect solution to suit each application or container type,
                with flexible capacity to tailor to customer specifications.
              </p>
              <Button
                onClick={() => {
                  navigate("/products/1");
                }}
              >
                Read More
              </Button>
            </Content>
          </Card>

          <Card>
            <div>
              <img className={classes.productImages} src={hsl} alt="label" />
            </div>
            <Content>
              <h4>Heat Sealable Lidding</h4>
              <p>
                We are one of the few locally based printers of aluminium foils
                & lidding materials. All printing and cutting is carried out in
                our Sydney factory allowing for short lead times for pre-press
                work and delivery of the finished product.
              </p>
              <Button
                onClick={() => {
                  navigate("/products/2");
                }}
              >
                Read More
              </Button>
            </Content>
          </Card>

          <Card>
            <div>
              <img className={classes.productImages} src={gpp} alt="label" />
            </div>
            <Content>
              <h4>Grease Proof Packaging</h4>
              <p>
                We’ve been supplying the butter, margarine spread and bakery
                industries with grease proof packaging for a number of decades,
                taking advantage of the latest innovations in technology.
              </p>
              <Button
                onClick={() => {
                  navigate("/products/3");
                }}
              >
                Read More
              </Button>
            </Content>
          </Card>
        </CardContainer>
      </Background>
    </section>
  );
};

export default Products;
