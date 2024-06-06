import React from "react";
import { Link } from "react-router-dom";
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
      <div className="py-5">
        <h2>FAQ</h2>
        <div className="accordion" id="accordionFAQ">
          <div className="accordion-item">
            <h3 className="accordion-header" id="headingOne">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="false"
                aria-controls="collapseOne"
              >
                <b>What are the opening hours?</b>
              </button>
            </h3>
            <div
              id="collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionFAQ"
            >
              <div className="accordion-body">
                We are open <strong>everyday of the week</strong>, from{" "}
                <strong>8AM to 4PM</strong>!
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h3 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                <b>Do I need an appointment for fittings or alterations?</b>
              </button>
            </h3>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionFAQ"
            >
              <div className="accordion-body">
                We recommend that you schedule an appointment for fittings or
                alterations to ensure that we have enough time to attend to your
                needs and to minimize your wait time. However, we do accept
                walk-ins on a first-come, first-served basis, subject to
                availability. To reserve an appointment, customers need to book
                online by filling out the appointment form. <br />
                <Link to="/booking" className="animated-arrow">
                  <i>
                    <u>Book an appointment here.</u>
                  </i>
                </Link>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h3 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                <b>What types of alterations do you offer?</b>
              </button>
            </h3>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionFAQ"
            >
              <div className="accordion-body">
                We offer a wide range of alteration services for both men's and
                women's clothing, including hemming, taking in or letting out
                seams, shortening or lengthening sleeves, adjusting waistlines,
                and tapering or flaring pants. We can also perform more complex
                alterations such as reshaping jackets or dresses, or replacing
                zippers and buttons.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h3 className="accordion-header" id="headingFour">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                <b>
                  How long does it typically take the complete an alteration?
                </b>
              </button>
            </h3>
            <div
              id="collapseFour"
              className="accordion-collapse collapse"
              aria-labelledby="headingFour"
              data-bs-parent="#accordionFAQ"
            >
              <div className="accordion-body">
                The time it takes to complete an alteration depends on the
                complexity of the work and the volume of orders we are currently
                handling. In general, most simple alterations such as hemming or
                taking in seams can be completed within{" "}
                <strong>2-3 business days</strong>. More complex alterations may
                take up to a week or more.
              </div>
            </div>
          </div>
        </div>
      </div>
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
