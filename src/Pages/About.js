import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Footernew from "../Components/FooterNew";
import Navbar from "../Components/Navbar";
import SwiperCarousel from "../Components/Swipercarous";
import Team from "../Components/Team";

const About = () => {
  useEffect(() => {
    AOS.init();

    AOS.refresh();
  }, []);

  return (
    <div className="abb">
      <Navbar></Navbar>

      <div className="header aboout">
        {/*Content before waves*/}

        <div className="contenti text-start">
          <h3
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-delay="500"
            data-aos-once="true"
          >
            About Ebsoft
          </h3>
          <p data-aos="fade-left" data-aos-duration="1000" data-aos-delay="500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            cupiditate molestias asperiores assumenda hic impedit asperiores
          </p>
        </div>
        <img
          className="img-fluid rounded-circle "
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="500"
          data-aos-once="true"
          src="/images/image04.jpg"
        />
        {/*Waves Container*/}
        <div>
          <svg
            className="wavs"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
            shapeRendering="auto"
          >
            <defs>
              <path
                id="gentle-wave"
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
              />
            </defs>
            <g className="paralax">
              {/* <use xlink:href="#gentle-wave" x="48" y="0" fill="#006400" /> */}
              <use xlinkHref="#gentle-wave" x={48} y={3} fill="#006400" />
              <use
                xlinkHref="#gentle-wave"
                x={48}
                y={5}
                fill="rgba(255,255,255,0.3)"
              />
              <use xlinkHref="#gentle-wave" x={48} y={7} fill="#fff" />
            </g>
          </svg>
        </div>
        {/*Waves end*/}
      </div>

      <div className="front" style={{ paddingBottom: "80px" }}>
        <div className="crid">
          <div
            className="first-crid"
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-duration="1000"
            data-aos-delay="500"
            style={{ width: "100%" }}
          >
            <h1
              className="fw-bold text-success ourm "
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-duration="1000"
              data-aos-delay="500"
            >
              Our Mission
            </h1>

            <p
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-duration="1000"
              data-aos-delay="500"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              deserunt, adipisci sed expedita eius autem dolorum impedit nihil,
              dicta, recusandae harum maxime blanditiis fugit tenetur possimus
              commodi aliquam nobis in commodi aliquam nobis in.
            </p>
          </div>

          <div className="second-crid" style={{ width: "90%" }}>
            <div
              className="for-divider our "
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-duration="1000"
              data-aos-delay="500"
            >
              <span className="fw-bold text-success">Our Mission</span>
            </div>

            <img
              className=" img-fluid intro-img "
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-duration="1000"
              data-aos-delay="500"
              src="./images/image13.jpg"
              alt="ann"
            />
          </div>

          <div className="third-crid" style={{ width: "90%" }}>
            <div
              className="for-divider our "
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-duration="1000"
              data-aos-delay="500"
            >
              <span className="fw-bold text-success">Our Vision</span>
            </div>
            <img
              className=" img-fluid intro-img "
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-duration="1000"
              data-aos-delay="500"
              src="./images/image10.jpg"
              alt="ann"
            />
          </div>

          <div className="fourth-crid" style={{ width: "100%" }}>
            <h1
              className="fw-bold text-success ourm "
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-duration="1000"
              data-aos-delay="500"
            >
              Our Vision
            </h1>
            <p
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-duration="1000"
              data-aos-delay="500"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              deserunt, adipisci sed expedita eius autem dolorum impedit nihil,
              dicta, recusandae harum maxime blanditiis fugit tenetur possimus
              commodi aliquam nobis in commodi aliquam nobis in.
            </p>
          </div>
        </div>
      </div>

      <div className="reg mt-4">
        <div
          className="row py-5 px-4 "
          style={{ backgroundColor: "rgba(0, 0, 0, .3)" }}
        >
          <h1
            className="text-light text-center fw-bold "
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-duration="1000"
            data-aos-delay="500"
          >
            Our Values
          </h1>
          <div className="crid text-light">
            <div className=" w-100 me-5 mt-5">
              <h3
                className=" fw-bold text-center"
                data-aos="fade-up"
                data-aos-once="true"
                data-aos-duration="1000"
                data-aos-delay="500"
              >
                Happiness
              </h3>
              <p
                data-aos="fade-up"
                data-aos-once="true"
                data-aos-duration="1000"
                data-aos-delay="500"
              >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Tenetur ab recusandae sint eius obcaecati atque, necessitatibus
                nam voluptates aliquid, natus quas quia illo? Provident
                accusamus laudantium dolores mollitia tempora incidunt!
              </p>
            </div>
            <div className=" w-100 mt-5">
              <h3
                className="fw-bold text-light text-center "
                data-aos="fade-up"
                data-aos-once="true"
                data-aos-duration="1000"
                data-aos-delay="500"
              >
                Honesty
              </h3>
              <p
                data-aos="fade-up"
                data-aos-once="true"
                data-aos-duration="1000"
                data-aos-delay="500"
              >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Numquam, impedit atque id architecto ab in? Veniam sunt illum
                consectetur ut et consequatur, a tempore veritatis, iusto fugit
                officia harum animi?
              </p>
            </div>
          </div>
        </div>
      </div>
      <Team></Team>

      <SwiperCarousel></SwiperCarousel>

      <Footernew></Footernew>
    </div>
  );
};

export default About;
