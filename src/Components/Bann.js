const Bann = () => {
  return (
    <div className="header">
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
          <span className="text-white">Build.</span>
          <span style={{ color: "orangeRed" }}>Deliver</span>
        </h1>
        <p
          className="text-center justify-self-center p-4 "
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="500"
          data-aos-once="true"
        >
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          </span>
        </p>
      </div>

      <div className="text-center  im-div">
        <img
          className="img-fluid ban-img "
          data-aos="fade"
          data-aos-duration="2000"
          data-aos-delay="1000"
          data-aos-once="true"
          src="./images/ann.gif"
        />
        <div className="div1 text-center">
          <li
            className="fw-bold "
            data-aos="fade"
            data-aos-duration="1000"
            data-aos-delay="1500"
            data-aos-once="true"
          >
            WHO
          </li>
          <li
            className="ms-5 "
            data-aos="fade"
            data-aos-duration="1000"
            data-aos-delay="1500"
            data-aos-once="true"
          >
            we are
          </li>
        </div>
        <div className="div2">
          <li
            className="fw-bold "
            data-aos="fade"
            data-aos-duration="1000"
            data-aos-delay="2000"
            data-aos-once="true"
          >
            WHAT
          </li>
          <li
            className="ms-5 "
            data-aos="fade"
            data-aos-duration="1000"
            data-aos-delay="2000"
            data-aos-once="true"
          >
            {" "}
            we do
          </li>
        </div>
        <div className="div3">
          <span
            className="fw-bold "
            data-aos="fade"
            data-aos-duration="1000"
            data-aos-delay="2500"
            data-aos-once="true"
          >
            WE are Hiring
          </span>{" "}
        </div>
        <div className="div4">
          <li
            className="ms-4 fw-bold "
            data-aos="fade"
            data-aos-duration="1000"
            data-aos-delay="2500"
            data-aos-once="true"
          >
            HOW
          </li>{" "}
          <li
            data-aos="fade"
            data-aos-duration="1000"
            data-aos-delay="2500"
            data-aos-once="true"
          >
            we think
          </li>
        </div>
        <div className="div5">
          {" "}
          <li
            className="ms-4 fw-bold "
            data-aos="fade"
            data-aos-duration="1000"
            data-aos-once="true"
            data-aos-delay="2800"
          >
            TELL US
          </li>
          <li
            data-aos="fade"
            data-aos-duration="1000"
            data-aos-delay="2800"
            data-aos-once="true"
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
