import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import CarouselComponent from "./CarouselComp";

export default function SwiperHome() {
  return (
    <>
      {/* <Swiper
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
        id="success"
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
              backgroundColor: "#ECF4EF",
              width: "75%",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
              borderRadius: "10px",
              padding: "40px 50px",
            }}
          >
            <div style={{ paddingTop: "20px" }}>
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
                  "EBSOFT's innovative solutions directly contributed to our
                  client’s business growth. "
                </i>
              </h3>
              <p>
                Worked with EBSOFT team on multiple airline and hotel
                reservation web app projects. Their hands-on expertise in cloud
                architecture and automation helped us scale faster than
                anticipated, especially in API and backend development with
                Airline GDS, ensured a smooth deployment of our application
                across multiple environments. Their innovative solutions
                directly contributed to our client’s business growth.
              </p>
              <div className="pt-3">
                <h4 className="fw-bold">
                  Founder, Developer Head at ADEXSQUARE Technology
                </h4>
                <p>Ezekiel</p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="align-items-center justify-content-center d-flex">
          <div
            className="slide-div"
            style={{
              backgroundColor: "#ECF4EF",
              width: "75%",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
              borderRadius: "10px",
              padding: "40px 50px",
            }}
          >
            <div style={{ paddingTop: "20px" }}>
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
                  "Working with EBSOFT on our telehealth platform was a pivotal
                  experience. "
                </i>
              </h3>
              <p>
                Their comprehensive cloud and DevOps services streamlined our
                deployment processes, enabling us to scale rapidly during peak
                demand. The team’s dedication to optimizing our infrastructure
                resulted in a 60% decrease in downtime and significantly
                improved user experience. Their innovative solutions have
                empowered us to expand our reach and enhance patient care.
              </p>
              <div className="pt-3">
                <h4 className="fw-bold">CTO at HealthWise Solutions</h4>
                <p>Uche</p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="align-items-center justify-content-center d-flex">
          <div
            className="slide-div"
            style={{
              backgroundColor: "#ECF4EF",
              width: "75%",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
              borderRadius: "10px",
              padding: "40px 50px",
            }}
          >
            <div style={{ paddingTop: "20px" }}>
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
                  "Partnering with the EBSOFT team for our Cloud Digital
                  Transformation was a game-changer"
                </i>
              </h3>
              <p>
                Their tailored solutions and expertise in cloud infrastructure
                significantly improved our performance, leading to a 40%
                reduction in operational costs and a 30% increase in
                productivity. We can now focus on creating value for our
                clients!
              </p>
              <div className="pt-3">
                <h4 className="fw-bold"> CEO at Tech Innovations Inc.</h4>
                <p>Sarah Thompson</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="align-items-center justify-content-center d-flex"
          style={{ marginBottom: "10px" }}
        >
          <div
            className="slide-div"
            style={{
              backgroundColor: "#ECF4EF",
              width: "75%",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
              borderRadius: "10px",
              padding: "55px 50px",
            }}
          >
            <div style={{ paddingTop: "20px" }}>
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
                  "EBSOFT is more than just a service provider—they're a tech
                  ally. "
                </i>
              </h3>
              <p>
                They took the time to understand our unique challenges and
                delivered exceptional solutions. Moving from a single software
                engineer managing our website to a cost-effective, company-wide
                collaboration with EBSOFT has been a game-changer
              </p>
              <div className="pt-3">
                <h4 className="fw-bold">CEO at NIKICHIS Limited</h4>
                <p>Richard</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper> */}

    <CarouselComponent></CarouselComponent>
    </>
  );
}




