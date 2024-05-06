import SwiperAbout from "./AboutSwiper";
const Team = () => {
  return (
    <>
      <div className="container" style={{ margin: "80px auto" }}>
        <h1
          className="text-center mt-5 fw-bold "
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-duration="1000"
          data-aos-delay="500"
        >
          Our Team
        </h1>
        <SwiperAbout></SwiperAbout>
      </div>
    </>
  );
};

export default Team;
