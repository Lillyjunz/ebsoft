const Origin = () => {
  return (
    <>
      <div
        className="row intro align-items-center g-5 justify-content-center "
        style={{ width: "100%", marginTop: "300px" }}
      >
        <h1 className="text-center fw-bold pb-5">
          {" "}
          We deal with client of any size and industry
        </h1>
        <div
          className="col-lg-6 align-items-center text-start justify-content-center ps-sm-5"
          style={{ width: "600px", paddingRight: "100px" }}
        >
          <h4 className="fw-bold">Individuals and start ups</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            deserunt, adipisci sed expedita eius autem dolorum impedit nihil,
            dicta, recusandae harum maxime blanditiis fugit tenetur possimus
            commodi aliquam nobis in.
          </p>
        </div>
        <div
          className="col-lg-6 align-items-center justify-content-center mb-sm-5"
          style={{ width: "480px", height: "300px" }}
        >
          <img
            className=" img-fluid intro-img"
            src="./images/image03.jpg"
            alt="ann"
          />
        </div>
      </div>
      <div
        className="row align-items-center g-5 justify-content-center"
        style={{ width: "100%", marginBottom: "200px" }}
      >
        <div
          className="col-lg-6 pt-sm-5 mb-sm-5"
          style={{ width: "500px", height: "300px" }}
        >
          <img
            className=" img-fluid intro-img"
            src="./images/image10.jpg"
            alt="ann"
          />
        </div>
        <div
          className="col-lg-6 align-items-center justify-content-center ps-sm-5"
          style={{ width: "600px", paddingLeft: "120px" }}
        >
          <h4 className="fw-bold">Individuals and start ups</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            deserunt, adipisci sed expedita eius autem dolorum impedit nihil,
            dicta, recusandae harum maxime blanditiis fugit tenetur possimus
            commodi aliquam nobis in.
          </p>
        </div>
      </div>
    </>
  );
};

export default Origin;
