import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Footernew from "../Components/FooterNew";
import Navbar from "../Components/Navbar";

const Application = () => {
  useEffect(() => {
    AOS.init();

    AOS.refresh();
  }, []);
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
        <form action="">
          <div class="input-group mb-3 form-first">
            <button
              type="button"
              id="button-addon1"
              style={{ background: "f1f1f1", border: "none" }}
            >
              <i class="bi bi-paperclip ps-2"></i>
            </button>
            <input
              type="text"
              class="form-control"
              placeholder="Attach Resume/CV*"
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
              style={{ background: "#f1f1f1" }}
            />
          </div>

          <div className="mb-3 formm">
            <input
              type="text"
              className="form-control  text-black"
              id="email"
              placeholder="Email*"
              style={{ background: "#f1f1f1" }}
            />
          </div>

          <div className="mb-3 formm">
            <input
              type="text"
              className="form-control  text-black"
              id="phone"
              placeholder="Phone number*"
              style={{ background: "#f1f1f1" }}
            />
          </div>

          <div className="mb-3 formm">
            <input
              type="text"
              className="form-control  text-black"
              id="location"
              placeholder="Current Location*"
              style={{ background: "#f1f1f1" }}
            />
          </div>

          <div className="mb-3 formm">
            <input
              type="text"
              className="form-control  text-black"
              id="company"
              placeholder="Current Company*"
              style={{ background: "#f1f1f1" }}
            />
          </div>

          <div class="form-floating formm mb-3">
            <textarea
              class="form-control"
              placeholder="Leave a comment here"
              id="floatingTextarea2"
              style={{ height: "100px", background: "#f1f1f1" }}
            ></textarea>
            <label for="floatingTextarea3">What's your notice period?*</label>
          </div>

          <div class="form-floating formm mb-3">
            <textarea
              class="form-control"
              placeholder="Leave a comment here"
              id="floatingTextarea2"
              style={{ height: "100px", background: "#f1f1f1" }}
            ></textarea>
            <label for="floatingTextarea3">
              What's your salary expectation for this role?*
            </label>
          </div>

          <select
            className="form-select formm"
            aria-label="Default select example"
            style={{
              background: "#f1f1f1",
              border: "none",
              borderRadius: "0",
            }}
          >
            <option selected>Gender</option>
            <option value="1">Male</option>
            <option value="2">Female</option>
          </select>
        </form>

        <div style={{ marginTop: "100px" }}>
          <h4 className="fw-bold">Screening Questions</h4>
          <p className="mb-4">How did you hear about Ebsoft</p>

          <li>
            <div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  On Linkedln
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="flexCheckChecked"
                />
                <label className="form-check-label" htmlFor="flexCheckChecked">
                  A friend/colleague recommended it
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="flexCheckChecked"
                />
                <label className="form-check-label" htmlFor="flexCheckChecked">
                  I have been approached by a recruiter
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="flexCheckChecked"
                />
                <label className="form-check-label" htmlFor="flexCheckChecked">
                  I saw an article about ebsofT in the news/social media
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="flexCheckChecked"
                />
                <label className="form-check-label" htmlFor="flexCheckChecked">
                  I have seen an ad
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="flexCheckChecked"
                />
                <label className="form-check-label" htmlFor="flexCheckChecked">
                  At an event (eg. conferences, meetup, hackathon, etc.)
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="flexCheckChecked"
                />
                <label className="form-check-label" htmlFor="flexCheckChecked">
                  Others
                </label>
              </div>

              <p className="mt-5">
                How many years of relevant experience do you have?
              </p>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Less than a year
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                1-2 years
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                3-5 years
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
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
              id="fullname"
              placeholder="Linkedin URL*"
              style={{ background: "#f1f1f1" }}
            />
          </div>
          <div className="mb-3 formm">
            <input
              type="text"
              className="form-control  text-black"
              id="fullname"
              placeholder="Github URL*"
              style={{ background: "#f1f1f1" }}
            />
          </div>
          <div className="mb-5 formm">
            <input
              type="text"
              className="form-control  text-black"
              id="fullname"
              placeholder="Portfolio URL*"
              style={{ background: "#f1f1f1" }}
            />
          </div>
        </div>

        <div className="form-check mt-5">
          <input
            className="form-check-input"
            type="checkbox"
            id="flexCheckChecked"
          />
          <label className="form-check-label" htmlFor="flexCheckChecked">
            Yes, ebsofT can contact me for future job opportunities for up to 6
            months
          </label>
        </div>

        <button className="btn btn-success mt-5" type="submit">
          Submit
        </button>
      </div>
      <Footernew></Footernew>
    </div>
  );
};

export default Application;
