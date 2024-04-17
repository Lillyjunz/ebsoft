import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import SwiperContact from "../Components/slide";

const Contact = () => {
  return (
    <>
      <Navbar />

      <div classNameName="d-flex justify-content-between ">
        <div
          style={{
            width: "800px",
            marginRight: "20px",
            marginLeft: "40px",
            marginTop: "20px",
          }}
        >
          <h3>Contact Us</h3>
          <li classNameName="mb-5" style={{ listStyleType: "none" }}>
            Ebsoft would like to know how we may help
          </li>
          <div classNameName="row">
            <div classNameName="col-6">
              <div className="mb-3">
                <input
                  type="name"
                  className="form-control"
                  id="firstname"
                  placeholder="Firstname"
                  style={{ background: "#f1f1f1" }}
                />
              </div>
            </div>
            <div classNameName="col-6">
              <div className="mb-3">
                <input
                  type="name"
                  className="form-control"
                  id="lastname"
                  placeholder="Lastname"
                  style={{ background: "#f1f1f1" }}
                />
              </div>
            </div>

            <div classNameName="col-6">
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="name@example.com"
                  style={{ background: "#f1f1f1" }}
                />
              </div>
            </div>

            <div classNameName="col-6">
              <div className="mb-3">
                <input
                  type="number"
                  className="form-control"
                  id="number"
                  placeholder="Phone number"
                  style={{ background: "#f1f1f1" }}
                />
              </div>
            </div>

            <div classNameName="col-12">
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Subject"
                  style={{ background: "#f1f1f1" }}
                />
              </div>
            </div>
          </div>
          <div classNameName="mb-3">
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              placeholder="Your message"
              rows="3"
              style={{ background: "#f1f1f1" }}
            ></textarea>
          </div>
          <div classNameName="col-12 mb-5 py-2">
            <select
              className="form-select py-3"
              aria-label="Default select example"
              style={{ background: "#f1f1f1", color: "black" }}
            >
              <option selected>Engagement model</option>
              <option value="1">Complete End-to-End Development</option>
              <option value="2">Partial End-to-End Development</option>
              <option value="3">Unsure</option>
            </select>
          </div>
          <div classNameName="d-flex justify-content-between align-items-center">
            <div classNameName="text-primary">I'm not a robot</div>
            <button classNameName="btn btn-success p-2 ps-3 pe-3">
              Submit
            </button>
          </div>
        </div>

        <div style={{ backgroundColor: "#89E0AE", width: "800px" }}>
          <div style={{ margin: "30% 10%" }}>
            <i className="bi bi-star-fill text-warning "></i>
            <i className="bi bi-star-fill text-warning"></i>
            <i className="bi bi-star-fill text-warning"></i>
            <i className="bi bi-star-fill text-warning"></i>
            <i className="bi bi-star-fill text-warning"></i>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
              alias saepe dolor architecto. Veniam maiores ipsa, ut nam dicta
              cumque labore minus soluta illum laborum animi pariatur deserunt
              mollitia commodi.
            </p>
            <p>Jogn Jackson</p>
            Head of Department
          </div>
        </div>
      </div>

      <div
        style={{
          backgroundColor: "#89E0AE",
          padding: "50px",
          width: "900px",
          textAlign: "center",
          marginLeft: "20%",
          marginTop: "120px",
          borderRadius: "10px",
          marginBottom: "140px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.6)",
        }}
      >
        <SwiperContact></SwiperContact>
      </div>

      <Footer></Footer>
    </>
  );
};

export default Contact;
