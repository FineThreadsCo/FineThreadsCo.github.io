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
  const teamMembers = [
    {
      name: "Alexandra Johnson",
      role: "Bespoke Tailoring",
      description:
        "Alexandra is a master of bespoke tailoring with over 20 years of experience. She is known for her meticulous attention to detail.",
      image: profile1,
      alt: "Alexandra Johnson",
    },
    {
      name: "Emily Green",
      role: "Sustainable Fashion",
      description:
        "Emily is passionate about sustainable fashion and is always looking for eco-friendly materials. She believes in fashion that doesn't compromise our planet.",
      image: profile5,
      alt: "Emily Green",
    },
    {
      name: "Charlotte Davis",
      role: "Bridal Wear",
      description:
        "Charlotte specializes in creating stunning bridal wear that captures the essence of each bride. Her designs are a blend of tradition and modernity.",
      image: profile2,
      alt: "Charlotte Davis",
    },
    {
      name: "Isabella Grey",
      role: "Fabric Selection & Sourcing",
      description:
        "Isabella has a keen eye for quality fabrics and ensures we source the best materials. She is constantly exploring new fabric technologies.",
      image: profile7,
      alt: "Isabella Grey",
    },
    {
      name: "Benjamin Thompson",
      role: "Men’s Suits",
      description:
        "Benjamin is an expert in men's suits and ensures every piece is tailored to perfection. His suits are a testament to timeless style.",
      image: profile6,
      alt: "Benjamin Thompson",
    },
    {
      name: "Daniel Walker",
      role: "Alterations and Repairs",
      description:
        "Daniel is our go-to person for alterations and repairs, always delivering impeccable work. He is dedicated to ensuring the perfect fit for every client.",
      image: profile4,
      alt: "Daniel Walker",
    },
    {
      name: "Jerry Harris",
      role: "Pattern making & Drafting",
      description:
        "Jerry is a master of pattern making and drafting, bringing designs to life with precision. His patterns are the foundation of our exceptional fit.",
      image: profile3,
      alt: "Jerry Harris",
    },
  ];

  return (
    <div className="px-5">
      <h1 className="text-center">About Us</h1>
      <div className="container mx-auto" style={{ maxWidth: "1400px" }}>
        <div className="row mt-5">
          <div className="col-md-6 less-high">
            <h3 className="mb-4">Our Journey</h3>
            <p className="text-muted" style={{ textAlign: "justify" }}>
              We are a family-owned tailoring business that has been serving our
              community for over a decade. Our story began 10 years ago in the
              city of Denver, Colorado, when we decided to turn our passion for
              craftsmanship into a business. We started small, making socks and
              offering basic tailoring services. But we quickly gained a
              reputation for our meticulous attention to detail and the high
              quality of our products.
            </p>
            <p className="text-muted" style={{ textAlign: "justify" }}>
              As demand for our services grew, we expanded our product range and
              started offering more comprehensive tailoring services. We
              invested in modern technology and grew our team, but we never lost
              sight of the values that our business was built on: quality, care,
              and customer satisfaction. Today, we are proud to be a trusted
              name in the tailoring industry.
            </p>
            <p className="text-muted" style={{ textAlign: "justify" }}>
              We offer a wide range of tailoring services, from simple
              alterations to custom-made garments. Our team of skilled and
              experienced tailors is dedicated to meeting the needs and
              expectations of our customers. We are grateful for the support of
              our customers throughout the years, and we look forward to
              continuing to serve you in the future. Thank you for being a part
              of our journey.
            </p>
          </div>
          <div className="col-md-6 less-high">
            <img
              src={imageAboutUs}
              alt="Man wearing a suit"
              className="img-fluid about-us-image-size"
            />
          </div>
        </div>
        <h3 className="mt-5">Our Team</h3>
        <div className="row mb-5">
          {teamMembers.map((member, index) => (
            <div className="col-lg-6" key={index}>
              <div className="row mt-3 align-items-center">
                <div className="col-12 col-lg-8">
                  <p className="mb-2">
                    <b>{member.name}</b> - <i>{member.role}</i>
                  </p>
                  <p className="text-muted">{member.description}</p>
                </div>
                <div className="col-12 col-lg-4">
                  <img
                    src={member.image}
                    alt={member.alt}
                    className="img-fluid rounded-circle mb-3"
                    style={{
                      width: "100px",
                      height: "100px",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
