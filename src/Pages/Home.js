import Banner from "../Components/Banner";
import Faq from "../Components/Faq";
import Footer from "../Components/Footer";
import Imagesection from "../Components/Image-section";
import Intro2 from "../Components/Intro2";
import Navbar from "../Components/Navbar";
import Origin from "../Components/Origin";
import Tab from "../Components/Tab-section";

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner></Banner>
      <Origin></Origin>
      <Intro2></Intro2>
      <Tab></Tab>
      <Imagesection></Imagesection>
      <Faq></Faq>
      <Footer></Footer>
    </>
  );
};

export default Home;
