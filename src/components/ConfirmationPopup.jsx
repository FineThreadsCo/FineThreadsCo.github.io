import React from "react";
import { CheckCircle } from "react-bootstrap-icons";

function ConfirmationPopup({ showModal, setShowModal, email }) {
  if (!showModal) {
    return null;
  }

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
      }}
    >
      <div className="confirmation-popup">
        <CheckCircle
          className="hide-on-mobile"
          color="green"
          size={100}
          style={{
            position: "absolute",
            top: "50%",
            right: "7%",
            transform: "translateY(-50%)",
          }}
        />
        <h3 className="m-0">Appointment confirmed.</h3>
        <p className="p-0 mb-3">
          Email confirmation sent at: <br />
          <b>
            <u>{email ? email : "<no email provided>"}</u>
          </b>
        </p>
        <button
          className="btn btn-dark text-white text-lg py-2 px-5"
          onClick={() => setShowModal(false)}
        >
          Ok
        </button>
      </div>
    </div>
  );
}

export default ConfirmationPopup;
