import {
  Background,
  Card,
  Title,
  Paragraph,
} from "../components/ProductStyling";

const ProductPage = () => {
  const singleProduct = {
    id: 1,
    path: "/products/1",
    title: "In Mould Labels",
    description:
      "After introducing In-Mould Labels (IML) to Australia in 1990, The Van Dyke Press has remained a leading supplier of In-Mould Labels to both injection and blow moulders for many of the world’s most recognisable consumer brands. What are In-Mould Labels? In-mould labelling (IML) is the use of paper or plastic labels during the manufacturing of containers by blow moulding, injection moulding, or thermoforming processes. As molten plastic is injected into the mould the in-mould label fuses to the component surface of the tub. The label serves as the integral part of the final product, which is then delivered as a pre-decorated item. IML labels are most commonly formed with polypropylene (PP) and allow for mono-polymer recycling. The experienced team at The Van Dyke Press can help with the selection of label film, label design and robotics for label handling. Why use In Mould Labels? Elimination of double-handling of the moulding and label application by combining both activities into a single automated process. It’s more ryclable than any other label. The label and container can be made of the same substrate offering full recyclability of a mono-polymer. The application of virtually any label shape, up to 100% container decoration and high quality graphics. Improved durability. Labels become part of the container and cannot be removed. Quick and economic design amendments. Types of In Mould Labels: Injection Mould IML: The Van Dyke Press supplies Injection IML labels into many market segments, including ice cream, dairy, butter/margarine, dips, desserts, paint and industrial. Label sizes range from 20mm to 1050mm with up to 7 colours. IML labels are typically manufactured from high yield PP films from 50 to 100 microns. Labels can be finished as either gloss, matte or clear. Blow Mould IML: The Van Dyke Press is a market leader in Blow Mould IML in Australia and can offer a range of film types and finishes, including clear and white. The team can recommend and source the correct film, ink and varnish combinations to suit each product’s specific end use.",
  };
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

export default ProductPage;
