import React from "react";

function Booking() {
  return (
    <div className="px-5 mb-5">
      <h1 className="text-center">Book an Appointment</h1>
      <p className="text-center">
        Need advice? Need custom services? We can help.
      </p>

      <div className="row">
        <div className="col">
          {/* Content for the first column goes here */}
        </div>
        <div className="col">
          <select className="form-select" aria-label="Default select example">
            <option selected>June 2024</option>
            <option value="1">July 2024</option>
            <option value="2">August 2024</option>
            <option value="3">September 2024</option>
            <option value="4">October 2024</option>
            <option value="5">November 2024</option>
            <option value="6">December 2024</option>
            <option value="7">January 2025</option>
            <option value="8">February 2025</option>
            <option value="9">March 2025</option>
            <option value="10">April 2025</option>
            <option value="11">May 2025</option>
            <option value="12">June 2025</option>
          </select>
        </div>
      </div>

      <div className="d-flex justify-content-center">
        <a
          className="btn btn-dark text-white text-lg py-2 px-5"
          href="/booking"
        >
          Submit
        </a>
      </div>
    </div>
  );
}

export default Booking;
