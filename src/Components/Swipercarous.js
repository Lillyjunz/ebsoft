import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";

export default function SwiperCarousel() {
  return (
    <div className="align-items-center justify-content-center mb-5">
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        navigation={true}
        breakpoints={{
          480: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          946: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1100: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}
        modules={[Navigation, Pagination, Autoplay]}
        className="mySwiper container-fluid"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="500"
        data-aos-once="true"
        style={{
          margin: "100px auto",
          justifyContent: "center",
          alignItems: "center",
          width: "80%",
          borderRadius: "10px",
        }}
      >
        <SwiperSlide style={{ paddingBottom: "60px" }}>
          <div className="cad">
            <img className=" slide-image" src="../images/ebimg.jpg" alt="..." />
            <h5 className="teamcar mt-3"> UI/UX Developer</h5>
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ paddingBottom: "60px" }}>
          <div className="cad">
            <img className="slide-image" src="../images/ebimg4.jpg" alt="..." />
            <h5 className="teamcar mt-3"> DevOPs Engineer</h5>
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ paddingBottom: "60px" }}>
          <div className="cad">
            <img className="slide-image" src="../images/ebimg2.jpg" alt="..." />
            <h5 className="teamcar mt-3">Snr. Data Engineer / Tech Writer</h5>
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ paddingBottom: "60px" }}>
          <div className="cad">
            <img className="slide-image" src="../images/ebuju.jpg" alt="..." />
            <h5 className="teamcar mt-3"> Web Developer / Dev Lead II </h5>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
