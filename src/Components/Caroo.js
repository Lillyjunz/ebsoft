import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";

export default function SwiperHome() {
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
            spaceBetween: 10,
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
        className="mySwiper wow animate__animated animate__fadeInUp"
        data-wow-duration="1s"
        data-wow-delay="1s"
        style={{ width: "100%" }}
      >
        <SwiperSlide className="align-items-center justify-content-center d-flex">
          <div
            className="slide-div"
            style={{
              backgroundColor: "#89E0AE",
              padding: "50px",
              width: "70%",
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "120px",
              borderRadius: "10px",
              marginBottom: "140px",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
            }}
          >
            <div style={{ paddingBottom: "60px", paddingTop: "20px" }}>
              <img
                style={{ width: "15px" }}
                src="../images/star.svg"
                alt="..."
              />
              <img
                style={{ width: "15px" }}
                src="../images/star.svg"
                alt="..."
              />
              <img
                style={{ width: "15px" }}
                src="../images/star.svg"
                alt="..."
              />
              <img
                style={{ width: "15px" }}
                src="../images/star.svg"
                alt="..."
              />
              <img
                style={{ width: "15px" }}
                src="../images/star.svg"
                alt="..."
              />
              <h3 className="fw-bold">
                <i>
                  "I certify that this company is standard and pulls through "
                </i>
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Doloremque, sint.
              </p>
              <div className="pt-5">
                <h4 className="fw-bold">Head of Software</h4>
                <p>Jogn Jackson</p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="align-items-center justify-content-center d-flex">
          <div
            className="slide-div"
            style={{
              backgroundColor: "#89E0AE",
              padding: "50px",
              width: "70%",
              textAlign: "center",
              marginTop: "120px",
              borderRadius: "10px",
              marginBottom: "140px",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
            }}
          >
            <div style={{ paddingBottom: "60px", paddingTop: "20px" }}>
              <img
                style={{ width: "15px" }}
                src="../images/star.svg"
                alt="..."
              />
              <img
                style={{ width: "15px" }}
                src="../images/star.svg"
                alt="..."
              />
              <img
                style={{ width: "15px" }}
                src="../images/star.svg"
                alt="..."
              />
              <img
                style={{ width: "15px" }}
                src="../images/star.svg"
                alt="..."
              />
              <img
                style={{ width: "15px" }}
                src="../images/star.svg"
                alt="..."
              />
              <h3 className="fw-bold">
                <i>
                  "I certify that this company is standard and pulls through "
                </i>
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Doloremque, sint.
              </p>
              <div className="pt-5">
                <h4 className="fw-bold">Head of Software</h4>
                <p>Jogn Jackson</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="align-items-center justify-content-center d-flex">
          <div
            className="slide-div"
            style={{
              backgroundColor: "#89E0AE",
              padding: "50px",
              width: "70%",
              textAlign: "center",
              marginTop: "120px",
              borderRadius: "10px",
              marginBottom: "140px",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
            }}
          >
            <div style={{ paddingBottom: "60px", paddingTop: "20px" }}>
              <img
                style={{ width: "15px" }}
                src="../images/star.svg"
                alt="..."
              />
              <img
                style={{ width: "15px" }}
                src="../images/star.svg"
                alt="..."
              />
              <img
                style={{ width: "15px" }}
                src="../images/star.svg"
                alt="..."
              />
              <img
                style={{ width: "16px" }}
                src="../images/star2.gif"
                alt="..."
              />
              <img
                style={{ width: "16px" }}
                src="../images/star2.gif"
                alt="..."
              />
              <h3 className="fw-bold">
                <i>
                  "I certify that this company is standard and pulls through "
                </i>
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Doloremque, sint.
              </p>
              <div className="pt-5">
                <h4 className="fw-bold">Head of Software</h4>
                <p>Jogn Jackson</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="align-items-center justify-content-center d-flex">
          <div
            className="slide-div"
            style={{
              backgroundColor: "#89E0AE",
              padding: "50px",
              width: "70%",
              textAlign: "center",
              marginTop: "120px",
              borderRadius: "10px",
              marginBottom: "140px",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
            }}
          >
            <div style={{ paddingBottom: "60px", paddingTop: "20px" }}>
              <img
                style={{ width: "15px" }}
                src="../images/star.svg"
                alt="..."
              />
              <img
                style={{ width: "15px" }}
                src="../images/star.svg"
                alt="..."
              />
              <img
                style={{ width: "15px" }}
                src="../images/star.svg"
                alt="..."
              />
              <img
                style={{ width: "15px" }}
                src="../images/star.svg"
                alt="..."
              />
              <img
                style={{ width: "15px" }}
                src="../images/star.svg"
                alt="..."
              />
              <h3 className="fw-bold">
                <i>
                  "I certify that this company is standard and pulls through "
                </i>
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Doloremque, sint.
              </p>
              <div className="pt-5">
                <h4 className="fw-bold">Head of Software</h4>
                <p>Jogn Jackson</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
