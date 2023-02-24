import classes from "../components/Products.module.css";
import inkRoll from "../assets/vdp_ink_in_roll.webp";
import hsl from "../assets/vdp_heat_sealable_lidding.png";
import gpp from "../assets/vdp_grease_proof_packaging.png";

const Products = () => {
  return (
    <section>
      <h3 className={classes.productHeading}>Products</h3>
      <div className={classes.container}>
        <div className={classes.card}>
          <div className={classes.imgbox}>
            <img src={inkRoll} />
          </div>
          <div className={classes.content}>
            <h2>In Mould Labels</h2>
            <p>sdgihadog osfgjpofbdjef sfg iosfgnlsfkghvssdnv sdifnsd</p>
            <button>Read More</button>
          </div>
        </div>
        <div className={classes.card}>
          <div className={classes.imgbox}>
            <img src={hsl} />
          </div>
          <div className={classes.content}>
            <h2>Heat Sealable Lidding</h2>
            <p>sdgihadog osfgjpofbdjef sfg iosfgnlsfkghvssdnv sdifnsd</p>
            <button>Read More</button>
          </div>
        </div>
        <div className={classes.card}>
          <div className={classes.imgbox}>
            <img src={gpp} />
          </div>
          <div className={classes.content}>
            <h2>Grease Proof Packaging</h2>
            <p>sdgihadog osfgjpofbdjef sfg iosfgnlsfkghvssdnv sdifnsd</p>
            <button>Read More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
