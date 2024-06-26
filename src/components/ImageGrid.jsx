import React, { useState, useEffect } from "react";
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
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className="container"
      style={{ display: "flex", flexDirection: "column", height: "100%" }}
    >
      <div className="row g-0">
        <div
          className="col-md-6"
          style={{ display: "flex", flexDirection: "column" }}
        >
          {images
            .filter((_, index) => index % 2 === 0)
            .map((image, index) => (
              <Link
                to={image.link}
                key={index}
                style={{
                  flex: index === 0 ? 3 : 1,
                  height: "auto",
                }}
              >
                <div className="image-container" style={{ height: "100%" }}>
                  <img
                    src={image.src}
                    className="img-fluid"
                    alt={`Image ${index * 2 + 1}`}
                    style={{
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: isDesktop
                        ? index === 0
                          ? "15px 0 0 0"
                          : "0 0 0 15px"
                        : "0",
                    }}
                  />
                  <div
                    className="overlay"
                    style={{
                      borderRadius: isDesktop
                        ? index === 0
                          ? "15px 0 0 0"
                          : "0 0 0 15px"
                        : "0",
                    }}
                  >
                    <div className="text">{image.text}</div>
                  </div>
                </div>
              </Link>
            ))}
        </div>
        <div
          className="col-md-6"
          style={{ display: "flex", flexDirection: "column" }}
        >
          {images
            .filter((_, index) => index % 2 !== 0)
            .map((image, index) => (
              <Link
                to={image.link}
                key={index}
                style={{
                  flex: index === 0 ? 1 : 3,
                  height: "auto",
                }}
              >
                <div className="image-container" style={{ height: "100%" }}>
                  <img
                    src={image.src}
                    className="img-fluid"
                    alt={`Image ${index * 2 + 2}`}
                    style={{
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: isDesktop
                        ? index === 0
                          ? "0 15px 0 0"
                          : "0 0 15px 0"
                        : "0",
                    }}
                  />
                  <div
                    className="overlay"
                    style={{
                      borderRadius: isDesktop
                        ? index === 0
                          ? "0 15px 0 0"
                          : "0 0 15px 0"
                        : "0",
                    }}
                  >
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
