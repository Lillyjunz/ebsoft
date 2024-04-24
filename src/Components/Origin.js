const Origin = () => {
  return (
    <>
      <div
        className="wow animate__animated animate__fadeIn justify-content-center align-items-center orig"
        data-wow-delay="0.5s"
        data-wow-duration="2s"
        style={{ paddingBottom: "100px" }}
      >
        <h1 className=" text-center front  fw-bold pb-5">
          We deal with client of any <br></br>size and industry
        </h1>
        <div className="crid">
          <div
            className="first-crid wow animate__animated animate__fadeInUp"
            data-wow-duration="1.5s"
            style={{ width: "100%" }}
          >
            <h4 className="fw-bold ">Individuals and start ups</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              deserunt, adipisci sed expedita eius autem dolorum impedit nihil,
              dicta, recusandae harum maxime blanditiis fugit tenetur possimus
              commodi aliquam nobis in commodi aliquam nobis in.
            </p>
          </div>

          <div
            className="second-crid wow animate__animated animate__fadeInUp"
            data-wow-delay="0.5s"
            data-wow-duration="1.5s"
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
            className="third-crid wow animate__animated animate__fadeInLeft"
            data-wow-delay="0.5s"
            data-wow-duration="1s"
            style={{ width: "90%" }}
          >
            <h3 className="text-center img-txt  fw-bold">
              Individuals and start up
            </h3>
            <img
              className=" img-fluid intro-img"
              src="./images/image10.jpg"
              alt="ann"
            />
          </div>

          <div
            className="fourth-crid wow animate__animated animate__fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.5s"
            style={{ width: "100%" }}
          >
            <h4 className="fw-bold">Individuals and start ups</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              deserunt, adipisci sed expedita eius autem dolorum impedit nihil,
              dicta, recusandae harum maxime blanditiis fugit tenetur possimus
              commodi aliquam nobis in commodi aliquam nobis in.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Origin;
