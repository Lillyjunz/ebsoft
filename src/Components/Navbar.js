import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav className="navbar sticky-top">
        <div className="container-fluid align-items-center ">
          <NavLink to="/">
            <h1 className="fw-bold text-white ps-1">
              ebs
              <i className="bi bi-globe2 text-success "></i>ft
            </h1>
          </NavLink>
          <NavLink to="/contact">
            <button className="btn btn-success me-2 fw-bold p-2 pe-4 ps-4">
              <h5>Contact</h5>
            </button>
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
