import React from "react";
import grid1 from "../assets/images/grid1.jpg";
import grid2 from "../assets/images/grid2.jpg";
import grid3 from "../assets/images/grid3.jpg";
import grid4 from "../assets/images/grid4.jpg";

const images = [grid1, grid2, grid3, grid4];

function ImageGrid() {
  return (
    <div className="container">
      {images.map((image, index) => (
        <div className="row g-0" key={index}>
          <div className="col-md-6">
            <img
              src={image}
              className="img-fluid"
              alt={`Image ${index + 1}`}
              style={{ height: "100%", objectFit: "cover" }}
            />
          </div>
          {index % 2 === 0 && index + 1 < images.length && (
            <div className="col-md-6">
              <div className="row g-0">
                <div className="col-12">
                  <img
                    src={images[index + 1]}
                    className="img-fluid"
                    alt={`Image ${index + 2}`}
                    style={{ objectFit: "cover" }}
                  />
                </div>
                {index + 2 < images.length && (
                  <div className="col-12">
                    <img
                      src={images[index + 2]}
                      className="img-fluid"
                      alt={`Image ${index + 3}`}
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default ImageGrid;
