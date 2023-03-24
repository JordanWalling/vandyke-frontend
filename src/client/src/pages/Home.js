import HeroHomePage from "../components/homePage/HeroHomePage";
import Products from "../components/Products";
import PhotoDividerHomePage from "../components/homePage/PhotoDividerHomePage";
import CopyrightSection from "../components/Copyright/CopyrightSection";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <HeroHomePage />
      <Products />
      <PhotoDividerHomePage />
      <CopyrightSection />
      <Footer />
    </div>
  );
};

export default Home;
