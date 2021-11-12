import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
// css
import "./Navbar.css";

const Navbar = ({ user }) => {
  const [navOpen, setNavOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
  };

  console.log(user?.data?.email);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid px-5">
        <button
          onClick={() => setNavOpen((prevNavOpen) => !prevNavOpen)}
          className={`navbar-toggler ${navOpen ? "" : "collapsed"}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${navOpen ? "show" : ""} `}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item nav-items">Portfolio</li>
            <li className="nav-item nav-items">Watchlist</li>
            {/*  */}
          </ul>
          <h6 className="mx-4 mb-0">
            {user?.data?.email.split("@")[0].toUpperCase() || "User"}
          </h6>
          <button className="btn btn-danger" type="submit" onClick={logout}>
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
