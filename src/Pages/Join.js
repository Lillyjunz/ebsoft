import Footernew from "../Components/FooterNew";
import Navbar from "../Components/Navbar";

const Join = () => {
  return (
    <div className="join-wrap">
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
            Join Us
          </h3>
          <p
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="500"
            data-aos-once="true"
          >
            Explore our open positions and become part of our dynamic team!
          </p>
        </div>
        <img
          className="img-fluid rounded-circle "
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="500"
          data-aos-once="true"
          src="/images/image2.jpg"
        />
      </div>

      <div className="wave-container">
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
              id="straight-wave"
              d="M0 24h150v4H0z" // Straight line
            />
          </defs>
          <g className="paraax">
            <use xlinkHref="#straight-wave" x={0} y={0} fill="green" />
            <use
              xlinkHref="#straight-wave"
              x={0}
              y={2}
              fill="rgba(255,255,255,0.3)"
            />
          </g>
        </svg>
      </div>

      {/* <Open></Open> */}

      <div
        className="center-screen"
        data-aos="bounce-up"
        data-aos-duration="1000"
        data-aos-delay="500"
        data-aos-once="true"
      >
        <h2 className="fw-bold">
          No Vacancy. Check in later through our social media platforms..
        </h2>
        <img src="../images/lottie.gif" width={350} height={150}></img>
      </div>

      <Footernew></Footernew>
    </div>
  );
};

export default Join;
