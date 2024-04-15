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
    <>
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
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          946: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        modules={[Navigation, Pagination, Autoplay]}
        className="mySwiper ps-5 pe-5"
        style={{
          marginBottom: "100px",
          marginTop: "100px",
        }}
      >
        <SwiperSlide style={{ paddingBottom: "60px" }}>
          <div class="cad">
            <img
              src="../images/intro.jpg"
              alt="..."
              style={{ width: "20rem", height: "350px", borderRadius: "10px" }}
            />
            <h5 className="fw-bold mt-3"> UI/UX Developer</h5>
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ paddingBottom: "60px" }}>
          <div class="cad">
            <img
              src="../images/intro.jpg"
              alt="..."
              style={{ width: "20rem", height: "350px", borderRadius: "10px" }}
            />
            <h5 className="fw-bold mt-3"> Snr. Tech Developer</h5>
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ paddingBottom: "60px" }}>
          <div class="cad">
            <img
              src="../images/intro.jpg"
              alt="..."
              style={{ width: "20rem", height: "350px", borderRadius: "10px" }}
            />
            <h5 className="fw-bold mt-3"> Cloud Assistant</h5>
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ paddingBottom: "60px" }}>
          <div class="cad">
            <img
              src="../images/intro.jpg"
              alt="..."
              style={{ width: "20rem", height: "350px", borderRadius: "10px" }}
            />
            <h5 className="fw-bold mt-3"> Software Developer </h5>
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ paddingBottom: "60px" }}>
          <div class="cad">
            <img
              src="../images/intro.jpg"
              alt="..."
              style={{ width: "20rem", height: "350px", borderRadius: "10px" }}
            />
            <h5 className="fw-bold mt-3"> Cloud Service Developer</h5>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
