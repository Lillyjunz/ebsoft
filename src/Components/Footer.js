import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="custom-shape-divider-top-1712638887">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      <div className="row pt-5 pb-4 text-light bg-black">
        <div className="col-lg-4 col-md-6 ps-5">
          <NavLink to="/">
            <img src="../images/ebslogo.png" width={210} height={120}></img>
          </NavLink>
        </div>
        <div className="col-lg-2 col-md-6">
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
        <div className="col-lg-3 col-md-6 ">
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
        <div className="col-lg-3 col-md-6">
          <h4 className="fw-bold"> Contact</h4>
          <li style={{ listStyleType: "none" }}>Phone: +3456 67 889</li>
          <li style={{ listStyleType: "none" }}>Email: okey@gmail.com</li>
        </div>
        <p
          className="mt-5 pt-4 text-center"
          style={{ borderTop: "2px solid gray", color: "gray" }}
        >
          Copyright All right reserved
        </p>
      </div>
    </>
  );
};

export default Footer;
