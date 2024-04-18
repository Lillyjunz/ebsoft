import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";

export default function SwiperContact() {
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
          clickable: false,
        }}
        loop={true}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          946: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
        }}
        modules={[Navigation, Pagination, Autoplay]}
        className="mySwiper ps-5 pe-5"
        style={{ marginTop: "40px" }}
      >
        <SwiperSlide>
          <div style={{ paddingBottom: "60px" }}>
            <img style={{ width: "15px" }} src="../images/star.svg" alt="..." />
            <img style={{ width: "15px" }} src="../images/star.svg" alt="..." />
            <img style={{ width: "15px" }} src="../images/star.svg" alt="..." />
            <img style={{ width: "15px" }} src="../images/star.svg" alt="..." />
            <img style={{ width: "15px" }} src="../images/star.svg" alt="..." />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Doloremque, sint.
            </p>
            <p>Jogn Jackson</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <img style={{ width: "15px" }} src="../images/star.svg" alt="..." />
          <img style={{ width: "15px" }} src="../images/star.svg" alt="..." />
          <img style={{ width: "15px" }} src="../images/star.svg" alt="..." />
          <img style={{ width: "15px" }} src="../images/star.svg" alt="..." />
          <img style={{ width: "16px" }} src="../images/star2.gif" alt="..." />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Doloremque, sint.
          </p>
          <p>Jogn Jackson</p>
        </SwiperSlide>
        <SwiperSlide>
          <img style={{ width: "15px" }} src="../images/star.svg" alt="..." />
          <img style={{ width: "15px" }} src="../images/star.svg" alt="..." />
          <img style={{ width: "15px" }} src="../images/star.svg" alt="..." />
          <img style={{ width: "16px" }} src="../images/star2.gif" alt="..." />
          <img style={{ width: "16px" }} src="../images/star2.gif" alt="..." />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Doloremque, sint.
          </p>
          <p>Jogn Jackson</p>
        </SwiperSlide>
        <SwiperSlide>
          <img style={{ width: "15px" }} src="../images/star.svg" alt="..." />
          <img style={{ width: "15px" }} src="../images/star.svg" alt="..." />
          <img style={{ width: "15px" }} src="../images/star.svg" alt="..." />
          <img style={{ width: "15px" }} src="../images/star.svg" alt="..." />
          <img style={{ width: "15px" }} src="../images/star.svg" alt="..." />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Doloremque, sint.
          </p>
          <p>Jogn Jackson</p>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
