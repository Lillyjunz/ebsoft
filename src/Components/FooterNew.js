import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

const Footernew = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
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
            <NavLink to="/">
              <img
                className="pb-2"
                src="../images/whitelogo.png"
                width={130}
                height={40}
                alt="Logo"
              />
            </NavLink>
            <h6 className="te">Excellence Brilliance Software Technologies.</h6>
            <div className="footer-divider"></div>
            <small>Visualize.Design.Build.Deliver</small>
          </div>

          <div className="footer-column">
            <h4 className="fw-bold">Company</h4>
            <ul>
              <li>
                <a href="/detail#success">Success stories</a>
              </li>
              <li>
                <a href="/about">About us</a>
              </li>
              <li>
                <a href="/about#team">Our Team</a>
              </li>
              <li>
                <a href="/join">Join us</a>
              </li>
              <li>
                <a href="/privacy">Privacy policy</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="fw-bold">Services</h4>
            <ul>
              <li>
                <a href="/detail#section1">UI/UX & Web development</a>
              </li>
              <li>
                <a href="/detail#section2">Software & Mobile Development</a>
              </li>
              <li>
                <a href="/detail#section4">Cloud Infrastructure</a>
              </li>
              <li>
                <a href="/detail#section3">Digital Cloud Transformation</a>
              </li>
              <li>
                <a href="/detail#section5">Tech hiring services</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="fw-bold">Contact</h4>
            <ul>
              <li>
                <i class="bi bi-telephone text-success"></i>&nbsp;&nbsp;+234 813
                698 3200
              </li>
              <li>
                <i class="bi bi-telephone text-success"></i>&nbsp;&nbsp;+234 703
                593 8322
              </li>
              <li>
                <i class="bi bi-telephone text-success"></i>&nbsp;&nbsp;+234 810
                465 6502
              </li>
              <li>
                <i class="bi bi-envelope text-success"></i>&nbsp;Email: chatwithebsoft@gmail.com
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
    </>
  );
};

export default Footernew;
