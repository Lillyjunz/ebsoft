import $ from "jquery";
import { useEffect } from "react";
import { WOW } from "wowjs";
import Footernew from "../Components/FooterNew";
import Navbar from "../Components/Navbar";

const Join = () => {
  useEffect(() => {
    new WOW().init();

    $(window).scroll(function () {
      if ($(this).scrollTop() > 300) {
        $(".back-to-top").fadeIn("slow");
      } else {
        $(".back-to-top").fadeOut("slow");
      }
    });
  }, []);
  return (
    <div className="join-wrap">
      <Navbar></Navbar>
      <div className="header aboout">
        {/*Content before waves*/}

        <div className="contenti text-start">
          <h3
            className="wow animate__animated animate__fadeInDown"
            data-wow-duration="1s"
            data-wow-delay="1s"
          >
            Join Us
          </h3>
          <p
            className="wow animate__animated animate__fadeInLeft"
            data-wow-duration="1s"
            data-wow-delay="1s"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            cupiditate molestias asperiores assumenda hic impedit asperiores
          </p>
        </div>
        <img
          className="img-fluid rounded-circle wow animate__animated animate__fadeInRight"
          data-wow-duration="1s"
          data-wow-delay="1s"
          src="/images/image2.jpg"
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

      <div
        className="text-center align-items-center justify-content-center wow animate__animated animate__bounceInUp"
        data-wow-duration="1s"
        data-wow-delay="1s"
        style={{ margin: "150px auto" }}
      >
        <h2 className="fw-bold">No Vacancies at this moment</h2>
        <img src="../images/lottie.gif" width={350} height={150}></img>
      </div>
      <Footernew></Footernew>
    </div>
  );
};

export default Join;
