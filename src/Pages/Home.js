import "aos/dist/aos.css";
import $ from "jquery";
import { useEffect } from "react";
import { WOW } from "wowjs";
import Bann from "../Components/Bann";
import Card from "../Components/Card";
import SwiperHome from "../Components/Caroo";
import Faq from "../Components/Faq";
import Footernew from "../Components/FooterNew";
import Imagesection from "../Components/Image-section";
import Intro2 from "../Components/Intro2";
import Navbar from "../Components/Navbar";
import Origin from "../Components/Origin";
import Tab from "../Components/Tab-section";

const Home = () => {
  useEffect(() => {
    new WOW().init();

    $(window).scroll(function () {
      if ($(this).scrollTop() > 300) {
        $(".back-to-top").fadeIn("slow");
      } else {
        $(".back-to-top").fadeOut("slow");
      }
    });
  }, []);

  return (
    <div className="home">
      <Navbar />
      <Bann />
      <Origin></Origin>
      <Intro2></Intro2>
      <Tab></Tab>
      <Card></Card>
      <SwiperHome></SwiperHome>
      <Imagesection></Imagesection>
      <Faq></Faq>
      <Footernew></Footernew>
    </div>
  );
};

export default Home;
