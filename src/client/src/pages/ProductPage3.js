import {
  Background,
  Card,
  Title,
  Paragraph,
} from "../components/ProductStyling";

const singleProduct = {
  id: 3,
  path: "/products/3",
  title: "Grease Proof Packaging",
  description:
    "Grease proof packaging protects and decorates high oil content products. The packaging can be plain or printed, using 7 colours with food safe, low odour and low migration inks. Cover Leaves & Inserts for Vegetable Oil Spreads and Butter. A cover leaf or insert is an essential part of the presentation and protection of vegetable oil spreads and butter. Whether printed or plain, coated or uncoated, The Van Dyke Press cover leaves deliver the right results for high speed filling & protection. Block Wraps and Burger Wraps. Block wraps for butter and cooking oils can be supplied on grease proof paper or foil-laminated paper, and are printed using food safe water-based inks as per Australian and international standards. Grease proof burger wraps are 30-50gsm and printed with food safe, low odour inks. Custom or generic designs can be printed to any size. ",
};

const ProductPage3 = () => {
  return (
    <div>
      <Background>
        <Card>
          <div>
            <Title> {singleProduct.title} </Title>
          </div>
          <div>
            <Paragraph>{singleProduct.description}</Paragraph>
          </div>
        </Card>
      </Background>
    </div>
  );
};

export default ProductPage3;
