import React from "react";
import "./InfoBox.css";

const InfoBox = ({ text, subtitle, imageSrc }) => {
  return (
    <div className="InfoBox">
      <img className="InfoBox-image" src={imageSrc} alt="Info" />
      <div className="InfoBox-text-container">
        <h1 className="InfoBox-text">{text}</h1>
        <h2 className="InfoBox-subtitle">{subtitle}</h2>
      </div>
    </div>
  );
};

export default InfoBox;
