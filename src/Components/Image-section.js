const Imagesection = () => {
  return (
    <>
      <div className="row mt-5">
        <div className="col-lg-6">
          <div className="align-items-center" style={{ margin: "14% 20%" }}>
            <h1 className="fw-bold">We are Hiring</h1>
            <p>Find out about open vacancies in our team</p>
            <button className="btn btn-success">Join our Team</button>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="d-flex">
            <img
              style={{
                borderRadius: "10px",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.6)",
                marginTop: "40px",
              }}
              className="me-2 "
              src="./images/intro.jpg"
              width={120}
              height={120}
            ></img>
            <img
              style={{
                borderRadius: "10px",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.6)",
              }}
              src="./images/intro.jpg"
              width={120}
              height={160}
            ></img>
          </div>

          <div className="d-flex pt-3">
            <img
              style={{
                borderRadius: "10px",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.6)",
              }}
              className="me-2"
              src="./images/intro.jpg"
              width={120}
              height={120}
            ></img>
            <img
              style={{
                borderRadius: "10px",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.6)",
              }}
              src="./images/intro.jpg"
              width={120}
              height={160}
            ></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Imagesection;
