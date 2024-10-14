import React, { useState } from "react";
import "./Card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Importa o componente FontAwesome
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"; // Exemplo de ícone (cafe)

const Card = ({
  backgroundImage,
  text,
  size = "cover",
  showButton = false,
  buttonText = "Contact", // Texto do botão
  buttonIcon = faEnvelope, // Ícone do botão
}) => {
  const [isActive, setIsActive] = useState(false); // Estado para rastrear o estado ativo

  const handleMouseEnter = () => {
    setIsActive(true); // Ativa o estado de hover
  };

  const handleMouseLeave = () => {
    setIsActive(false); // Desativa o estado de hover
  };

  const handleClick = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <div
      className="card"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: size,
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <div className={`card-text ${isActive ? "active" : ""}`}>{text}</div>
      {showButton && (
        <button className="btn-join">
          <FontAwesomeIcon icon={buttonIcon} style={{ marginRight: "8px" }} />{" "}
          {buttonText}
        </button>
      )}
    </div>
  );
};

export default Card;
