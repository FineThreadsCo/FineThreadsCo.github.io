import React from "react";
import { Link } from "react-router-dom";
import grid1 from "../assets/images/grid1.jpg";
import grid2 from "../assets/images/grid2.jpg";
import grid3 from "../assets/images/grid3.jpg";
import grid4 from "../assets/images/grid4.jpg";

const images = [
  { src: grid1, text: "Clothing Alterations" },
  { src: grid2, text: "Custom Tailoring" },
  { src: grid3, text: "Vintage Restoration" },
  { src: grid4, text: "Dry Cleaning and Laundry Services" },
];

function ImageGrid() {
  return (
    <div className="container">
      {images.map((image, index) => {
        if (index % 3 === 0) {
          return (
            <div className="row g-0" key={index}>
              <div className="col-md-6">
                <Link to="/services">
                  <div className="image-container">
                    <img
                      src={image.src}
                      className="img-fluid"
                      alt={`Image ${index + 1}`}
                      style={{ height: "100%", objectFit: "cover" }}
                    />
                    <div className="overlay">
                      <div className="text">{image.text}</div>
                    </div>
                  </div>
                </Link>
              </div>
              {index + 1 < images.length && (
                <div className="col-md-6">
                  <div className="row g-0">
                    <div className="col-12">
                      <Link to="/services">
                        <div className="image-container">
                          <img
                            src={images[index + 1].src}
                            className="img-fluid"
                            alt={`Image ${index + 2}`}
                            style={{ objectFit: "cover" }}
                          />
                          <div className="overlay">
                            <div className="text">{images[index + 1].text}</div>
                          </div>
                        </div>
                      </Link>
                    </div>
                    {index + 2 < images.length && (
                      <div className="col-12">
                        <Link to="/services">
                          <div className="image-container">
                            <img
                              src={images[index + 2].src}
                              className="img-fluid"
                              alt={`Image ${index + 3}`}
                              style={{ objectFit: "cover" }}
                            />
                            <div className="overlay">
                              <div className="text">
                                {images[index + 2].text}
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          );
        }
        return null;
      })}
    </div>
  );
}

export default ImageGrid;
