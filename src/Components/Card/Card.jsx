import React from "react";
import "./Card.css";

const Card = ({ backgroundImage, text, size = "cover" }) => {
  return (
    <div
      className="card"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: size,
      }}
    >
      <div className={"card-text"}>{text}</div>
    </div>
  );
};

export default Card;
