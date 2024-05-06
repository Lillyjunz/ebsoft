import React from "react";
import ReactReadMoreReadLess from "react-read-more-read-less";
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
            slidesPerView: 2,
            spaceBetween: 30,
          },
          946: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
        }}
        modules={[Navigation, Pagination, Autoplay]}
        className="mySwiper "
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="1500"
        data-aos-once="true"
        style={{ width: "100%", paddingTop: "50px", paddingBottom: "60px" }}
      >
        <SwiperSlide className="align-items-center justify-content-center ">
          <div
            className="slide-div"
            style={{
              width: "100%",
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "10px",
            }}
          >
            <div className="team mb-5" style={{ width: "50" }}>
              <img
                className="rounded-image"
                data-aos="fade-up"
                data-aos-once="true"
                data-aos-duration="1000"
                data-aos-delay="500"
                src="/images/admin.jpg"
                style={{
                  width: "160px",
                  height: "160px",
                  borderRadius: "50%",
                  marginRight: "10px",
                }}
              />
              <div className="team-text" style={{ width: "50" }}>
                <h5
                  className="text-black text-start"
                  data-aos="fade-up"
                  data-aos-once="true"
                  data-aos-duration="1000"
                  data-aos-delay="500"
                >
                  Olaitan Falolu
                  <li
                    className="text-start pt-1"
                    style={{ color: "#a0a0a0", fontSize: "0.8rem" }}
                  >
                    Senior Project Manager (Technical)
                  </li>
                </h5>

                <p
                  className="text-start"
                  data-aos="fade-up"
                  data-aos-once="true"
                  data-aos-duration="1000"
                  data-aos-delay="500"
                >
                  <ReactReadMoreReadLess
                    readMoreClassName="readMoreClassName"
                    readLessClassName="readLessClassName"
                    charLimit={200}
                    readMoreText="Read more.."
                    readLessText="Read Less.."
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolore animi, accusamus corporis magnam cupiditate ratione
                    dolor voluptatibus nihil aperiam quod expedita. Sit rem
                    quibusdam animi, accusamus corporis magnam cupiditate
                    ratione dolor voluptatibus nihil aperiam quod expedita. Sit
                    rem quibusdam animi, accusamus
                  </ReactReadMoreReadLess>
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="align-items-center justify-content-center ">
          <div
            className="slide-div"
            style={{
              width: "100%",
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "10px",
            }}
          >
            <div className="team mb-5" style={{ width: "50" }}>
              <img
                className="rounded-image"
                data-aos="fade-up"
                data-aos-once="true"
                data-aos-duration="1000"
                data-aos-delay="500"
                src="/images/admin.jpg"
                style={{
                  width: "160px",
                  height: "160px",
                  borderRadius: "50%",
                  marginRight: "10px",
                }}
              />
              <div className="team-text" style={{ width: "50" }}>
                <h5
                  className="text-black text-start"
                  data-aos="fade-up"
                  data-aos-once="true"
                  data-aos-duration="1000"
                  data-aos-delay="500"
                >
                  Mobisola Odimegwu
                  <li
                    className="text-start pt-1"
                    style={{ color: "#a0a0a0", fontSize: "0.8rem" }}
                  >
                    Legal Partner (Sofia Legals)
                  </li>
                </h5>

                <p
                  className="text-start"
                  data-aos="fade-up"
                  data-aos-once="true"
                  data-aos-duration="1000"
                  data-aos-delay="500"
                >
                  <ReactReadMoreReadLess
                    readMoreClassName="readMoreClassName"
                    readLessClassName="readLessClassName"
                    charLimit={200}
                    readMoreText="Read more.."
                    readLessText="Read Less.."
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolore animi, accusamus corporis magnam cupiditate ratione
                    dolor voluptatibus nihil aperiam quod expedita. Sit rem
                    quibusdam animi, accusamus corporis magnam cupiditate
                    ratione dolor voluptatibus nihil aperiam quod expedita. Sit
                    rem quibusdam animi, accusamus
                  </ReactReadMoreReadLess>
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="align-items-center justify-content-center ">
          <div
            className="slide-div"
            style={{
              width: "100%",
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "10px",
            }}
          >
            <div className="team mb-5" style={{ width: "50" }}>
              <img
                className="rounded-image"
                data-aos="fade-up"
                data-aos-once="true"
                data-aos-duration="1000"
                data-aos-delay="500"
                src="/images/admin.jpg"
                style={{
                  width: "160px",
                  height: "160px",
                  borderRadius: "50%",
                  marginRight: "10px",
                }}
              />
              <div className="team-text" style={{ width: "50" }}>
                <h5
                  className="text-black text-start"
                  data-aos="fade-up"
                  data-aos-once="true"
                  data-aos-duration="1000"
                  data-aos-delay="500"
                >
                  Chuka Samuel
                  <li
                    className="text-start pt-1"
                    style={{ color: "#a0a0a0", fontSize: "0.8rem" }}
                  >
                    Junior Project Developer
                  </li>
                </h5>

                <p
                  className="text-start"
                  data-aos="fade-up"
                  data-aos-once="true"
                  data-aos-duration="1000"
                  data-aos-delay="500"
                >
                  <ReactReadMoreReadLess
                    readMoreClassName="readMoreClassName"
                    readLessClassName="readLessClassName"
                    charLimit={200}
                    readMoreText="Read more.."
                    readLessText="Read Less.."
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolore animi, accusamus corporis magnam cupiditate ratione
                    dolor voluptatibus nihil aperiam quod expedita. Sit rem
                    quibusdam animi, accusamus corporis magnam cupiditate
                    ratione dolor voluptatibus nihil aperiam quod expedita. Sit
                    rem quibusdam animi, accusamus
                  </ReactReadMoreReadLess>
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="align-items-center justify-content-center ">
          <div
            className="slide-div"
            style={{
              width: "100%",
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "10px",
            }}
          >
            <div className="team mb-5" style={{ width: "50" }}>
              <img
                className="rounded-image"
                data-aos="fade-up"
                data-aos-once="true"
                data-aos-duration="1000"
                data-aos-delay="500"
                src="/images/admin.jpg"
                style={{
                  width: "160px",
                  height: "160px",
                  borderRadius: "50%",
                  marginRight: "10px",
                }}
              />
              <div className="team-text" style={{ width: "50" }}>
                <h5
                  className="text-black text-start"
                  data-aos="fade-up"
                  data-aos-once="true"
                  data-aos-duration="1000"
                  data-aos-delay="500"
                >
                  Dubem Chimamkpa
                  <li
                    className="text-start pt-1"
                    style={{ color: "#a0a0a0", fontSize: "0.8rem" }}
                  >
                    Junior Project Manager
                  </li>
                </h5>

                <p
                  className="text-start"
                  data-aos="fade-up"
                  data-aos-once="true"
                  data-aos-duration="1000"
                  data-aos-delay="500"
                >
                  <ReactReadMoreReadLess
                    readMoreClassName="readMoreClassName"
                    readLessClassName="readLessClassName"
                    charLimit={200}
                    readMoreText="Read more.."
                    readLessText="Read Less.."
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolore animi, accusamus corporis magnam cupiditate ratione
                    dolor voluptatibus nihil aperiam quod expedita. Sit rem
                    quibusdam animi, accusamus corporis magnam cupiditate
                    ratione dolor voluptatibus nihil aperiam quod expedita. Sit
                    rem quibusdam animi, accusamus
                  </ReactReadMoreReadLess>
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
