import { NavLink } from "react-router-dom";

const Imagesection = () => {
  return (
    <>
      <div className="d-flex im-sect justify-content-between container mt-5 align-items-center">
        <div className="co">
          <div className="align-items-center">
            <h1 className="fw-bold">We are Hiring</h1>
            <p className="p-1">
              Find out about open vacancies in our company and join our team
            </p>
            <NavLink to="/join">
              <button className="btn btn-success">Join our Team</button>
            </NavLink>
          </div>
        </div>

        <div className="coo " style={{ width: "420px" }}>
          <div className="d-flex">
            <img
              style={{
                borderRadius: "10px",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.6)",
                marginTop: "40px",
              }}
              className="me-2 "
              src="./images/image08.jpg"
              width={140}
              height={180}
            ></img>
            <img
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
              className="me-2"
              src="./images/image06.jpg"
              width={140}
              height={180}
            ></img>
            <img
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
