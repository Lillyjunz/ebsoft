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
        className="mySwiper "
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="1500"
        data-aos-once="true"
        style={{ width: "100%", marginTop: "80px", marginBottom: "100px" }}
      >
        <SwiperSlide className="align-items-center justify-content-center d-flex">
          <div
            className="slide-div"
            style={{
              backgroundColor: "#89E0AE",
              padding: "40px 50px",
              width: "70%",
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "10px",
              marginBottom: "100px",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
            }}
          >
            <div style={{ paddingBottom: "10px", paddingTop: "20px" }}>
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
              <div className="pt-3">
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
              padding: "40px 50px",
              width: "70%",
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "100px",
              borderRadius: "10px",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
            }}
          >
            <div style={{ paddingBottom: "10px", paddingTop: "20px" }}>
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
              <div className="pt-3">
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
              padding: "40px 50px",
              width: "70%",
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "100px",
              borderRadius: "10px",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
            }}
          >
            <div style={{ paddingBottom: "10px", paddingTop: "20px" }}>
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
                src="../images/star2.gif"
                alt="..."
              />
              <img
                style={{ width: "15px" }}
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
              <div className="pt-3">
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
              padding: "40px 50px",
              width: "70%",
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "100px",
              borderRadius: "10px",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
            }}
          >
            <div style={{ paddingBottom: "10px", paddingTop: "20px" }}>
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
              <div className="pt-3">
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
