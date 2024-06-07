import React from "react";
import { Link } from "react-router-dom";
import FAQ from "./Faq";
import image1 from "../assets/images/1.jpg";
import image2 from "../assets/images/2.jpg";
import image3 from "../assets/images/3.jpg";
import image4 from "../assets/images/4.jpg";
import image5 from "../assets/images/5.jpg";

function Home() {
  return (
    <div className="pb-5 px-5">
      <h1 className="text-center">Fine Threads co.</h1>
      <div className="row">
        <div className="image-grid">
          <img
            src={image1}
            alt="Description of image 1"
            className="img-fluid image1"
          />
          <img
            src={image2}
            alt="Description of image 2"
            className="img-fluid image2"
          />
          <img
            src={image4}
            alt="Description of image 3"
            className="img-fluid image3"
          />
          <img
            src={image5}
            alt="Description of image 4"
            className="img-fluid image4"
          />
        </div>
      </div>
      <FAQ />
      <div>
        <h2 className="text-center">
          Book an appointment today, and speak to our experts:
        </h2>
        <div className="d-flex justify-content-center">
          <Link
            className="btn btn-dark text-white text-lg py-2 px-5"
            to="/booking"
          >
            Book
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
