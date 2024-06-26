import React from "react";
import { Link } from "react-router-dom";
import service1 from "../assets/images/service1.jpg";
import service2 from "../assets/images/service2.jpg";
import service3 from "../assets/images/service3.jpg";
import service4 from "../assets/images/service4.jpg";
import service5 from "../assets/images/service5.jpg";

const content = [
  {
    title: "Clothing Alterations",
    id: "clothing-alterations",
    price: "Starting at 14.99$",
    paragraph:
      "Experience the perfect fit with our professional clothing alteration services. From minor adjustments to major resizing, our skilled tailors will transform your ill-fitting garments into a flattering, comfortable wardrobe.",
    imageSrc: service1,
    imageAlt: "Clothing alrerations image",
  },
  {
    title: "Custom Tailoring",
    id: "custom-tailoring",
    price: "See in store for pricing.",
    paragraph:
      "Indulge in the luxury of bespoke fashion with our custom tailoring services. Our expert tailors will work closely with you to create one-of-a-kind garments that reflect your personal style and fit you impeccably, ensuring you make a lasting impression in every setting.",
    imageSrc: service2,
    imageAlt: "Custom tailoring image",
  },
  {
    title: "Vintage Restoration",
    id: "vintage-restoration",
    price: "Starting at 39.99$",
    paragraph:
      "Breathe new life into your cherished vintage garments with our meticulous restoration services. Our experienced tailors will skillfully repair and refit your timeless pieces, preserving their unique charm and ensuring they can be enjoyed for years to come.",
    imageSrc: service3,
    imageAlt: "Vintage restoration image",
  },
  {
    title: "Dry Cleaning and Laundry Services",
    id: "dry-cleaning-and-laundry-services",
    price: [
      "Self serve starting at 14.99$",
      <br />,
      "Full service starting at 29.99$",
    ],
    paragraph:
      "Maintain the pristine condition of your garments with our convenient dry cleaning and laundry services. Our expert cleaners will treat your clothes with the utmost care, using state-of-the-art equipment and eco-friendly products to ensure they look and feel their best.",
    imageSrc: service4,
    imageAlt: "Dry cleaning and laundry services image",
  },
  {
    title: "Online Consultation",
    id: "online-consultation",
    price: "Free",
    paragraph:
      "Need advice? Need custom services? We can help. Book a free online consultation with our expert tailors to discuss your unique needs and explore the possibilities of bespoke fashion.",
    imageSrc: service5,
    imageAlt: "Online consultation image",
  },
];

function Services() {
  return (
    <div className="mx-5">
      <div className="mx-auto mb-5" style={{ maxWidth: "1200px" }}>
        <h1 className="text-center pb-0 mb-0">Services</h1>
        <p
          className="text-muted mx-auto pt-0 mt-0 mb-5"
          style={{ maxWidth: "600px", textAlign: "justify" }}
        >
          We provide a variety of tailoring services to meet your unique needs,
          from simple alterations to complete custom designs. Our experienced
          and skilled tailors are committed to delivering the highest quality
          workmanship and attention to detail.
        </p>
        {content.map((item, index) => (
          <div className="row mb-4" key={index}>
            <div className={`col-12 col-md-6 order-0 order-md-${index % 2}`}>
              <div
                className="service-content px-3 pt-4 border rounded d-flex flex-column justify-content-between"
                style={{ height: "100%" }}
              >
                <div>
                  <h3 id={item.id}>{item.title}</h3>
                  <p>
                    <i>{item.price}</i>
                  </p>
                  <p className="text-muted" style={{ textAlign: "justify" }}>
                    {item.paragraph}
                  </p>
                </div>
                <div>
                  <Link to="/booking" key={`link-${index}`}>
                    <button className="btn btn-dark text-white text-lg mb-3 w-100">
                      Book an Appointment
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div
              className={`col-12 col-md-6 order-1 order-md-${(index + 1) % 2}`}
            >
              <img
                src={item.imageSrc}
                alt={item.imageAlt}
                className="img-fluid service-image"
                style={{ objectFit: "cover", height: "100%", width: "100%" }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
