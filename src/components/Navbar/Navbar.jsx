// css

import "./Navbar.css";
const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid px-5">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item nav-items">Portfolio</li>
            <li class="nav-item nav-items">Watchlist</li>
            {/*  */}
          </ul>
          <h6 className="mx-4 mb-0">Ali Abdulsamad</h6>
          <button class="btn btn-danger" type="submit">
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
