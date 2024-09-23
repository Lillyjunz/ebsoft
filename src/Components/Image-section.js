import { NavLink } from "react-router-dom";

const Imagesection = () => {
  return (
    <>
      <div className="d-flex im-sect justify-content-between container align-items-center ">
        <div className="co">
          <div className="align-items-center">
            <h1
              className="fw-bold hire "
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="1000"
              data-aos-once="true"
            >
              We are Hiring
            </h1>
            <p
              className="p-1 "
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="1300"
              data-aos-once="true"
            >
              Explore our open positions and become a part of our dynamic team!
            </p>
            <NavLink to="/join">
              <button
                className="btn btn-success  fw-bold"
                data-aos="bounce-up"
                data-aos-duration="1000"
                data-aos-delay="1600"
                data-aos-once="true"
              >
                Join our Team
              </button>
            </NavLink>
          </div>
        </div>

        <div className="coo" style={{ width: "420px" }}>
          <div className="d-flex">
            <img
              style={{
                borderRadius: "10px",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.6)",
                marginTop: "40px",
              }}
              className="me-2 "
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="1600"
              data-aos-once="true"
              src="./images/image08.jpg"
              width={140}
              height={180}
            ></img>
            <img
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="1600"
              data-aos-once="true"
              style={{
                borderRadius: "10px",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.6)",
              }}
              src="./images/image05.jpg"
              width={140}
              height={220}
            ></img>
          </div>

          <div className="d-flex pt-3">
            <img
              style={{
                borderRadius: "10px",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.6)",
              }}
              className="me-2 "
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-delay="1600"
              data-aos-once="true"
              src="./images/image06.jpg"
              width={140}
              height={180}
            ></img>
            <img
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="1600"
              data-aos-once="true"
              style={{
                borderRadius: "10px",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.6)",
              }}
              src="./images/image07.jpg"
              width={140}
              height={220}
            ></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Imagesection;
