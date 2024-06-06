import React from "react";
import imageAboutUs from "../assets/images/about-us.jpg";
import profile1 from "../assets/images/profile1.jpg";
import profile2 from "../assets/images/profile2.jpg";
import profile3 from "../assets/images/profile3.jpg";
import profile4 from "../assets/images/profile4.jpg";
import profile5 from "../assets/images/profile5.jpg";
import profile6 from "../assets/images/profile6.jpg";
import profile7 from "../assets/images/profile7.jpg";

function About() {
  return (
    <div className="px-5">
      <h1 className="text-center">About Us</h1>
      <div className="row mt-5">
        <div className="col-md-6">
          <h3 className="mb-4">Our Journey.</h3>
          <p className="text-muted">
            We are a family-owned tailoring business that has been serving our
            community for over a decade. Our story began 10 years ago in the
            city of Denver, Colorado, when we decided to turn our passion for
            craftsmanship into a business. We started small, making socks and
            offering basic tailoring services. But we quickly gained a
            reputation for our meticulous attention to detail and the high
            quality of our products.
          </p>
          <p className="text-muted">
            As demand for our services grew, we expanded our product range and
            started offering more comprehensive tailoring services. We invested
            in modern technology and grew our team, but we never lost sight of
            the values that our business was built on: quality, care, and
            customer satisfaction. Today, we are proud to be a trusted name in
            the tailoring industry.
          </p>
          <p className="text-muted">
            We offer a wide range of tailoring services, from simple alterations
            to custom-made garments. Our team of skilled and experienced tailors
            is dedicated to meeting the needs and expectations of our customers.
            We are grateful for the support of our customers throughout the
            years, and we look forward to continuing to serve you in the future.
            Thank you for being a part of our journey.
          </p>
        </div>
        <div className="col-md-6">
          <img
            src={imageAboutUs}
            alt="Man wearing a suit"
            className="img-fluid about-us-image-size"
          />
        </div>
      </div>
      <div>
        <h3 className="mt-5">Our Team</h3>
        <div className="row mt-5 align-items-center">
          <div className="col-md-5">
            <p>
              <b>Alexandra Johnson</b> - <i>Bespoke Tailoring</i>
              <br />
              Alexandra is a master of bespoke tailoring with over 20 years of
              experience. She is known for her meticulous attention to detail.
            </p>
          </div>
          <div className="col-md-1">
            <img
              src={profile1}
              alt="Alexandra Johnson"
              className="img-fluid rounded-circle mb-3"
              style={{ width: "100px", height: "100px", objectFit: "cover" }}
            />
          </div>
          <div className="col-md-5">
            <p>
              <b>Emily Green</b> - <i>Sustainable Fashion</i>
              <br />
              Emily is passionate about sustainable fashion and is always
              looking for eco-friendly materials. She believes in fashion that
              doesn't compromise our planet.
            </p>
          </div>
          <div className="col-md-1">
            <img
              src={profile5}
              alt="Emily Green"
              className="img-fluid rounded-circle mb-3"
              style={{ width: "100px", height: "100px", objectFit: "cover" }}
            />
          </div>
        </div>
        <div className="row mt-5 align-items-center">
          <div className="col-md-5">
            <p>
              <b>Charlotte Davis</b> - <i>Bridal Wear</i>
              <br />
              Charlotte specializes in creating stunning bridal wear that
              captures the essence of each bride. Her designs are a blend of
              tradition and modernity.
            </p>
          </div>
          <div className="col-md-1">
            <img
              src={profile2}
              alt="Charlotte Davis"
              className="img-fluid rounded-circle mb-3"
              style={{ width: "100px", height: "100px", objectFit: "cover" }}
            />
          </div>
          <div className="col-md-5">
            <p>
              <b>Isabella Grey</b> - <i>Fabric Selection & Sourcing</i>
              <br />
              Isabella has a keen eye for quality fabrics and ensures we source
              the best materials. She is constantly exploring new fabric
              technologies.
            </p>
          </div>
          <div className="col-md-1">
            <img
              src={profile7}
              alt="Isabella Grey"
              className="img-fluid rounded-circle mb-3"
              style={{ width: "100px", height: "100px", objectFit: "cover" }}
            />
          </div>
        </div>
        <div className="row mt-5 align-items-center">
          <div className="col-md-5">
            <p>
              <b>Benjamin Thompson</b> - <i>Men’s Suits</i>
              <br />
              Benjamin is an expert in men's suits and ensures every piece is
              tailored to perfection. His suits are a testament to timeless
              style.
            </p>
          </div>
          <div className="col-md-1">
            <img
              src={profile6}
              alt="Benjamin Thompson"
              className="img-fluid rounded-circle mb-3"
              style={{ width: "100px", height: "100px", objectFit: "cover" }}
            />
          </div>
          <div className="col-md-5">
            <p>
              <b>Daniel Walker</b> - <i>Alterations and Repairs</i>
              <br />
              Daniel is our go-to person for alterations and repairs, always
              delivering impeccable work. He is dedicated to ensuring the
              perfect fit for every client.
            </p>
          </div>
          <div className="col-md-1">
            <img
              src={profile4}
              alt="Daniel Walker"
              className="img-fluid rounded-circle mb-3"
              style={{ width: "100px", height: "100px", objectFit: "cover" }}
            />
          </div>
        </div>
        <div className="row mt-5 align-items-center">
          <div className="col-md-5">
            <p>
              <b>Jerry Harris</b> - <i>Pattern making & Drafting</i>
              <br />
              Jerry is a master of pattern making and drafting, bringing designs
              to life with precision. His patterns are the foundation of our
              exceptional fit.
            </p>
          </div>
          <div className="col-md-1">
            <img
              src={profile3}
              alt="Jerry Harris"
              className="img-fluid rounded-circle mb-3"
              style={{ width: "100px", height: "100px", objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
