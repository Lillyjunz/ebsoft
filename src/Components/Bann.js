import { NavLink } from "react-router-dom";

const Bann = () => {
  return (
    <div className="header">
      <div className="banny">
        <div>
          <div className="banner">
            <h1
              className="text-center"
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-delay="500"
              data-aos-once="true"
            >
              <span className="text-success">Visualize.</span>
              <span className="text-primary">Design.</span>
              <span className="buil">
                <span className="text-white">Build.</span>
                <span style={{ color: "orangeRed" }}>Deliver</span>
              </span>
              <li className="build">
                <span className="text-white">Build.</span>
                <span style={{ color: "orangeRed" }}>Deliver</span>
              </li>
            </h1>
            <p
              className="text-center justify-self-center ps-4 pe-4 "
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="500"
              data-aos-once="true"
            >
              <span>
                Embark on a transformative journey with us to shape your
                software landscape for the future. Guided by excellence and
                brilliance,<br></br> we visualize, design, build and deliver
                with precision.
              </span>
            </p>
          </div>

          <div className="text-center  im-div">
            <div className="baan">
              <img
                className=" ban-img "
                data-aos="fade"
                data-aos-duration="1000"
                data-aos-delay="200"
                data-aos-once="true"
                src="./images/ann.gif"
              />
            </div>
            <NavLink to="/about">
              <div className="div1 divs text-center">
                <li
                  data-aos="fade"
                  data-aos-duration="1000"
                  data-aos-delay="1300"
                  data-aos-once="true"
                  style={{ fontSize: "0.8em", padding: "0", margin: "0" }}
                >
                  WHO
                </li>
                <li
                  className="ms-5"
                  style={{ fontSize: "0.8em", padding: "0", margin: "0" }}
                  data-aos="fade"
                  data-aos-duration="1000"
                  data-aos-delay="600"
                  data-aos-once="true"
                >
                  we are
                </li>
              </div>
            </NavLink>
            <NavLink to="/detail">
              <div className="div2 divs">
                <li
                  style={{ fontSize: "0.8em", padding: "0", margin: "0" }}
                  data-aos="fade"
                  data-aos-duration="1000"
                  data-aos-delay="1000"
                  data-aos-once="true"
                >
                  WHAT
                </li>
                <li
                  className="ms-5 "
                  style={{ fontSize: "0.8em", padding: "0", margin: "0" }}
                  data-aos="fade"
                  data-aos-duration="1000"
                  data-aos-delay="1000"
                  data-aos-once="true"
                >
                  {" "}
                  we do
                </li>
              </div>
            </NavLink>
            <NavLink to="/join">
              <div className="div3 divs">
                <span
                  style={{ fontSize: "0.8em", padding: "0", margin: "0" }}
                  data-aos="fade"
                  data-aos-duration="1000"
                  data-aos-delay="800"
                  data-aos-once="true"
                >
                  WE are Hiring
                </span>{" "}
              </div>
            </NavLink>
            <a href="#intro">
              <div className="div4 divs">
                <li
                  className="ms-4"
                  style={{ fontSize: "0.8em", padding: "0", margin: "0" }}
                  data-aos="fade"
                  data-aos-duration="1000"
                  data-aos-delay="1100"
                  data-aos-once="true"
                >
                  HOW
                </li>{" "}
                <li
                  className="me-2"
                  style={{ fontSize: "0.8em", padding: "0", margin: "0" }}
                  data-aos="fade"
                  data-aos-duration="1000"
                  data-aos-delay="1100"
                  data-aos-once="true"
                >
                  we think
                </li>
              </div>
            </a>
            <NavLink to="/contact">
              <div className="div5 divs">
                {" "}
                <li
                  className="ms-5 "
                  style={{ fontSize: "0.8em", padding: "0", margin: "0" }}
                  data-aos="fade"
                  data-aos-duration="1000"
                  data-aos-once="true"
                  data-aos-delay="1200"
                >
                  TELL US
                </li>
                <li
                  className="me-4"
                  style={{ fontSize: "0.8em", padding: "0", margin: "0" }}
                  data-aos="fade"
                  data-aos-duration="1000"
                  data-aos-delay="1200"
                  data-aos-once="true"
                >
                  about the project
                </li>
              </div>
            </NavLink>
          </div>
        </div>
      </div>

      <div className="wave-container">
        <svg
          className="wavs"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
          shapeRendering="auto"
          style={{ transform: "rotate(180deg)" }} // Rotate the wave
        >
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <g className="paralax">
            <use xlinkHref="#gentle-wave" x={48} y={3} fill="#006400" />
            <use
              xlinkHref="#gentle-wave"
              x={48}
              y={5}
              fill="rgba(255,255,255,0.3)"
            />
            <use xlinkHref="#gentle-wave" x={48} y={7} fill="#000" />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default Bann;
