import React from "react";
import { Link } from "react-router-dom";

const content = [
  {
    title: "Clothing Alterations",
    price: "Starting at 14.99$",
    paragraph:
      "Experience the perfect fit with our professional clothing alteration services. From minor adjustments to major resizing, our skilled tailors will transform your ill-fitting garments into a flattering, comfortable wardrobe.",
    imageSrc: "image1.jpg",
    imageAlt: "description 1",
  },
  {
    title: "Custom Tailoring",
    price: "See in store for pricing.",
    paragraph:
      "Indulge in the luxury of bespoke fashion with our custom tailoring services. Our expert tailors will work closely with you to create one-of-a-kind garments that reflect your personal style and fit you impeccably, ensuring you make a lasting impression in every setting.",
    imageSrc: "image2.jpg",
    imageAlt: "description 2",
  },
  {
    title: "Vintage Restoration",
    price: "Starting at 39.99$",
    paragraph:
      "Breathe new life into your cherished vintage garments with our meticulous restoration services. Our experienced tailors will skillfully repair and refit your timeless pieces, preserving their unique charm and ensuring they can be enjoyed for years to come.",
    imageSrc: "image2.jpg",
    imageAlt: "description 2",
  },
  {
    title: "Dry Cleaning and Laundry Services",
    price: [
      "Self serve starting at 14.99$",
      <br />,
      "Full service starting at 29.99$",
    ],
    paragraph:
      "Maintain the pristine condition of your garments with our convenient dry cleaning and laundry services. Our expert cleaners will treat your clothes with the utmost care, using state-of-the-art equipment and eco-friendly products to ensure they look and feel their best.",
    imageSrc: "image2.jpg",
    imageAlt: "description 2",
  },
];

function Services() {
  return (
    <div className="mx-5 mb-5">
      <h1 className="text-center pb-0 mb-0">Services</h1>
      <p className="text-center pt-0 mt-0">
        Speak to one of our experts today. We're here to help.
      </p>
      {content.map((item, index) => (
        <div className="row mb-4" key={index}>
          <div className={`col-md-6 order-${index % 2}`}>
            <h2>{item.title}</h2>
            <p>
              <i>{item.price}</i>
            </p>
            <p>{item.paragraph}</p>
            <Link to="/booking" key={`link-${index}`}>
              <button className="btn btn-dark text-white text-lg">
                Book an Appointment
              </button>
            </Link>
          </div>
          <div className={`col-md-6 order-${(index + 1) % 2}`}>
            <img
              src={item.imageSrc}
              alt={item.imageAlt}
              className="img-fluid"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Services;
