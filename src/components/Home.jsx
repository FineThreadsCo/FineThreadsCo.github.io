import React from "react";
import { Link } from "react-router-dom";
import FAQ from "./Faq";
import ImageGrid from "./ImageGrid";

function Home() {
  return (
    <div className="pb-5 px-5">
      <h1 className="text-center">Fine Threads co.</h1>
      <div className="mx-5 px-5">
        <ImageGrid className="mx-5 px-5" />
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
