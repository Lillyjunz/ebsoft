import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import SwiperAbout from "./AboutSwiper";
import SwiperHome from "./AboutSwiper";

const Team = () => {
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
    <>
      <div className="container" id="team" style={{ margin: "80px auto" }}>
        <h1
          className="text-center mt-5 fw-bold "
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-duration="1000"
          data-aos-delay="500"
        
        >
          Our Team
        </h1>
        {/* <SwiperAbout></SwiperAbout> */}
        <SwiperHome></SwiperHome>
      </div>
    </>
  );
};

export default Team;
