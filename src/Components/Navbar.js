import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav className="navbar sticky-top">
        <div className="container-fluid align-items-center ">
          <NavLink to="/">
            <img
              className="nav-img"
              style={{ padding: "0", margin: "0" }}
              src="../images/ebslogo.png"
              width={250}
              height={100}
            ></img>
            <img
              className="nav-im"
              style={{ padding: "0", margin: "0" }}
              src="../images/ebslogo.png"
              width={100}
              height={80}
            ></img>
            {/* <h1 className="fw-bold text-white ps-1">
              ebs
              <i className="bi bi-globe2 text-success "></i>ft
            </h1> */}
          </NavLink>
          <NavLink to="/contact">
            <button className="btn btn-success me-3 fw-bold ">
              <h5>Contact</h5>
            </button>
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
