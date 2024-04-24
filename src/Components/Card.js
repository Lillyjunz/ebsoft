const Card = () => {
  return (
    <>
      <div
        className="container wow animate__animated animate__fadeInUp"
        data-wow-duration="1s"
        data-wow-delay="1s"
        style={{ marginTop: "110px" }}
      >
        <h1 className="fw-bold cardi-text wow animate__animated animate__fadeInUp">
          Companies with <br></br>extensive experience in
        </h1>
        <div className="card-sect">
          <div
            className="card wow animate__animated animate__fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="1s"
          >
            <img
              src="../images/image04.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5
                className="card-title fw-bold wow animate__animated animate__fadeInUp"
                data-wow-duration="1s"
                data-wow-delay="1s"
              >
                In House Development
              </h5>
              <p
                className="card-text wow animate__animated animate__fadeInUp"
                data-wow-duration="1s"
                data-wow-delay="1s"
              >
                We are turning your ideas into platform independent,
                cloud-based, serverless, globally-scalable solutions, allowing
                you to attract investors and generate initial traction of users
                allowing you to attract investors and generate initial traction
                of users.
              </p>

              <a
                href="#"
                className="btn btn-success fw-bold mb-3 wow animate__animated animate__fadeInUp"
                data-wow-duration="1s"
                data-wow-delay="1s"
              >
                Read More
              </a>
            </div>
          </div>

          <div
            className="card wow animate__animated animate__fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="1s"
          >
            <img
              src="../images/image3.jpg"
              className="card-img-top"
              alt="..."
            />
            <div
              className="card-body wow animate__animated animate__fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="1s"
            >
              <h5
                className="card-title fw-bold wow animate__animated animate__fadeInUp"
                data-wow-duration="1s"
                data-wow-delay="1s"
              >
                Team Extensions
              </h5>
              <p className="card-text">
                We are turning your ideas into platform independent,
                cloud-based, serverless, globally-scalable solutions, allowing
                you to attract investors and generate initial traction of users
                globally-scalable solutions, allowing you to attract investors
                and generate initial traction of users.
              </p>

              <a
                href="#"
                className="btn btn-success fw-bold mb-3 wow animate__animated animate__fadeInUp"
                data-wow-duration="1s"
                data-wow-delay="1s"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
