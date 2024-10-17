import React from "react";
import "./ImageLine.css";

const ImageLine = ({ images }) => {
  return (
    <div className="image-line">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`img-${index}`}
          className="line-image"
        />
      ))}
    </div>
  );
};

export default ImageLine;
