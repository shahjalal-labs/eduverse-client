import Banner from "./Banner/Banner";
import UseHelmet from "../../../hooks/useHelmet";
import FAQ from "../../../pages/faq/FAQ";
import Features from "../../../pages/features/Features";
import WebIntro from "./Banner/WebIntro";
import ContactUs from "../../shared/Layout/footerPages/ContactUs";
import AboutUs from "../../shared/Layout/footerPages/AboutUs";

const Home = () => {
  return (
    <div>
      <UseHelmet title="Home" />
      <Banner />
      <WebIntro />
      <AboutUs />
      <Features />
      <FAQ />
      <ContactUs />
    </div>
  );
};

export default Home;
