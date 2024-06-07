import React, { useState } from "react";
import ConfirmationPopup from "./ConfirmationPopup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Booking() {
  const [showModal, setShowModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedExpert, setSelectedExpert] = useState(
    "Alexandra Johnson - Bespoke Tailoring"
  );
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    setShowModal(true);
  };

  return (
    <div className="mx-5 mb-5 booking-container">
      <h1 className="text-center pb-0 mb-0">Book an Appointment</h1>
      <p className="text-center pt-0 mt-0">
        Need advice? Need custom services? We can help.
      </p>

      <div className="row border rounded my-5 p-4 mb-4">
        <div className="col-12 col-md">
          <div className="row">
            <div className="col">
              <label htmlFor="firstName">
                First Name <span className="text-danger">*</span>
              </label>
              <input
                id="firstName"
                type="text"
                className="form-control"
                placeholder="John"
              />
            </div>
            <div className="col">
              <label htmlFor="lastName">
                Last Name <span className="text-danger">*</span>
              </label>
              <input
                id="lastName"
                type="text"
                className="form-control"
                placeholder="Doe"
              />
            </div>
          </div>
          <div className="row mt-3">
            <div className="col">
              <label htmlFor="email">
                Email Address <span className="text-danger">*</span>
              </label>
              <input
                id="email"
                type="email"
                className="form-control"
                placeholder="john.doe@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)} // update the email state when the input changes
              />
            </div>
          </div>
        </div>
        <div className="col-12 col-md">
          <div className="row">
            <div className="col">
              <label htmlFor="date-picker">
                Select a Date <span className="text-danger">*</span>
              </label>
              <div id="date-picker">
                <DatePicker
                  selected={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  className="form-control"
                />
              </div>
            </div>
            <div className="col">
              <label htmlFor="time-picker">
                Select a Time <span className="text-danger">*</span>
              </label>
              <input id="time-picker" type="time" className="form-control" />
            </div>
            <div className="col">
              <label htmlFor="booking-type">
                Booking Type <span className="text-danger">*</span>
              </label>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="bookingType"
                  id="in-person"
                  value="in-person"
                  defaultChecked
                  style={{ color: "black" }}
                />
                <label className="form-check-label" htmlFor="in-person">
                  In-person
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="bookingType"
                  id="virtual"
                  value="virtual"
                  style={{ color: "black" }}
                />
                <label className="form-check-label" htmlFor="virtual">
                  Virtual
                </label>
              </div>
            </div>
          </div>
          <div className="mt-3">
            <label htmlFor="expert-select">
              Select an Expert for the service that you need:{" "}
              <span className="text-danger">*</span>
            </label>
            <select
              id="expert-select"
              className="form-select"
              value={selectedExpert}
              onChange={(e) => setSelectedExpert(e.target.value)}
            >
              <option>Alexandra Johnson - Bespoke Tailoring</option>
              <option>Emily Green - Sustainable Fashion</option>
              <option>Charlotte Davis - Bridal Wear</option>
              <option>Isabella Grey - Fabric Selection & Sourcing</option>
              <option>Benjamin Thompson - Men’s Suits</option>
              <option>Daniel Walker - Alterations and Repairs</option>
              <option>Jerry Harris - Pattern making & Drafting</option>
            </select>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-center">
        <a
          className="btn btn-dark text-white text-lg py-2 px-5 mt-4"
          onClick={handleSubmit}
        >
          Submit
        </a>
      </div>

      <ConfirmationPopup
        showModal={showModal}
        setShowModal={setShowModal}
        email={email}
      />
    </div>
  );
}

export default Booking;
