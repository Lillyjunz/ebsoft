import React from "react";
// Import Swiper React components
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
        spaceBetween={10}
        autoplay={{
          delay: 3000,
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
            spaceBetween: 40,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          946: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}
        modules={[Navigation, Pagination, Autoplay]}
        className="mySwiper wow animate__animated animate__fadeInUp container-fluid"
        data-wow-duration="1s"
        data-wow-delay="1s"
        style={{
          margin: "100px auto",
          justifyContent: "center",
          alignItems: "center",
          width: "80%",
        }}
      >
        <SwiperSlide style={{ paddingBottom: "60px" }}>
          <div className="cad">
            <img
              src="../images/image9.jpg"
              alt="..."
              style={{ width: "100%", height: "350px", borderRadius: "10px" }}
            />
            <h5 className="fw-bold mt-3"> UI/UX Developer</h5>
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ paddingBottom: "60px" }}>
          <div className="cad">
            <img
              src="../images/image6.jpg"
              alt="..."
              style={{ width: "100%", height: "350px", borderRadius: "10px" }}
            />
            <h5 className="fw-bold mt-3"> Snr. Tech Developer</h5>
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ paddingBottom: "60px" }}>
          <div className="cad">
            <img
              src="../images/image02.jpg"
              alt="..."
              style={{ width: "100%", height: "350px", borderRadius: "10px" }}
            />
            <h5 className="fw-bold mt-3"> Cloud Assistant</h5>
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ paddingBottom: "60px" }}>
          <div className="cad">
            <img
              src="../images/image3.jpg"
              alt="..."
              style={{ width: "100%", height: "350px", borderRadius: "10px" }}
            />
            <h5 className="fw-bold mt-3"> Software Developer </h5>
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ paddingBottom: "60px" }}>
          <div className="cad">
            <img
              src="../images/image4.jpg"
              alt="..."
              style={{ width: "100%", height: "350px", borderRadius: "10px" }}
            />
            <h5 className="fw-bold mt-3"> Cloud Service Developer</h5>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
