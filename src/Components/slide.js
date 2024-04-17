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
            <i className="bi bi-star-fill text-warning "></i>
            <i className="bi bi-star-fill text-warning"></i>
            <i className="bi bi-star-fill text-warning"></i>
            <i className="bi bi-star-fill text-warning"></i>
            <i className="bi bi-star-fill text-warning"></i>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Doloremque, sint.
            </p>
            <p>Jogn Jackson</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <i className="bi bi-star-fill text-warning "></i>
          <i className="bi bi-star-fill text-warning"></i>
          <i className="bi bi-star-fill text-warning"></i>
          <i className="bi bi-star-half text-warning"></i>
          <i className="bi bi-star-half text-warning"></i>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Doloremque, sint.
          </p>
          <p>Jogn Jackson</p>
        </SwiperSlide>
        <SwiperSlide>
          <i className="bi bi-star-fill text-warning "></i>
          <i className="bi bi-star-fill text-warning"></i>
          <i className="bi bi-star-fill text-warning"></i>
          <i className="bi bi-star-fill text-warning"></i>
          <i className="bi bi-star-half text-warning"></i>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Doloremque, sint.
          </p>
          <p>Jogn Jackson</p>
        </SwiperSlide>
        <SwiperSlide>
          <i className="bi bi-star-fill text-warning "></i>
          <i className="bi bi-star-fill text-warning"></i>
          <i className="bi bi-star-fill text-warning"></i>
          <i className="bi bi-star-fill text-warning"></i>
          <i className="bi bi-star-half text-warning"></i>
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
