import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav className="navbar sticky-top">
        <div
          className="container-fluid align-items-center"
          style={{ padding: "13px" }}
        >
          <div className="nav-img">
            <NavLink to="/">
              <img
                className=" img-fluid"
                style={{ padding: "0", margin: "0" }}
                src="../images/whitelogo.png"
              ></img>
            </NavLink>
          </div>

          <NavLink to="/contact">
            <button className="btn btn-success me-2 fw-bold ">
              <h5>Contact</h5>
            </button>
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
