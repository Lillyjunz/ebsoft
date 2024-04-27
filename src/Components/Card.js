const Card = () => {
  return (
    <>
      <div className="container" style={{ marginTop: "110px" }}>
        <h1
          className="fw-bold cardi-text"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="1000"
          data-aos-once="true"
        >
          Companies with <br></br>extensive experience in
        </h1>
        <div className="card-sect">
          <div
            className="card"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="1400"
            data-aos-once="true"
          >
            <img
              src="../images/image04.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5
                className="card-title fw-bold"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="1700"
                data-aos-once="true"
              >
                In House Development
              </h5>
              <p
                className="card-text"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="1900"
                data-aos-once="true"
              >
                We are turning your ideas into platform independent,
                cloud-based, serverless, globally-scalable solutions, allowing
                you to attract investors and generate initial traction of users
                allowing you to attract investors and generate initial traction
                of users.
              </p>

              <a
                href="#"
                className="btn btn-success fw-bold mb-3"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="2000"
                data-aos-once="true"
              >
                Read More
              </a>
            </div>
          </div>

          <div
            className="card "
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="1100"
            data-aos-once="true"
          >
            <img
              src="../images/image3.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5
                className="card-title fw-bold"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="1600"
                data-aos-once="true"
              >
                Team Extensions
              </h5>
              <p
                className="card-text"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="1800"
                data-aos-once="true"
              >
                We are turning your ideas into platform independent,
                cloud-based, serverless, globally-scalable solutions, allowing
                you to attract investors and generate initial traction of users
                globally-scalable solutions, allowing you to attract investors
                and generate initial traction of users.
              </p>

              <a
                href="#"
                className="btn btn-success fw-bold mb-3"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="2000"
                data-aos-once="true"
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
