import { CircularProgress } from "@mui/material";

import {  useState } from "react";
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
  const [pdf_path, setPdf_path] = useState("");
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
  const [contact_me, setContact_me] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (
      fullname === "" ||
      gender === "" ||
      pdf_path === "" ||
      email === "" ||
      current_location === "" ||
      current_company === "" ||
      notice_period === "" ||
      salary_expectation === "" ||
      referral_source === "" ||
      years_of_experience === "" ||
      linkedin_profile === "" ||
      github_profile === "" ||
      portfolio === "" ||
      phone_number === ""
    ) {
      return;
    }

    try {
      const response = await axios.post(
        "/contact/apply/",
        JSON.stringify({
          fullname,
          gender,
          pdf_path,
          email,
          current_location,
          current_company,
          notice_period,
          salary_expectation,
          referral_source,
          years_of_experience,
          linkedin_profile,
          github_profile,
          portfolio,
          phone_number,
          contact_me, // add this line
        }),
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      setData(response);

      // Clear fields
      setFullname("");
      setGender("");
      setPdf_path("");
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
      setContact_me(false); // reset this as well

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
    <div className="app-wrap">
      <Navbar></Navbar>
      <div className="header aboout">
        {/*Content before waves*/}

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
        {/*Waves Container*/}
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
              {/* <use xlink:href="#gentle-wave" x="48" y="0" fill="#006400" /> */}
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
        {/*Waves end*/}
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
                value={pdf_path}
                onChange={(e) => setPdf_path(e.target.value)}
                required
                aria-label="Example text with button addon"
                aria-describedby="button-addon1"
                style={{ background: "#f1f1f1" }}
              />
            </div>

            <div className="mb-3 formm">
              <input
                type="text"
                className="form-control  text-black"
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
                className="form-control  text-black"
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
                className="form-control  text-black"
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
                className="form-control  text-black"
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
                className="form-control  text-black"
                id="company"
                placeholder="Current Company*"
                value={current_company}
                onChange={(e) => setCurrent_company(e.target.value)}
                required
                style={{ background: "#f1f1f1" }}
              />
            </div>

            <div className="form-floating formm mb-3">
              <textarea
                className="form-control"
                placeholder="Leave a comment here"
                value={notice_period}
                onChange={(e) => setNotice_period(e.target.value)}
                required
                id="floatingTextarea2"
                style={{ height: "100px", background: "#f1f1f1" }}
              ></textarea>
              <label htmlFor="floatingTextarea3">
                What's your notice period?*
              </label>
            </div>

            <div className="form-floating formm mb-3">
              <textarea
                className="form-control"
                placeholder="Leave a comment here"
                value={salary_expectation}
                onChange={(e) => setSalary_expectation(e.target.value)}
                required
                id="floatingTextarea2"
                style={{ height: "100px", background: "#f1f1f1" }}
              ></textarea>
              <label htmlFor="floatingTextarea3">
                What's your salary expectation for this role?*
              </label>
            </div>

            <select
              className="form-select formm"
              aria-label="Default select example"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              required
              style={{
                border: "none",
                borderRadius: "0",
              }}
            >
              <option value="default">Gender</option>
              <option value="1">Male</option>
              <option value="2">Female</option>
            </select>
          </div>

          <div style={{ marginTop: "100px" }}>
            <h4 className="fw-bold">Screening Questions</h4>
            <p className="mb-4">How did you hear about Ebsoft</p>

            <li>
              <div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="linkedin"
                    name="referralSource"
                    value="On Linkedln"
                    checked={referral_source === "On Linkedln"}
                    onChange={(e) => setReferral_source(e.target.value)}
                  />
                  <label className="form-check-label" htmlFor="linkedin">
                    On Linkedln
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
                    I saw an article about ebsofT in the news/social media
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
                    At an event (eg. conferences, meetup, hackathon, etc.)
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
              </div>
            </li>

            <li>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  id="lessThanYear"
                  name="experience"
                  value="Less than a year"
                  onChange={(e) => setYears_of_experience(e.target.value)}
                />
                <label className="form-check-label" htmlFor="lessThanYear">
                  Less than a year
                </label>
              </div>
              {/* Repeat the same pattern for other options */}
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  id="1To2Years"
                  name="experience"
                  value="1-2 years"
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
                  onChange={(e) => setYears_of_experience(e.target.value)}
                />
                <label className="form-check-label" htmlFor="over5Years">
                  Over 5 years
                </label>
              </div>
            </li>
          </div>

          <div style={{ marginTop: "100px" }}>
            <h4 className="fw-bold pb-3">LINKS</h4>
            <div className="mb-3 formm">
              <input
                type="text"
                className="form-control  text-black"
                id="linkedin"
                placeholder="Linkedin URL*"
                value={linkedin_profile}
                onChange={(e) => setLinkedin_profile(e.target.value)}
                required
                style={{ background: "#f1f1f1" }}
              />
            </div>
            <div className="mb-3 formm">
              <input
                type="text"
                className="form-control  text-black"
                id="github"
                placeholder="Github URL*"
                value={github_profile}
                onChange={(e) => setGithub_profile(e.target.value)}
                required
                style={{ background: "#f1f1f1" }}
              />
            </div>
            <div className="mb-5 formm">
              <input
                type="text"
                className="form-control  text-black"
                id="portfolio"
                placeholder="Portfolio URL*"
                value={portfolio}
                onChange={(e) => setPortfolio(e.target.value)}
                required
                style={{ background: "#f1f1f1" }}
              />
            </div>
          </div>

          <div className="form-check mt-5">
            <input
              className="form-check-input"
              type="checkbox"
              id="flexCheckChecked"
              checked={contact_me}
              onChange={(e) => setContact_me(e.target.checked)}
            />
            <label className="form-check-label" htmlFor="flexCheckChecked">
              Yes, ebsofT can contact me for future job opportunities for up to
              6 months
            </label>
          </div>

          {isLoading ? (
            <CircularProgress /> // Display a Material-UI circular progress indicator
          ) : (
            <button className="btn btn-success mt-5">Submit</button>
          )}
        </form>
      </div>
      <Footernew></Footernew>
    </div>
  );
};

export default Application;
