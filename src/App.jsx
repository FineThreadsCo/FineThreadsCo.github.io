import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/main.css";

function App() {
  return (
    <div>
      <Header />
      <Footer />
      {/* use the bootsraps toast thing for the popup confirmation */}
    </div>
  );
}

export default App;
