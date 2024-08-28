import { CircularProgress } from "@mui/material";
import { useState } from "react";
import Swal from "sweetalert2";
import SwiperHome from "../Components/Caroo";
import Footernew from "../Components/FooterNew";
import Navbar from "../Components/Navbar";
import axios from "../api/Axios";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [engagement_model, setEngagement_model] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Validation
    if (
      firstname === "" ||
      lastname === "" ||
      phone === "" ||
      email === "" ||
      subject === "" ||
      message === "" ||
      engagement_model === ""
    ) {
      return;
    }

    try {
      const response = await axios.get(
        "/contact/all/",
        JSON.stringify({
          firstname,
          lastname,
          phone,
          email,
          subject,
          message,
          engagement_model,
        }),
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      setData(response);

      // Clear fields
      setFirstname("");
      setLastname("");
      setPhone("");
      setEmail("");
      setSubject("");
      setMessage("");
      setEngagement_model("");

      Swal.fire({
        icon: "success",
        title: "Form Submitted!",
        text: "Your form has been successfully submitted. You can follow up on your email",
      });
    } catch (err) {
      setError(err.message);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong. Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="contact-wrap">
      <Navbar></Navbar>

      <div
        className="d-flex contact-div justify-content-between "
        style={{ paddingBottom: "70px" }}
      >
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

          <div>
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-6">
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="firstname"
                      placeholder="Firstname"
                      value={firstname}
                      onChange={(e) => setFirstname(e.target.value)}
                      required
                      style={{ background: "#f1f1f1" }}
                    />
                  </div>
                </div>
                <div className="col-6">
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="lastname"
                      placeholder="Lastname"
                      value={lastname}
                      onChange={(e) => setLastname(e.target.value)}
                      required
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
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      style={{ background: "#f1f1f1" }}
                    />
                  </div>
                </div>

                <div className="col-6">
                  <div className="mb-3">
                    <input
                      type="tel"
                      className="form-control"
                      id="phone"
                      placeholder="Phone number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      style={{ background: "#f1f1f1" }}
                    />
                  </div>
                </div>

                <div className="col-12">
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="subject"
                      placeholder="Subject"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      required
                      style={{ background: "#f1f1f1" }}
                    />
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <textarea
                  className="form-control"
                  id="message"
                  placeholder="Your message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows="3"
                  style={{ background: "#f1f1f1" }}
                ></textarea>
              </div>
              <div className="mb-5">
                <select
                  className="form-select mb-5 py-3"
                  aria-label="default select example"
                  id="engagement_model"
                  value={engagement_model}
                  onChange={(e) => setEngagement_model(e.target.value)}
                  required
                >
                  <option defaultValue>Engagement model</option>
                  <option value="Complete End-to-End Development">
                    Complete End-to-End Development
                  </option>
                  <option value="Partial End-to-End Development">
                    Partial End-to-End Development
                  </option>
                  <option value="Unsure">Unsure</option>
                </select>
              </div>
              <div className="d-flex justify-content-between align-items-center mt-5">
                <div className="text-primary">I'm not a robot</div>

                {isLoading ? (
                  <CircularProgress /> // Display a Material-UI circular progress indicator
                ) : (
                  <button className="btn btn-success p-2 ps-3 pe-3">
                    Submit
                  </button>
                )}
              </div>
            </form>
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

      <hr className="line" style={{ color: "green" }}></hr>
      <SwiperHome></SwiperHome>
      <Footernew></Footernew>
    </div>
  );
};

export default Contact;
