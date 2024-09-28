
import Footernew from "../Components/FooterNew";
import Navbar from "../Components/Navbar";
import Open from "../Components/OPen-Vacancy";

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
            Lorem ipsum dolor sit amet i consectetur adipisicing elit.
            Temporibus cupiditate molestias asperiores assumenda hic impedit
            asperiores
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

      <Open></Open>

      {/* <div
        className="text-center align-items-center justify-content-center"
        data-aos="bounce-up"
        data-aos-duration="1000"
        data-aos-delay="500"
        data-aos-once="true"
        style={{ margin: "150px auto" }}
      >
        <h2 className="fw-bold">No Vacancies at this moment</h2>
        <img src="../images/lottie.gif" width={350} height={150}></img>
      </div> */}

      <Footernew></Footernew>
    </div>
  );
};

export default Join;
