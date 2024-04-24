import { NavLink } from "react-router-dom";

const Tab = () => {
  return (
    <>
      <div
        className="wow animate__animated animate__fadeInUp tabb container"
        data-wow-duration="1s"
        data-wow-delay="1s"
        style={{ marginTop: "100px", padding: "15px" }}
      >
        <ul
          className="nav nav-pills pb-3 ul-tab"
          id="myTab"
          role="tablist"
          style={{ borderBottom: "2px solid gray" }}
        >
          <li className="nav-item pe-4" role="presentation">
            <button
              className="nav-link active text-black fw-bold "
              id="home-tab"
              data-bs-toggle="tab"
              data-bs-target="#home-tab-pane"
              type="button"
              role="tab"
              aria-controls="home-tab-pane"
              aria-selected="true"
            >
              <h5 className="ser fw-bold">Services</h5>
            </button>
          </li>
          <li className="nav-item li-ind " role="presentation">
            <button
              className="nav-link text-black fw-bold"
              id="profile-tab"
              data-bs-toggle="tab"
              data-bs-target="#profile-tab-pane"
              type="button"
              role="tab"
              aria-controls="profile-tab-pane"
              aria-selected="false"
            >
              <h5 className="eng fw-bold">Industries</h5>
            </button>
          </li>
          <li className="nav-item ps-2" role="presentation">
            <button
              className="nav-link text-black fw-bold "
              id="contact-tab"
              data-bs-toggle="tab"
              data-bs-target="#contact-tab-pane"
              type="button"
              role="tab"
              aria-controls="contact-tab-pane"
              aria-selected="false"
            >
              <h5 className="ind fw-bold"> Engagement Models</h5>
            </button>
          </li>
        </ul>
        <div
          className="tab-content ps-4 container-fluid "
          id="myTabContent"
          style={{
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
            borderRadius: "15px",
            marginTop: "30px",
          }}
        >
          <div
            className="tab-pane fade show active"
            id="home-tab-pane"
            role="tabpanel"
            aria-labelledby="home-tab"
            tabIndex="0"
          >
            <div className="p-1">
              <div className="row " style={{ marginBottom: "100px" }}>
                <div
                  className="col-lg-4 pt-5 wow animate__animated animate__fadeInLeft"
                  data-wow-duration="1s"
                  data-wow-delay="0.5s"
                >
                  <h3 className="fw-bold pb-2">
                    Software and Mobile<br></br> Development
                  </h3>
                  <p className="pt-3 pb-2" style={{ maxWidth: "90%" }}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et
                    magni magnam illo quia quae perspiciatis ab exercitationem
                    reiciendis nemo odio cumque dolorem, voluptatem quisquam
                    necessitatibus eos culpa repellat at dicta!
                  </p>
                  <NavLink to="/detail">
                    <button className="btn btn-outline-success fw-bold">
                      Read More
                    </button>
                  </NavLink>
                </div>

                <div
                  className="col-lg-4 pt-5 wow animate__animated animate__fadeInRight"
                  data-wow-duration="1s"
                  data-wow-delay="0.5s"
                >
                  <h3 className="fw-bold pb-2">
                    UI/UX and Web<br></br> Development
                  </h3>
                  <p className="pt-3 pb-2" style={{ maxWidth: "90%" }}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et
                    magni magnam illo quia quae perspiciatis ab exercitationem
                    reiciendis nemo odio cumque dolorem, voluptatem quisquam
                    necessitatibus eos culpa repellat at dicta!
                  </p>
                  <NavLink to="/detail">
                    <button className="btn btn-outline-success fw-bold fw-bold">
                      Read More
                    </button>
                  </NavLink>
                </div>
                <div
                  className="col-lg-4 pt-5 wow animate__animated animate__fadeInLeft"
                  data-wow-duration="1s"
                  data-wow-delay="0.5s"
                >
                  <h3 className="fw-bold pb-2">
                    Cloud Infrastructure <br></br> Services
                  </h3>
                  <p className="pt-3 pb-2" style={{ maxWidth: "90%" }}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et
                    magni magnam illo quia quae perspiciatis ab exercitationem
                    reiciendis nemo odio cumque dolorem, voluptatem quisquam
                    necessitatibus eos culpa repellat at dicta!
                  </p>
                  <NavLink to="/detail">
                    <button className="btn btn-outline-success fw-bold">
                      Read More
                    </button>
                  </NavLink>
                </div>
                <div
                  className="col-lg-4 pt-5 wow animate__animated animate__fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay="0.5s"
                >
                  <h3 className="fw-bold pb-2">
                    Digital Cloud <br></br>Transformation
                  </h3>
                  <p className="pt-3 pb-2" style={{ maxWidth: "90%" }}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et
                    magni magnam illo quia quae perspiciatis ab exercitationem
                    reiciendis nemo odio cumque dolorem, voluptatem quisquam
                    necessitatibus eos culpa repellat at dicta!
                  </p>
                  <NavLink to="/detail">
                    <button className="btn btn-outline-success fw-bold">
                      Read More
                    </button>
                  </NavLink>
                </div>
                <div
                  className="col-lg-4 pt-5 wow animate__animated animate__fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay="0.5s"
                >
                  <h3 className="fw-bold pb-2">
                    Tech Hiring <br></br> Services
                  </h3>
                  <p className="pt-3 pb-2" style={{ maxWidth: "90%" }}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et
                    magni magnam illo quia quae perspiciatis ab exercitationem
                    reiciendis nemo odio cumque dolorem, voluptatem quisquam
                    necessitatibus eos culpa repellat at dicta!
                  </p>
                  <NavLink to="/detail">
                    <button className="btn btn-outline-success fw-bold">
                      Read More
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="profile-tab-pane"
            role="tabpanel"
            aria-labelledby="profile-tab"
            tabIndex="0"
          >
            <div
              className="row p-1 "
              style={{ marginBottom: "160px", paddingBottom: "200px" }}
            >
              <div className="col-lg-6 pb-3 pt-3 wow animate__animated animate__fadeInLeft">
                <h4 className="fw-bold pb-3">Partial end to end Development</h4>
                <p style={{ maxWidth: "90%" }}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et
                  porro reprehenderit esse quas quis velit consectetur! Mollitia
                  fugit nostrum deleniti veniam ut eveniet, fuga a, sint placeat
                  doloremque, reiciendis adipisci. Illo quas tenetur soluta
                  nesciunt iusto, expedita itaque quaerat tempora numquam illum.
                  Cum voluptas magnam non quidem praesentium consequuntur nulla
                  facilis delectus, exercitationem corrupti sit accusamus?
                  Voluptatem praesentium dignissimos quas!
                </p>
              </div>

              <div className="col-lg-6 pt-3 wow animate__animated animate__fadeInRight">
                <h4 className="fw-bold pb-3">
                  Complete end to end Model Development
                </h4>
                <p style={{ maxWidth: "90%" }}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et
                  porro reprehenderit esse quas quis velit consectetur! Mollitia
                  fugit nostrum deleniti veniam ut eveniet, fuga a, sint placeat
                  doloremque, reiciendis adipisci. Illo quas tenetur soluta
                  nesciunt iusto, expedita itaque quaerat tempora numquam illum.
                  Cum voluptas magnam non quidem praesentium consequuntur nulla
                  facilis delectus, exercitationem corrupti sit accusamus?
                  Voluptatem praesentium dignissimos quas!
                </p>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="contact-tab-pane"
            role="tabpanel"
            aria-labelledby="contact-tab"
            tabIndex="0"
          >
            <div
              className="row p-1"
              style={{ marginBottom: "100px", paddingBottom: "170px" }}
            >
              <div className="col-lg-4 pt-3 wow animate__animated animate__fadeInUp">
                <h3 className="fw-bold pb-2">Public Governance</h3>
                <p className="pt-3 pb-3" style={{ maxWidth: "90%" }}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et
                  magni magnam illo quia quae perspiciatis ab exercitationem
                </p>
              </div>

              <div className="col-lg-4 pt-3 wow animate__animated animate__fadeInUp">
                <h3 className="fw-bold pb-2">Health Care</h3>
                <p className="pt-3 pb-3" style={{ maxWidth: "90%" }}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et
                  magni magnam illo quia quae perspiciatis ab exercitationem
                </p>
              </div>
              <div className="col-lg-4 pt-3 wow animate__animated animate__fadeInUp">
                <h3 className="fw-bold pb-2">Retail and Commerce</h3>
                <p className="pt-3 pb-3" style={{ maxWidth: "90%" }}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et
                  magni magnam illo quia quae perspiciatis ab exercitationem
                </p>
              </div>
              <div className="col-lg-4 pt-3 wow animate__animated animate__fadeInUp">
                <h3 className="fw-bold pb-2">Logistics</h3>
                <p className="pt-3 pb-3" style={{ maxWidth: "90%" }}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et
                  magni magnam illo quia quae perspiciatis ab exercitationem
                </p>
              </div>
              <div className="col-lg-4 pt-3 wow animate__animated animate__fadeInUp">
                <h3 className="fw-bold pb-2">Media</h3>
                <p className="pt-3 pb-3" style={{ maxWidth: "90%" }}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et
                  magni magnam illo quia quae perspiciatis ab exercitationem
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tab;
