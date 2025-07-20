import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (!isScrolled && window.scrollY > 20) {
        setIsScrolled(true);
      } else if (isScrolled && window.scrollY <= 0) {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScrolled]);

  return (
    <nav
      className={`navbar sticky-top navbar-expand-lg bg-main ${
        isScrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="container">
        <NavLink
          to="/"
          className="navbar-brand nav-logo fw-bold text-uppercase text-white"
        >
          Start Framework
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon navbar-dark"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
            <li className="nav-item">
              <NavLink
                to="/about"
                className="nav-link nav-links-font fw-bold text-white text-uppercase px-3"
                aria-current="page"
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/portfolio"
                className="nav-link nav-links-font fw-bold text-white text-uppercase px-3"
              >
                Portfolio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact"
                className="nav-link nav-links-font fw-bold text-white text-uppercase px-3"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
