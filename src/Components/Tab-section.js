import { NavLink } from "react-router-dom";

const Tab = () => {
  return (
    <>
      <ul
        class="nav nav-pills mt-5 p-3 ps-5 pe-5 ms-3 me-3 mb-3 "
        id="myTab"
        role="tablist"
        style={{ borderBottom: "2px solid gray" }}
      >
        <li class="nav-item pe-5" role="presentation">
          <button
            class="nav-link active text-black fw-bold "
            id="home-tab"
            data-bs-toggle="tab"
            data-bs-target="#home-tab-pane"
            type="button"
            role="tab"
            aria-controls="home-tab-pane"
            aria-selected="true"
          >
            Services
          </button>
        </li>
        <li class="nav-item pe-5" role="presentation">
          <button
            class="nav-link text-black fw-bold"
            id="profile-tab"
            data-bs-toggle="tab"
            data-bs-target="#profile-tab-pane"
            type="button"
            role="tab"
            aria-controls="profile-tab-pane"
            aria-selected="false"
          >
            Engagement Models
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link text-black fw-bold"
            id="contact-tab"
            data-bs-toggle="tab"
            data-bs-target="#contact-tab-pane"
            type="button"
            role="tab"
            aria-controls="contact-tab-pane"
            aria-selected="false"
          >
            Industries
          </button>
        </li>
      </ul>
      <div class="tab-content ps-4" id="myTabContent">
        <div
          class="tab-pane fade show active"
          id="home-tab-pane"
          role="tabpanel"
          aria-labelledby="home-tab"
          tabindex="0"
        >
          <div className="p-3">
            <div className="row " style={{ marginBottom: "100px" }}>
              <div className="col-lg-4">
                <h3 className="fw-bold pb-2">
                  Software and Mobile<br></br> Development
                </h3>
                <p className="pt-3 pb-3" style={{ maxWidth: "90%" }}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et
                  magni magnam illo quia quae perspiciatis ab exercitationem
                  reiciendis nemo odio cumque dolorem, voluptatem quisquam
                  necessitatibus eos culpa repellat at dicta!
                </p>
                <NavLink to="/detail">
                  <button className="btn btn-outline-primary">Read More</button>
                </NavLink>
              </div>

              <div className="col-lg-4">
                <h3 className="fw-bold pb-2">
                  UI/UX and Web<br></br> Development
                </h3>
                <p className="pt-3 pb-3" style={{ maxWidth: "90%" }}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et
                  magni magnam illo quia quae perspiciatis ab exercitationem
                  reiciendis nemo odio cumque dolorem, voluptatem quisquam
                  necessitatibus eos culpa repellat at dicta!
                </p>
                <NavLink to="/detail">
                  <button className="btn btn-outline-primary">Read More</button>
                </NavLink>
              </div>
              <div className="col-lg-4">
                <h3 className="fw-bold pb-2">
                  Cloud Infrastructure <br></br> Services
                </h3>
                <p className="pt-3 pb-3" style={{ maxWidth: "90%" }}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et
                  magni magnam illo quia quae perspiciatis ab exercitationem
                  reiciendis nemo odio cumque dolorem, voluptatem quisquam
                  necessitatibus eos culpa repellat at dicta!
                </p>
                <NavLink to="/detail">
                  <button className="btn btn-outline-primary">Read More</button>
                </NavLink>
              </div>
              <div className="col-lg-4 pt-5">
                <h3 className="fw-bold pb-2">
                  Digital Cloud <br></br>Transformation
                </h3>
                <p className="pt-3 pb-3" style={{ maxWidth: "90%" }}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et
                  magni magnam illo quia quae perspiciatis ab exercitationem
                  reiciendis nemo odio cumque dolorem, voluptatem quisquam
                  necessitatibus eos culpa repellat at dicta!
                </p>
                <NavLink to="/detail">
                  <button className="btn btn-outline-primary">Read More</button>
                </NavLink>
              </div>
              <div className="col-lg-4 pt-5">
                <h3 className="fw-bold pb-2">
                  Tech Hiring <br></br> Services
                </h3>
                <p className="pt-3 pb-3" style={{ maxWidth: "90%" }}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et
                  magni magnam illo quia quae perspiciatis ab exercitationem
                  reiciendis nemo odio cumque dolorem, voluptatem quisquam
                  necessitatibus eos culpa repellat at dicta!
                </p>
                <NavLink to="/detail">
                  <button className="btn btn-outline-primary">Read More</button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="profile-tab-pane"
          role="tabpanel"
          aria-labelledby="profile-tab"
          tabindex="0"
        >
          <div className="row ps-4 pe-2 " style={{ marginBottom: "160px" }}>
            <div className="col-lg-6">
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

            <div className="col-lg-6">
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
          class="tab-pane fade"
          id="contact-tab-pane"
          role="tabpanel"
          aria-labelledby="contact-tab"
          tabindex="0"
        >
          <div className="row ps-3" style={{ marginBottom: "100px" }}>
            <div className="col-lg-4">
              <h3 className="fw-bold pb-2">Public Governance</h3>
              <p className="pt-3 pb-3" style={{ maxWidth: "90%" }}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et
                magni magnam illo quia quae perspiciatis ab exercitationem
              </p>
            </div>

            <div className="col-lg-4">
              <h3 className="fw-bold pb-2">Health Care</h3>
              <p className="pt-3 pb-3" style={{ maxWidth: "90%" }}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et
                magni magnam illo quia quae perspiciatis ab exercitationem
              </p>
            </div>
            <div className="col-lg-4">
              <h3 className="fw-bold pb-2">Retail and Commerce</h3>
              <p className="pt-3 pb-3" style={{ maxWidth: "90%" }}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et
                magni magnam illo quia quae perspiciatis ab exercitationem
              </p>
            </div>
            <div className="col-lg-4 pt-5">
              <h3 className="fw-bold pb-2">Logistics</h3>
              <p className="pt-3 pb-3" style={{ maxWidth: "90%" }}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et
                magni magnam illo quia quae perspiciatis ab exercitationem
              </p>
            </div>
            <div className="col-lg-4 pt-5">
              <h3 className="fw-bold pb-2">Media</h3>
              <p className="pt-3 pb-3" style={{ maxWidth: "90%" }}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et
                magni magnam illo quia quae perspiciatis ab exercitationem
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tab;
