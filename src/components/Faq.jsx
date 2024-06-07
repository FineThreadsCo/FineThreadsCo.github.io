import React from "react";
import { Link } from "react-router-dom";

const faqData = [
  {
    question: "What are the opening hours?",
    answer: "We are open everyday of the week, from 8AM to 4PM!",
  },
  {
    question: "Do I need an appointment for fittings or alterations?",
    answer:
      "We recommend that you schedule an appointment for fittings (in person or online) for alterations to ensure that we have enough time to attend to your needs and to minimize your wait time. However, we do accept walk-ins on a first-come, first-served basis, subject to availability. To reserve an appointment, customers need to book online by filling out the appointment form.",
    link: "/booking",
    linkText: "Book an appointment here.",
  },
  {
    question: "What types of alterations do you offer?",
    answer:
      "We offer a wide range of alteration services for both men's and women's clothing, including hemming, taking in or letting out seams, shortening or lengthening sleeves, adjusting waistlines, and tapering or flaring pants. We can also perform more complex alterations such as reshaping jackets or dresses, or replacing zippers and buttons.",
  },
  {
    question: "How long does it typically take the complete an alteration?",
    answer:
      "The time it takes to complete an alteration depends on the complexity of the work and the volume of orders we are currently handling. In general, most simple alterations such as hemming or taking in seams can be completed within 2-3 business days. More complex alterations may take up to a week or more.",
  },
  {
    question: "What types of materials do you use in your tailoring work?",
    answer: [
      "We use a variety of high-quality materials in our tailoring work. Our fabrics include cotton, linen, wool, silk, and synthetics, chosen for their durability, comfort, and aesthetics. We also use strong, colorfast threads in cotton, polyester, and silk, and a range of notions like buttons, zippers, snaps, and hooks.",
      <br />,
      <br />,
      "If you have a specific material in mind for a custom order, we're more than happy to discuss the possibility. We'll do our best to source the material and ensure it's suitable for the garment you have in mind. Please note that the availability, cost, and suitability of the material may affect the final outcome of the order.",
    ],
  },
  {
    question: "Where do you source your materials from?",
    answer:
      "We source our materials from reputable suppliers and manufacturers who provide high-quality fabrics, threads, and notions. We work with local and international suppliers to ensure that we have access to a wide range of materials in different colors, patterns, and textures. We also strive to use eco-friendly and sustainable materials whenever possible.",
  },
  {
    question: "Why is the quality of materials important in tailoring?",
    answer:
      "The quality of materials is crucial in tailoring as it directly affects the durability, comfort, and aesthetics of the garment. High-quality materials can ensure a garment that not only looks and feels great but also stands the test of time.",
  },
];

function FAQ() {
  return (
    <div className="py-5">
      <h2>FAQ</h2>
      <div className="accordion" id="accordionFAQ">
        {faqData.map((item, index) => (
          <div className="accordion-item" key={index}>
            <h3 className="accordion-header" id={`heading${index}`}>
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse${index}`}
                aria-expanded="false"
                aria-controls={`collapse${index}`}
              >
                <b>{item.question}</b>
              </button>
            </h3>
            <div
              id={`collapse${index}`}
              className="accordion-collapse collapse"
              aria-labelledby={`heading${index}`}
              data-bs-parent="#accordionFAQ"
            >
              <div className="accordion-body">
                {item.answer}
                <br />
                {item.link && (
                  <Link to={item.link} className="animated-arrow">
                    <i>
                      <u>{item.linkText}</u>
                    </i>
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;
