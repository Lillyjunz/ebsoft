import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="container-fluid">
          <NavLink to="/">
            <img src="../images/ebslogo.png" width={150} height={80}></img>
          </NavLink>
          <NavLink to="/contact">
            <button className="btn btn-success me-2 fw-bold">Contact</button>
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
