import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Caroo from "../Components/Caroo";
import Faq from "../Components/Faq";
import Footernew from "../Components/FooterNew";
import Navbar from "../Components/Navbar";

const Detail = () => {
  useEffect(() => {
    AOS.init();

    AOS.refresh();
  }, []);

  return (
    <div className="detail-wrap">
      <Navbar></Navbar>
      <div className="header aboout">
        {/*Content before waves*/}

        <div className="contenti text-start">
          <h3
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-delay="1500"
            data-aos-once="true"
          >
            Our Services
          </h3>
          <p
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="1500"
            data-aos-once="true"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            cupiditate molestias asperiores assumenda hic impedit asperiores
          </p>
        </div>
        <img
          className="img-fluid rounded-circle "
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="1500"
          data-aos-once="true"
          src="/images/image8.jpg"
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

      <div className="container " style={{ marginTop: "40px" }}>
        <div
          className="detail-div"
          style={{ paddingBottom: "70px", paddingTop: "80px" }}
        >
          <div
            className="for-divider "
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="800"
            data-aos-once="true"
            style={{ paddingBottom: "40px" }}
          >
            <span className="fw-bold text-success">UI/UX Development</span>
          </div>

          <div className="cod ">
            <div className="codi" style={{ width: "100%" }}>
              <div
                className=" cour "
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="900"
                data-aos-once="true"
              >
                <span className="fw-bold text-success">UI/UX Development</span>
              </div>
              <img
                className=" intro-img img-fluid mb-5 "
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="800"
                data-aos-once="true"
                src="./images/image02.jpg"
                alt="ann"
              />
            </div>
            <div
              className="codi "
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="1200"
              data-aos-once="true"
              style={{ width: "100%" }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              deserunt, adipisci sed expedita eius autem dolorum impedit nihil,
              dicta, recusandae harum maxime blanditiis fugit tenetur possimus
              commodi aliquam nobis in. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Consequuntur tuprende pariatur sed, illum
              excepturi dolorem iusto at praesentium repudiandae hic adipisci?
              Voluptatum, aspernatur quaerat ipsa adipisci officia molestias.
              Expedita, eius amet! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. nihil, dicta, recusandae harum maxime blanditiis
              fugit tenetur possimus commodi aliquam nobis in adipisicing elit.
              Consequuntur pariatur sed, illum excepturi dolorem iusto at
              praesentium repudiandae hic adipisci? Voluptatum, aspernatur
            </div>
          </div>
        </div>

        <div className="detail-div" style={{ paddingBottom: "70px" }}>
          <div
            className="for-divider "
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="1000"
            data-aos-once="true"
            style={{ paddingBottom: "40px" }}
          >
            <span className="fw-bold text-success">Software Development</span>
          </div>

          <div className="cod align-items-center">
            <div className="codi" style={{ width: "90%" }}>
              <div
                className=" cour "
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="1000"
                data-aos-once="true"
              >
                <span className="fw-bold text-success">UI/UX Development</span>
              </div>
              <img
                className=" intro-img img-fluid mb-5 "
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="1000"
                data-aos-once="true"
                src="./images/image3.jpg"
                alt="ann"
              />
            </div>
            <div
              className="codi "
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="1200"
              data-aos-once="true"
              style={{ width: "90%" }}
            >
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
                deserunt, adipisci sed expedita eius autem dolorum impedit
                nihil, dicta, recusandae harum maxime blanditiis fugit tenetur
                possimus commodi aliquam nobis in. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Consequuntur pariatur sed, illum
                excepturi dolorem iusto at praesentium repudiandae hic adipisci?
                Voluptatum, aspernatur quaerat ipsa adipisci officia molestias.
                Expedita, eius amet! Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Veniam Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Veniam deserunt, adipisci sed expedita eius
                autem dolorum impedit nihil, dicta, recusandae harum maxime
                blanditiis fugit tenetur possimus commodi aliquam nobis in.
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>

        <div className="detail-div" style={{ paddingBottom: "70px" }}>
          <div
            className="fore-divider "
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="1000"
            data-aos-once="true"
            style={{ paddingBottom: "40px" }}
          >
            <span className="fw-bold text-success">
              Cloud Infrastructure Services
            </span>
          </div>

          <div className="cod mt-2 align-items-center">
            <div
              className="codi first-crid first-cridi"
              style={{ width: "90%" }}
            >
              <p
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="1200"
                data-aos-once="true"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
                deserunt, adipisci sed expedita eius autem dolorum impedit
                nihil, dicta, recusandae harum maxime blanditiis fugit tenetur
                possimus commodi aliquam nobis in. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Consequuntur pariatur sed, illum
                excepturi dolorem iusto at praesentium repudiandae hic adipisci?
                Voluptatum, aspernatur quaerat ipsa adipisci officia molestias.
                Expedita, eius amet! Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Veniam Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Veniam deserunt, adipisci sed expedita eius
                autem dolorum impedit nihil, dicta, recusandae harum maxime
                blanditiis fugit tenetur possimus commodi aliquam nobis in.
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>

            <div className="codi" style={{ width: "90%" }}>
              <div
                className=" cour "
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="1000"
                data-aos-once="true"
              >
                <span className="fw-bold text-success">UI/UX Development</span>
              </div>
              <img
                className=" intro-img img-fluid mb-5 "
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="1000"
                data-aos-once="true"
                src="./images/image04.jpg"
                alt="ann"
              />
            </div>
          </div>
        </div>

        <div className="detail-div" style={{ paddingBottom: "70px" }}>
          <div
            className="fore-divider  "
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="900"
            data-aos-once="true"
            style={{ paddingBottom: "40px" }}
          >
            <span className="fw-bold text-success">
              Digital Cloud Transformation
            </span>
          </div>

          <div className="cod mt-2 align-items-center">
            <div
              className="codi first-crid first-cridi"
              style={{ width: "90%" }}
            >
              <p
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="1200"
                data-aos-once="true"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
                deserunt, adipisci sed expedita eius autem dolorum impedit
                nihil, dicta, recusandae harum maxime blanditiis fugit tenetur
                possimus commodi aliquam nobis in. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Consequuntur pariatur sed, illum
                excepturi dolorem iusto at praesentium repudiandae hic adipisci?
                Voluptatum, aspernatur quaerat ipsa adipisci officia molestias.
                Expedita, eius amet! Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Veniam Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Veniam deserunt, adipisci sed expedita eius
                autem dolorum impedit nihil, dicta, recusandae harum maxime
                blanditiis fugit tenetur possimus commodi aliquam nobis in.
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="codi " style={{ width: "90%" }}>
              <div
                className=" cour "
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="1200"
                data-aos-once="true"
              >
                <span className="fw-bold text-success">
                  Digital Cloud Transformation
                </span>
              </div>
              <img
                className=" intro-img img-fluid mb-5 "
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="1000"
                data-aos-once="true"
                src="./images/image09.jpg"
                alt="ann"
              />
            </div>
          </div>
        </div>

        <div className="detail-div" style={{ paddingBottom: "50px" }}>
          <div
            className="for-divider "
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="1000"
            data-aos-once="true"
            style={{ paddingBottom: "40px" }}
          >
            <span className="fw-bold text-success">Tech Hiring Services</span>
          </div>

          <div className="cod  align-items-center">
            <div className="codi" style={{ width: "90%" }}>
              <div
                className=" cour "
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="1100"
                data-aos-once="true"
              >
                <span className="fw-bold text-success">
                  Tech Hiring Services
                </span>
              </div>
              <img
                className=" intro-img img-fluid mb-5 "
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="1000"
                data-aos-once="true"
                src="./images/image1.jpg"
                alt="ann"
              />
            </div>
            <div className="codi" style={{ width: "100%" }}>
              <p
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="1200"
                data-aos-once="true"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
                deserunt, adipisci sed expedita eius autem dolorum impedit
                nihil, dicta, recusandae harum maxime blanditiis fugit tenetur
                possimus commodi aliquam nobis in. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Consequuntur pariatur sed, illum
                excepturi dolorem iusto at praesentium repudiandae hic adipisci?
                Voluptatum, aspernatur quaerat ipsa adipisci officia molestias.
                Expedita, eius amet! Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Veniam Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Veniam deserunt, adipisci sed expedita eius
                autem dolorum impedit nihil, dicta, recusandae harum maxime
                blanditiis fugit tenetur possimus commodi aliquam nobis in.
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Caroo></Caroo>
      <Faq></Faq>
      <Footernew></Footernew>
    </div>
  );
};

export default Detail;
