import React from "react";
import { Link } from "react-router-dom";
import grid1 from "../assets/images/grid1.jpg";
import grid2 from "../assets/images/grid2.jpg";
import grid3 from "../assets/images/grid3.jpg";
import grid4 from "../assets/images/grid4.jpg";

const images = [
  {
    src: grid1,
    text: "Clothing Alterations",
    link: "/services#clothing-alterations",
  },
  { src: grid2, text: "Custom Tailoring", link: "/services#custom-tailoring" },
  {
    src: grid3,
    text: "Vintage Restoration",
    link: "/services#vintage-restoration",
  },
  {
    src: grid4,
    text: "Dry Cleaning and Laundry Services",
    link: "/services#dry-cleaning-and-laundry-services",
  },
];

function ImageGrid() {
  return (
    <div className="container">
      <div className="row g-0">
        <div className="col-md-6">
          {images
            .filter((_, index) => index % 2 === 0)
            .map((image, index) => (
              <Link to={image.link} key={index}>
                <div className="image-container">
                  <img
                    src={image.src}
                    className="img-fluid"
                    alt={`Image ${index * 2 + 1}`}
                    style={{ height: "100%", objectFit: "cover" }}
                  />
                  <div className="overlay">
                    <div className="text">{image.text}</div>
                  </div>
                </div>
              </Link>
            ))}
        </div>
        <div className="col-md-6">
          {images
            .filter((_, index) => index % 2 !== 0)
            .map((image, index) => (
              <Link to={image.link} key={index}>
                <div className="image-container">
                  <img
                    src={image.src}
                    className="img-fluid"
                    alt={`Image ${index * 2 + 2}`}
                    style={{ height: "100%", objectFit: "cover" }}
                  />
                  <div className="overlay">
                    <div className="text">{image.text}</div>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}

export default ImageGrid;
