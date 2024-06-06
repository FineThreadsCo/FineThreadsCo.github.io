import React from "react";

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
      <div
        style={{
          width: "50%",
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <p>{email}</p>
        <button onClick={() => setShowModal(false)}>Close</button>
      </div>
    </div>
  );
}

export default ConfirmationPopup;
