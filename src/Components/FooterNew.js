import { NavLink } from "react-router-dom";
const Footernew = () => {
  return (
    <>
      <footer className="footer">
        <div class="custom-shape-divider-top-1713650972">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
        <div className="containerr">
          <div className="column first text-start align-items-center justify-content-center">
            <NavLink to="/">
              <img src="../images/ebslogo.png" width={140} height={100}></img>
            </NavLink>
            <h6
              className="te"
              style={{
                color: "gray",
                paddingBottom: "3px",
              }}
            >
              Excellence Brilliance Software Technologies.
            </h6>
            <div
              style={{
                height: "1px",
                background: "gray",
                marginBottom: "3px",
                width: "84%",
              }}
            ></div>
            <small style={{ color: "gray" }}>
              Visualize.Design.Build.Deliver
            </small>
          </div>
          <div className="column">
            <h4 className="fw-bold">Company</h4>
            <li style={{ listStyleType: "none" }}>Success stories</li>
            <NavLink to="/about">
              <li style={{ listStyleType: "none" }}>About us</li>
            </NavLink>
            <li style={{ listStyleType: "none" }}>Our Team</li>
            <NavLink to="/join">
              <li style={{ listStyleType: "none" }}>Join us</li>
            </NavLink>
            <NavLink to="/privacy">
              <li style={{ listStyleType: "none" }}>Privacy policy</li>
            </NavLink>
          </div>
          <div className="column">
            <h4 className="fw-bold">Services</h4>
            <li style={{ listStyleType: "none" }}>UI/UX design development</li>
            <li style={{ listStyleType: "none" }}>
              Software and web development
            </li>
            <li style={{ listStyleType: "none" }}>
              Difital cloud transformation
            </li>
            <li style={{ listStyleType: "none" }}>
              Cloud infrastructure services
            </li>
            <li style={{ listStyleType: "none" }}>Tech hiring services</li>
          </div>
          <div className="column">
            <h4 className="fw-bold"> Contact</h4>
            <li style={{ listStyleType: "none" }}>Phone: +3456 67 889</li>
            <li style={{ listStyleType: "none" }}>Email: okey@gmail.com</li>
          </div>
        </div>
        <div
          style={{ height: "1px", background: "gray", marginBottom: "40px" }}
        ></div>
        <p className="text-center opp">Copyright All right reserved</p>
      </footer>
    </>
  );
};

export default Footernew;
