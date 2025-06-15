import Banner from "./Banner/Banner";
import UseHelmet from "../../../hooks/useHelmet";
import FAQ from "../../../pages/faq/FAQ";
import Features from "../../../pages/features/Features";
import WebIntro from "./Banner/WebIntro";

const Home = () => {
  return (
    <div>
      <UseHelmet title="Home" />
      <Banner />
      <WebIntro />
      <Features />
      <FAQ />
    </div>
  );
};

export default Home;
