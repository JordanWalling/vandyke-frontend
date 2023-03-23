import {
  Background,
  Card,
  Title,
  Paragraph,
} from "../components/ProductStyling";

const singleProduct = {
  id: 2,
  path: "/products/2",
  title: "Heat Sealable Lidding",
  description:
    "Heat-Sealable Lidding. All printing, die-cutting & finishing processes are BSI HACCP and GMP certified. We are proudly Australian manufacturers of aluminium foil lidding and produce everything in-house, at our Sydney facility. The experienced and customer-focused team at The Van Dyke Press can help you select the appropriate material to achieve your barrier and seal strength requirements, ensuring that your product is appropriately sealed. Our materials include recyclable options for cool storage and for heat strength. Materials can be supplied in many different sizes as Aluminium, PET, PET laminates, and paper/ PE laminates. These materials are offered in a range of pre-cut and roll stock lidding structures for sealing to PP, PS, PET and CPET containers. Die-Cut or Pre-Cut Lidding. The Van Dyke Press is one of Australia's largest manufacturers of die cut lidding, known most commonly as 'aluminium foils'. Pre-cut lids can be supplied bespoke or to a range of in-house sizes. All embossing and die cutting is performed in-house to customer specifications. Having an in-depth understanding of aluminium die cut lidding and heat sealable materials the team will make the right recommendations and aid you in your manufacturing processes. Roll-fed Lidding. Reel Fed Lidding can be manufactured using almost any structure to suit your requirements. Using either sheet-fed offset or roll to roll flexographic printing, the Van Dyke Press has the flexibility to print up to 8 colours for heat sealable products. All finishing processes are completed in-house including the varnishing, guillotining, die cutting, embossing, laminating and the foiling. By keeping all operations in-house, we have total control of the consistency and quality of our die cut lidding and roll stocks, so our customers are guaranteed the highest quality, delivered every time. ",
};

const ProductPage2 = () => {
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

export default ProductPage2;
