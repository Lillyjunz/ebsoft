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
  // useEffect(() => {
  //   AOS.init();

  //   AOS.refresh();
  // }, []);

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
