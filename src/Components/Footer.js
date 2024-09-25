import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#0099ff"
          fill-opacity="1"
          d="M0,128L48,138.7C96,149,192,171,288,160C384,149,480,107,576,80C672,53,768,43,864,74.7C960,107,1056,181,1152,181.3C1248,181,1344,107,1392,69.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      <div
        className="row pt-5 pb-4 text-light bg-black"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="1500"
        data-aos-once="true"
      >
        <div className="col-lg-4 col-md-6 text-sm-start text-center pb-sm-3 ps-sm-1">
          <NavLink to="/">
            <img src="../images/ebslogo.png" width={230} height={100}></img>
          </NavLink>
        </div>
        <div className="col-lg-2 col-md-6 pb-md-3 ps-sm-3 pb-sm-3">
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
        <div className="col-lg-3 col-md-6 ps-md-3 ps-sm-3 pb-sm-3">
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
        <div className="col-lg-3 col-md-6 ps-sm-3 pb-sm-3">
          <h4 className="fw-bold"> Contact</h4>
          <li style={{ listStyleType: "none" }}>Phone: +3456 67 889</li>
          <li style={{ listStyleType: "none" }}>Email: okey@gmail.com</li>
        </div>
        <p
          className="mt-3 pt-3 text-center"
          style={{ borderTop: "2px solid gray", color: "gray" }}
        >
          Copyright All right reserved
        </p>
      </div>
    </>
  );
};

export default Footer;




