import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Bann from "../Components/Bann";
import SwiperHome from "../Components/Caroo";
import Faq from "../Components/Faq";
import Imagesection from "../Components/Image-section";
import Intro2 from "../Components/Intro2";
import Navbar from "../Components/Navbar";
import Origin from "../Components/Origin";
import Tab from "../Components/Tab-section";
import Footernew from "../Components/FooterNew";

const Home = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  return (
    <div className="home">
      <Navbar />
      <Bann />
      <Origin></Origin>
      <Intro2></Intro2>
      <Tab></Tab>
      <SwiperHome></SwiperHome>
      <Imagesection></Imagesection>
      <Faq></Faq>
      <Footernew></Footernew>
    </div>
  );
};

export default Home;
