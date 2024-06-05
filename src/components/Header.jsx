import React from "react";

function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light nav-padding">
        <a className="navbar-brand" href="/">
          Fine Threads co.
        </a>
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
                <a className="nav-link text-dark" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item mr-3">
                <a className="nav-link text-dark" href="/about">
                  About
                </a>
              </li>
              <li className="nav-item mr-3">
                <a className="nav-link current-page text-dark" href="/services">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link btn btn-dark text-white px-3"
                  href="/booking"
                >
                  Book an Appointment
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
