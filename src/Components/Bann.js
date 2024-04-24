const Bann = () => {
  return (
    <div className="header">
      <div className="banner pt-3" style={{ marginBottom: "80px" }}>
        <h1
          style={{ fontSize: "4rem" }}
          className="text-center wow animate__animated animate__fadeInDown"
          data-wow-duration="2s"
        >
          <span className="text-success">Visualize.</span>
          <span className="text-primary">Design.</span>
          <span className="text-white">Build.</span>
          <span style={{ color: "orangeRed" }}>Deliver</span>
        </h1>
        <p
          className="text-center justify-self-center p-4 wow animate__animated animate__fadeInRight"
          data-wow-duration="2s"
        >
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          </span>
        </p>
      </div>

      <div
        className="text-center mt-5 im-div"
        style={{ paddingBottom: "40px", paddingTop: "40px" }}
      >
        <img
          className="img-fluid ban-img wow animate__animated animate__fadeIn "
          data-wow-delay="2s"
          data-wow-duration="2s"
          src="./images/ann.gif"
        />
        <div className="div1 text-center">
          <li
            className="fw-bold wow animate__animated animate__fadeIn"
            data-wow-delay="1s"
          >
            WHO
          </li>
          <li
            className="ms-5 wow animate__animated animate__fadeIn"
            data-wow-delay="1.5s"
          >
            we are
          </li>
        </div>
        <div className="div2">
          <li
            className="fw-bold wow animate__animated animate__fadeIn"
            data-wow-delay="1s"
          >
            WHAT
          </li>
          <li
            className="ms-5 wow animate__animated animate__fadeIn"
            data-wow-delay="1.5s"
          >
            {" "}
            we do
          </li>
        </div>
        <div className="div3">
          <span
            className="fw-bold wow animate__animated animate__fadeIn"
            data-wow-delay="1s"
          >
            WE are Hiring
          </span>{" "}
        </div>
        <div className="div4">
          <li
            className="ms-4 fw-bold wow animate__animated animate__fadeIn"
            data-wow-delay="1s"
          >
            HOW
          </li>{" "}
          <li
            className="wow animate__animated animate__fadeIn"
            data-wow-delay="1.5s"
          >
            we think
          </li>
        </div>
        <div className="div5">
          {" "}
          <li
            className="ms-4 fw-bold wow animate__animated animate__fadeIn"
            data-wow-delay="1s"
          >
            TELL US
          </li>
          <li
            className="wow animate__animated animate__fadeIn"
            data-wow-delay="1.5s"
          >
            about the project
          </li>
        </div>
      </div>
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
  );
};

export default Bann;
