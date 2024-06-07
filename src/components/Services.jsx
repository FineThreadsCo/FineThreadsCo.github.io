import React from "react";
import { Link } from "react-router-dom";

function Services() {
  const content = [
    {
      title: "Clothing Alterations",
      price: "Starting at 14.99$",
      paragraph: "Small paragraph 1...",
      imageSrc: "image1.jpg",
      imageAlt: "description 1",
    },
    {
      title: "Custom Tailoring",
      price: "See in store for pricing.",
      paragraph: "Small paragraph 2...",
      imageSrc: "image2.jpg",
      imageAlt: "description 2",
    },
    {
      title: "Vintage Restoration",
      price: "Starting at 39.99$",
      paragraph: "Small paragraph 2...",
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
      paragraph: "Small paragraph 2...",
      imageSrc: "image2.jpg",
      imageAlt: "description 2",
    },
  ];

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
