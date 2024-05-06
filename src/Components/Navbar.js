import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav className="navbar sticky-top">
        <div
          className="container-fluid align-items-center"
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

          <NavLink to="/contact">
            <button
              className="btn btn-success fw-bold"
              type="submit"
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-delay="500"
              data-aos-once="true"
            >
              Contact
            </button>
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
