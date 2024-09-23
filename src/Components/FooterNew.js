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
            {/* <use xlink:href="#gentle-wave" x="48" y="0" fill="#006400" /> */}
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
      <footer>
        <div className="containerr ">
          <div className="column first ">
            <div className="footr text-center">
              <NavLink to="/">
                <img
                  className="pb-2"
                  src="../images/whitelogo.png"
                  width={130}
                  height={40}
                ></img>
              </NavLink>
              <h6
                className="te"
                style={{
                  color: "gray",
                  paddingBottom: "3px",
                }}
              >
                Excellence Brilliance Software<br></br> Technologies.
              </h6>
              <div
                style={{
                  height: "2px",
                  background: "gray",
                  marginBottom: "3px",
                  width: "100%",
                }}
              ></div>
              <small style={{ color: "gray" }}>
                Visualize.Design.Build.Deliver
              </small>
            </div>
          </div>
          <div className="column ">
            <h4 className="fw-bold">Company</h4>
            <a href="/about">
              <li className="coll" style={{ listStyleType: "none" }}>
                Success stories
              </li>
            </a>
            <a href="/about">
              <li className="coll" style={{ listStyleType: "none" }}>
                About us
              </li>
            </a>
            <a href="/about">
              <li className="coll" style={{ listStyleType: "none" }}>
                Our Team
              </li>
            </a>
            <a href="/join">
              <li className="coll" style={{ listStyleType: "none" }}>
                Join us
              </li>
            </a>
            <a href="/privacy">
              <li className="coll" style={{ listStyleType: "none" }}>
                Privacy policy
              </li>
            </a>
          </div>
          <div className="column co-serve">
            <h4 className="fw-bold">Services</h4>
            <a href="/detail">
              <li className="coll" style={{ listStyleType: "none" }}>
                UI/UX development
              </li>
            </a>
            <a href="/detail">
              <li className="coll" style={{ listStyleType: "none" }}>
                Software
              </li>
            </a>
            <a href="/detail">
              {" "}
              <li className="coll" style={{ listStyleType: "none" }}>
                Digital transformation
              </li>
            </a>
            <a href="/detail">
              <li className="coll" style={{ listStyleType: "none" }}>
                Cloud infrastructure
              </li>
            </a>
            <a href="/detail">
              {" "}
              <li className="coll" style={{ listStyleType: "none" }}>
                Tech hiring services
              </li>
            </a>
          </div>
          <div className="column co-cont">
            <h4 className="fw-bold"> Contact</h4>
            <li style={{ listStyleType: "none" }}>Phone: +234 813 698 3200</li>
            <li style={{ listStyleType: "none" }}>
              Email: chatwithebsoft@gmail.com
            </li>
          </div>
        </div>
        <div
          style={{
            height: "1px",
            background: "gray",
            marginBottom: "40px",
            marginTop: "40px",
          }}
        ></div>
        <p className="text-center opp">Copyright All right reserved</p>
      </footer>
    </>
  );
};

export default Footernew;
