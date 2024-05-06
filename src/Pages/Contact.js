import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import SwiperHome from "../Components/Caroo";
import Footernew from "../Components/FooterNew";
import Navbar from "../Components/Navbar";

const Contact = () => {
  useEffect(() => {
    AOS.init();

    AOS.refresh();
  }, []);
  return (
    <div className="contact-wrap">
      <Navbar></Navbar>

      <div className="d-flex contact-div justify-content-between ">
        <div
          style={{
            width: "800px",
            marginRight: "20px",
            marginLeft: "20px",
            marginTop: "20px",
          }}
        >
          <h3>Contact Us</h3>
          <li className="pb-3" style={{ listStyleType: "none" }}>
            Ebsoft would like to know how we may help
          </li>
          <div className="row">
            <div className="col-6">
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
            <div className="col-6">
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

            <div className="col-6">
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

            <div className="col-6">
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

            <div className="col-12">
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
          <div className="mb-3">
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              placeholder="Your message"
              rows="3"
              style={{ background: "#f1f1f1" }}
            ></textarea>
          </div>
          <div className="col-12 mb-5 py-2">
            <select
              className="form-select py-3"
              aria-label="Default select example"
              style={{ background: "#f1f1f1", color: "black" }}
            >
              <option defaultValue>Engagement model</option>
              <option value="1">Complete End-to-End Development</option>
              <option value="2">Partial End-to-End Development</option>
              <option value="3">Unsure</option>
            </select>
          </div>
          <div className="d-flex justify-content-between align-items-center mt-5">
            <div className="text-primary">I'm not a robot</div>
            <button className="btn btn-success p-2 ps-3 pe-3">Submit</button>
          </div>
        </div>

        <div
          className="afterform"
          style={{ backgroundColor: "#89E0AE", width: "800px" }}
        >
          <div style={{ margin: "30% 10%" }}>
            <img style={{ width: "15px" }} src="../images/star.svg" alt="..." />
            <img style={{ width: "15px" }} src="../images/star.svg" alt="..." />
            <img style={{ width: "15px" }} src="../images/star.svg" alt="..." />
            <img style={{ width: "15px" }} src="../images/star.svg" alt="..." />
            <img style={{ width: "15px" }} src="../images/star.svg" alt="..." />
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
      <SwiperHome></SwiperHome>
      <Footernew></Footernew>
    </div>
  );
};

export default Contact;
