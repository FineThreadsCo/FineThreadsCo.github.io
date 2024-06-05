import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./components/Home";
import AboutPage from "./components/About";
import ServicesPage from "./components/Services";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/main.css";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Footer />
      </div>
      {/* NOTE: use the bootsraps toast thing for the popup confirmation */}
    </Router>
  );
}

export default App;
