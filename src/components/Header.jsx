import React from "react";
import { useLocation, Link } from "react-router-dom";

function Header() {
  const location = useLocation();
  const currentPage = location.pathname;

  return (
    <header className="header border-bottom-line mx-5 pt-2 pb-3">
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <Link className="navbar-brand" to="/">
          Fine Threads co.
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="container-fluid">
            <ul className="navbar-nav ml-auto align-far-right">
              <li className="nav-item mr-3">
                <Link
                  className={`nav-link text-dark fs-6 underline-animation ${
                    currentPage === "/" ? "current-tab" : ""
                  }`}
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item mr-3">
                <Link
                  className={`nav-link text-dark fs-6 underline-animation ${
                    currentPage === "/about" ? "current-tab" : ""
                  }`}
                  to="/about"
                >
                  About Us
                </Link>
              </li>
              <li className="nav-item mr-3">
                <Link
                  className={`nav-link text-dark fs-6 underline-animation ${
                    currentPage === "/services" ? "current-tab" : ""
                  }`}
                  to="/services"
                >
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link btn btn-dark fs-6 text-white px-3 py-2"
                  to="/booking"
                >
                  Book an Appointment
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
