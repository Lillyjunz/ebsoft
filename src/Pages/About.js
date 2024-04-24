import Footernew from "../Components/FooterNew";
import Navbar from "../Components/Navbar";
import SwiperCarousel from "../Components/Swipercarous";
import Team from "../Components/Team";
const About = () => {
  return (
    <div className="abb">
      <Navbar></Navbar>

      <div className="header aboout">
        {/*Content before waves*/}

        <div className="contenti text-start">
          <h3>About Ebsoft</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            cupiditate molestias asperiores assumenda hic impedit asperiores
          </p>
        </div>
        <img className="img-fluid rounded-circle" src="/images/image04.jpg" />
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

      <div style={{ paddingBottom: "100px" }}>
        <div className="crid">
          <div className="first-crid" style={{ width: "90%" }}>
            <h4 className="fw-bold text-primary ourm">Our Mission</h4>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              deserunt, adipisci sed expedita eius autem dolorum impedit nihil,
              dicta, recusandae harum maxime blanditiis fugit tenetur possimus
              commodi aliquam nobis in commodi aliquam nobis in.
            </p>
          </div>

          <div className="second-crid" style={{ width: "85%" }}>
            <div className="for-divider our">
              <span className="fw-bold text-primary">Our Mission</span>
            </div>

            <img
              className=" img-fluid intro-img"
              src="./images/image09.jpg"
              alt="ann"
            />
          </div>

          <div className="third-crid" style={{ width: "85%" }}>
            <div className="for-divider our">
              <span className="fw-bold text-primary">Our Vision</span>
            </div>
            <img
              className=" img-fluid intro-img"
              src="./images/image10.jpg"
              alt="ann"
            />
          </div>

          <div className="fourth-crid" style={{ width: "90%" }}>
            <h4 className="fw-bold text-primary">Our Vision</h4>
            <p>
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
          <h3 className="text-light text-center fw-bold">Our Values</h3>
          <div className="d-flex text-light">
            <div className=" w-100 me-5 mt-5">
              <h4 className=" fw-bold text-center">Happiness</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Tenetur ab recusandae sint eius obcaecati atque, necessitatibus
                nam voluptates aliquid, natus quas quia illo? Provident
                accusamus laudantium dolores mollitia tempora incidunt!
              </p>
            </div>
            <div className=" w-100 mt-5">
              <h4 className="fw-bold text-light text-center">Honesty</h4>
              <p>
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
