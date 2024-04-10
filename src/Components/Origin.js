const Origin = () => {
  return (
    <>
      <div className="row intro align-items-center justify-content-center">
        <h1 className="text-center fw-bold pb-5">
          {" "}
          We deal with client of any size and industry
        </h1>
        <div className="col-lg-6 align-items-center justify-content-center ">
          <div className="mb-5 intro-text">
            <h4 className="fw-bold">Individuals and start ups</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              deserunt, adipisci sed expedita eius autem dolorum impedit nihil,
              dicta, recusandae harum maxime blanditiis fugit tenetur possimus
              commodi aliquam nobis in.
            </p>
          </div>
          <img
            className=" intro-img"
            src="./images/intro.jpg"
            alt="ann"
            width={500}
            height={300}
          />
        </div>
        <div className="col-lg-6 align-items-center justify-content-center">
          <img
            className=" intro-img mb-5"
            src="./images/intro.jpg"
            alt="ann"
            width={500}
            height={300}
          />
          <div className="intro-text">
            <h4 className="fw-bold">Government and start Institutions</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              deserunt, adipisci sed expedita eius autem dolorum impedit nihil,
              dicta, recusandae harum maxime blanditiis fugit tenetur possimus
              commodi aliquam nobis in.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Origin;
