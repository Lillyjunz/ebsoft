import React from "react";
import { NavLink } from "react-router-dom";

const Notworking = () => {
  return (
    <>
      {/* navbar */}
      <nav className="navbar sticky-top">
        <div
          className="container align-items-center"
          style={{ padding: "13px" }}
        >
          <div
            className="nav-img"
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-delay="500"
            data-aos-once="true"
          >
            <NavLink to="/">
              <img
                className=" img-fluid"
                style={{ padding: "0", margin: "0" }}
                src="../images/whitelogo.png"
              ></img>
            </NavLink>
          </div>

          <button
            className="btn btn-success fw-bold pe-3 ps-3"
            style={{ letterSpacing: "0.01em" }}
            type="submit"
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-delay="500"
            data-aos-once="true"
          >
            Contact
          </button>
        </div>
      </nav>
      {/* nav end */}

      <div className="center-screen">
        <h4 className="fw-bold text-center mb-5">
          "This website is under optimisation and maintenance..."
        </h4>
        <span>
          <b>Signed:</b> ebsoFT team.
        </span>
      </div>

      {/* footer */}
      <div className="fooot">
        <svg
          className="waves"
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
          <g className="parallax">
            <use xlinkHref="#gentle-wave" x={48} y={3} fill="#006400" />
            <use
              xlinkHref="#gentle-wave"
              x={48}
              y={5}
              fill="rgba(0, 100, 0, 0.5)"
            />
            <use xlinkHref="#gentle-wave" x={48} y={7} fill="#000" />
          </g>
        </svg>
      </div>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-column first-column">
            <div>
              <img
                className="pb-2"
                src="../images/whitelogo.png"
                width={130}
                height={40}
                alt="Logo"
              />
            </div>
            <h6 className="te">Excellence Brilliance Software Technologies.</h6>
            <div className="footer-divider"></div>
            <small>Visualize.Design.Build.Deliver</small>
          </div>

          <div className="footer-column">
            <h4 className="fw-bold">Company</h4>
            <ul>
              <li>Success stories</li>
              <li>About us</li>
              <li>Our Team</li>
              <li>Join us</li>
              <li>Privacy policy</li>
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="fw-bold">Services</h4>
            <ul>
              <li>UI/UX & Web development</li>
              <li>Software & Mobile Development</li>
              <li>Cloud Infrastructure</li>
              <li>Digital Cloud Transformation</li>
              <li>Tech hiring services</li>
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="fw-bold">Contact</h4>
            <ul>
              <li>
                <i className="bi bi-telephone text-success"></i>&nbsp;&nbsp;+234
                813 698 3200
              </li>
              <li>
                <i className="bi bi-telephone text-success"></i>&nbsp;&nbsp;+234
                703 593 8322
              </li>
              <li>
                <i className="bi bi-telephone text-success"></i>&nbsp;&nbsp;+234
                810 465 6502
              </li>
              <li>
                <i className="bi bi-envelope text-success"></i>&nbsp;Email:
                chatwithebsoft@gmail.com
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-divider"></div>
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p style={{ color: "gray" }}>
              &copy; 2024 Ebsoft. All rights reserved
            </p>
            <div className="social">
              <i className="bi bi-instagram so"></i>
              <i className="bi bi-facebook"></i>
            </div>
          </div>
        </div>
      </footer>

      {/* footer end */}
    </>
  );
};

export default Notworking;
