import "aos/dist/aos.css";
import { useState } from "react";
import SwiperHome from "../Components/Caroo";
import Footernew from "../Components/FooterNew";
import Navbar from "../Components/Navbar";
import axios from "../api/Axios";

const Contact = () => {
  // const [formData, setFormData] = useState({
  //   firstname: "",
  //   lastname: "",
  //   email: "",
  //   phone: "",
  //   subject: "",
  //   message: "",
  //   engagement_model: "",
  // });

  // const [submissionMessage, setSubmissionMessage] = useState("");

  // const handleInputChange = (e) => {
  //   const { id, value } = e.target;
  //   setFormData({ ...formData, [id]: value });
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await axios.post("/api/contact/all/", formData);
  //     console.log("Form submission successful:", response.data);
  //     setSubmissionMessage("Form submitted successfully!");
  //     setFormData({
  //       firstname: "",
  //       lastname: "",
  //       email: "",
  //       phone: "",
  //       subject: "",
  //       message: "",
  //       engagement_model: "",
  //     });
  //   } catch (error) {
  //     console.error("Error submitting form:", error);
  //   }
  // };

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
      const response = await axios.post(
        "/api/contact/all/",
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
    } catch (err) {
      setError(err.message);
    }
  };

  if (error)
    return (
      <div className="alert alert-danger m-3" role="alert">
        {error}
      </div>
    );

  if (data?.status) {
    return (
      <div className="alert alert-success m-3" role="alert">
        We have received your message. You can follow up on your mail.
      </div>
    );
  }

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
              <div className="col-12 mb-5 py-2">
                <select
                  className="form-select py-3"
                  id="engagement_model"
                  value={engagement_model}
                  onChange={(e) => setEngagement_model(e.target.value)}
                  required
                  aria-label="Default select example"
                  style={{ background: "#f1f1f1", color: "black" }}
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
              <div className="d-flex justify-content-between align-items-center">
                <div className="text-primary">I'm not a robot</div>
                <button type="submit" className="btn btn-success p-2 ps-3 pe-3">
                  Submit
                </button>
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
      <SwiperHome></SwiperHome>
      <Footernew></Footernew>
    </div>
  );
};

export default Contact;
