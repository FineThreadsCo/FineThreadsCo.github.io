import React from "react";
import { Link } from "react-router-dom";
import FAQ from "./Faq";
import ImageGrid from "./ImageGrid";

function Home() {
  return (
    <div className="pb-5 px-5">
      <h1 className="text-center">Fine Threads co.</h1>
      <p
        className="mx-auto text-muted"
        style={{ maxWidth: "600px", textAlign: "justify" }}
      >
        Welcome to <i>Fine Threads co.</i>, your one-stop-shop for all forms of
        tailoring. Whether you need a new fit for your favorite suit or a
        custom-designed dress for a special occasion, we've got you covered. Our
        team of experienced and passionate tailors is dedicated to providing you
        with the highest quality workmanship and attention to detail.
      </p>
      <div className="d-flex justify-content-center mb-5">
        <Link
          className="btn btn-dark text-white text-lg py-2 px-5"
          to="/booking"
        >
          Book an appointment today!
        </Link>
      </div>
      <div className="container mx-auto" style={{ maxWidth: "1400px" }}>
        <ImageGrid />
        <FAQ />
      </div>
      <div>
        <h3 className="text-center">
          Book an appointment today, and speak to our experts:
        </h3>
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
