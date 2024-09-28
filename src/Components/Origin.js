const Origin = () => {
  return (
    <>
   
      {/* <div>
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
            <use xlinkHref="#gentle-wave" x={48} y={7} fill="#000" />
          </g>
        </svg>
      </div> */}
     

     

      <div
        className=" justify-content-center align-items-center orig"
        data-aos="fade"
        data-aos-duration="1000"
        data-aos-once="true"
        data-aos-delay="500"
      >
        <h1
          className=" text-center front  fw-bold pb-5"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="500"
          data-aos-once="true"
        >
          We deal with client of any <br></br>size and industry
        </h1>
        <div className="crid">
          <div
            className="first-crid "
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="500"
            data-aos-once="true"
            style={{ width: "100%" }}
          >
            <h4 className="fw-bold ">Individuals and start ups</h4>
            <p>
              We specialize in developing MVPs, proof of concepts, and full
              products that embrace modern UX/UI trends. Our goal is to help you
              efficiently test your ideas for product-market fit with minimal
              investment and time.
            </p>
          </div>

          <div
            className="second-crid"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="500"
            data-aos-once="true"
            style={{ width: "90%" }}
          >
            <h3 className="text-center img-txt fw-bold">
              Individuals and start up
            </h3>
            <img
              className=" img-fluid intro-img "
              src="./images/image13.jpg"
              alt="ann"
            />
          </div>

          <div
            className="third-crid "
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="500"
            data-aos-once="true"
            style={{ width: "90%" }}
          >
            <h3 className="text-center img-txt  fw-bold">
              Enterprise and Government
            </h3>
            <img
              className=" img-fluid intro-img"
              src="./images/image10.jpg"
              alt="ann"
            />
          </div>

          <div
            className="fourth-crid "
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="500"
            data-aos-once="true"
            style={{ width: "100%" }}
          >
            <h4 className="fw-bold">Enterprise and Government</h4>
            <p>
              We provide innovative solutions to leading corporations and public
              authorities in health, education, and oil & gas, serving large
              enterprises including Fortune 500 companies among our clientele.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Origin;
