import { CircularProgress } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Footernew from "../Components/FooterNew";
import Navbar from "../Components/Navbar";
import axios from "../api/Axios";

const Application = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [fullname, setFullname] = useState("");
  const [gender, setGender] = useState("");
  const [file, setFile] = useState(null);
  const [email, setEmail] = useState("");
  const [current_location, setCurrent_location] = useState("");
  const [current_company, setCurrent_company] = useState("");
  const [notice_period, setNotice_period] = useState("");
  const [salary_expectation, setSalary_expectation] = useState("");
  const [referral_source, setReferral_source] = useState("");
  const [years_of_experience, setYears_of_experience] = useState("");
  const [linkedin_profile, setLinkedin_profile] = useState("");
  const [github_profile, setGithub_profile] = useState("");
  const [portfolio, setPortfolio] = useState("");
  const [phone_number, setPhone_number] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Validation
    if (
      !fullname ||
      !gender ||
      !file ||
      !email ||
      !current_location ||
      !current_company ||
      !notice_period ||
      !salary_expectation ||
      !referral_source ||
      !years_of_experience ||
      !linkedin_profile ||
      !github_profile ||
      !portfolio ||
      !phone_number
    ) {
      Swal.fire({
        icon: "error",
        title: "Validation Error",
        text: "Please fill out all required fields.",
      });
      setIsLoading(false);
      return;
    }

    try {
      const formData = new FormData();
      formData.append("fullname", fullname);
      formData.append("gender", gender);
      formData.append("pdf_path", file);
      formData.append("email", email);
      formData.append("current_location", current_location);
      formData.append("current_company", current_company);
      formData.append("notice_period", notice_period);
      formData.append("salary_expectation", salary_expectation);
      formData.append("referral_source", referral_source);
      formData.append("years_of_experience", years_of_experience);
      formData.append("linkedin_profile", linkedin_profile);
      formData.append("github_profile", github_profile);
      formData.append("portfolio", portfolio);
      formData.append("phone_number", phone_number);

      const response = await axios.post("/contact/apply/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setData(response.data);

      // Clear fields
      setFullname("");
      setGender("");
      setFile(null);
      setEmail("");
      setCurrent_location("");
      setCurrent_company("");
      setNotice_period("");
      setSalary_expectation("");
      setReferral_source("");
      setYears_of_experience("");
      setLinkedin_profile("");
      setGithub_profile("");
      setPortfolio("");
      setPhone_number("");

      Swal.fire({
        icon: "success",
        title: "Form Submitted!",
        text: "Your form has been successfully submitted. You can follow up on your email",
      });
    } catch (err) {
      console.error(err);
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

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="app-wrap">
      <Navbar />
      <div className="header aboout">
        <div className="contenti text-start">
          <h3
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-delay="500"
            data-aos-once="true"
          >
            Application Form
          </h3>
          <p
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="500"
            data-aos-once="true"
          >
            Lorem ipsum dolor sit amet i consectetur adipisicing elit.
            Temporibus cupiditate molestias asperiores assumenda hic impedit
            asperiores
          </p>
        </div>
        <img
          className="img-fluid rounded-circle "
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="500"
          data-aos-once="true"
          src="/images/image2.jpg"
        />
        <div>
          <svg
            className="wavs"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
            shapeRendering="auto"
          >
            <defs>
              <path
                id="gentle-wave"
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
              />
            </defs>
            <g className="paralax">
              <use xlinkHref="#gentle-wave" x={48} y={3} fill="#006400" />
              <use
                xlinkHref="#gentle-wave"
                x={48}
                y={5}
                fill="rgba(255,255,255,0.3)"
              />
              <use xlinkHref="#gentle-wave" x={48} y={7} fill="#fff" />
            </g>
          </svg>
        </div>
      </div>

      <div className="container app-form">
        <form onSubmit={handleSubmit}>
          <div>
            <div className="input-group mb-3 form-first">
              <button
                type="button"
                id="button-addon1"
                style={{ background: "f1f1f1", border: "none" }}
              >
                <i className="bi bi-paperclip ps-2"></i> &nbsp; Attach
                Resume/CV* &nbsp;
              </button>
              <input
                type="file"
                name="pdf"
                className="form-control"
                onChange={handleFileChange}
                required
                aria-label="Example text with button addon"
                aria-describedby="button-addon1"
                style={{ background: "#f1f1f1" }}
              />
            </div>

            <div className="mb-3 formm">
              <input
                type="text"
                className="form-control text-black"
                id="fullname"
                placeholder="Full Name*"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
                required
                style={{ background: "#f1f1f1" }}
              />
            </div>

            <div className="mb-3 formm">
              <input
                type="text"
                className="form-control text-black"
                id="email"
                placeholder="Email*"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{ background: "#f1f1f1" }}
              />
            </div>

            <div className="mb-3 formm">
              <input
                type="text"
                className="form-control text-black"
                id="phone"
                placeholder="Phone number*"
                value={phone_number}
                onChange={(e) => setPhone_number(e.target.value)}
                required
                style={{ background: "#f1f1f1" }}
              />
            </div>

            <div className="mb-3 formm">
              <input
                type="text"
                className="form-control text-black"
                id="location"
                placeholder="Current Location*"
                value={current_location}
                onChange={(e) => setCurrent_location(e.target.value)}
                required
                style={{ background: "#f1f1f1" }}
              />
            </div>

            <div className="mb-3 formm">
              <input
                type="text"
                className="form-control text-black"
                id="company"
                placeholder="Current Company*"
                value={current_company}
                onChange={(e) => setCurrent_company(e.target.value)}
                required
                style={{ background: "#f1f1f1" }}
              />
            </div>

            <div className="mb-3 formm">
              <input
                type="text"
                className="form-control text-black"
                id="notice-period"
                placeholder="Notice Period*"
                value={notice_period}
                onChange={(e) => setNotice_period(e.target.value)}
                required
                style={{ background: "#f1f1f1" }}
              />
            </div>

            <div className="mb-3 formm">
              <input
                type="text"
                className="form-control text-black"
                id="salary"
                placeholder="Salary Expectation*"
                value={salary_expectation}
                onChange={(e) => setSalary_expectation(e.target.value)}
                required
                style={{ background: "#f1f1f1" }}
              />
            </div>

            <div className="mb-3 formm">
              <div style={{ marginTop: "100px" }}>
                <h4 className="fw-bold">Screening Questions</h4>
                <p className="mb-4">How did you hear about Ebsoft?</p>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="linkedin"
                    name="referralSource"
                    value="On LinkedIn"
                    checked={referral_source === "On LinkedIn"}
                    onChange={(e) => setReferral_source(e.target.value)}
                  />
                  <label className="form-check-label" htmlFor="linkedin">
                    On LinkedIn
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="friend"
                    name="referralSource"
                    value="friend"
                    checked={referral_source === "friend"}
                    onChange={(e) => setReferral_source(e.target.value)}
                  />
                  <label className="form-check-label" htmlFor="friend">
                    A friend/colleague recommended it
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="approach"
                    name="referralSource"
                    value="approach"
                    checked={referral_source === "approach"}
                    onChange={(e) => setReferral_source(e.target.value)}
                  />
                  <label className="form-check-label" htmlFor="approach">
                    I have been approached by a recruiter
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="article"
                    name="referralSource"
                    value="article"
                    checked={referral_source === "article"}
                    onChange={(e) => setReferral_source(e.target.value)}
                  />
                  <label className="form-check-label" htmlFor="article">
                    I saw an article about Ebsoft in the news/social media
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="ad"
                    name="referralSource"
                    value="ad"
                    checked={referral_source === "ad"}
                    onChange={(e) => setReferral_source(e.target.value)}
                  />
                  <label className="form-check-label" htmlFor="ad">
                    I have seen an ad
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="event"
                    name="referralSource"
                    value="event"
                    checked={referral_source === "event"}
                    onChange={(e) => setReferral_source(e.target.value)}
                  />
                  <label className="form-check-label" htmlFor="event">
                    At an event (e.g., conferences, meetups, hackathons, etc.)
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="others"
                    name="referralSource"
                    value="others"
                    checked={referral_source === "others"}
                    onChange={(e) => setReferral_source(e.target.value)}
                  />
                  <label className="form-check-label" htmlFor="others">
                    Others
                  </label>
                </div>

                <p className="mt-5">
                  How many years of relevant experience do you have?
                </p>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="lessThanYear"
                    name="experience"
                    value="Less than a year"
                    checked={years_of_experience === "Less than a year"}
                    onChange={(e) => setYears_of_experience(e.target.value)}
                  />
                  <label className="form-check-label" htmlFor="lessThanYear">
                    Less than a year
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="1To2Years"
                    name="experience"
                    value="1-2 years"
                    checked={years_of_experience === "1-2 years"}
                    onChange={(e) => setYears_of_experience(e.target.value)}
                  />
                  <label className="form-check-label" htmlFor="1To2Years">
                    1-2 years
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="3To5Years"
                    name="experience"
                    value="3-5 years"
                    checked={years_of_experience === "3-5 years"}
                    onChange={(e) => setYears_of_experience(e.target.value)}
                  />
                  <label className="form-check-label" htmlFor="3To5Years">
                    3-5 years
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="over5Years"
                    name="experience"
                    value="Over 5 years"
                    checked={years_of_experience === "Over 5 years"}
                    onChange={(e) => setYears_of_experience(e.target.value)}
                  />
                  <label className="form-check-label" htmlFor="over5Years">
                    Over 5 years
                  </label>
                </div>
              </div>
            </div>

            <div className="mb-3 formm">
              <input
                type="text"
                className="form-control text-black"
                id="linkedin"
                placeholder="LinkedIn Profile*"
                value={linkedin_profile}
                onChange={(e) => setLinkedin_profile(e.target.value)}
                required
                style={{ background: "#f1f1f1" }}
              />
            </div>

            <div className="mb-3 formm">
              <input
                type="text"
                className="form-control text-black"
                id="github"
                placeholder="GitHub Profile*"
                value={github_profile}
                onChange={(e) => setGithub_profile(e.target.value)}
                required
                style={{ background: "#f1f1f1" }}
              />
            </div>

            <div className="mb-3 formm">
              <input
                type="text"
                className="form-control text-black"
                id="portfolio"
                placeholder="Portfolio*"
                value={portfolio}
                onChange={(e) => setPortfolio(e.target.value)}
                required
                style={{ background: "#f1f1f1" }}
              />
            </div>

            <div className="mb-3 formm">
              <select
                className="form-control text-black"
                id="gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                required
                style={{ background: "#f1f1f1" }}
              >
                <option value="" disabled>
                  Select Gender*
                </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="mb-3 formm">
              <button
                type="submit"
                className="btn btn-primary"
                disabled={isLoading}
              >
                {isLoading ? <CircularProgress size={24} /> : "Submit"}
              </button>
            </div>
          </div>
        </form>
      </div>
      <Footernew />
    </div>
  );
};

export default Application;
