import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons"; // Importando o ícone
import "./ProjectButton.css";

const GlowButton = () => {
  return (
    <button className="btn">
      See my work
      <FontAwesomeIcon icon={faPaperPlane} className="icon" />{" "}
    </button>
  );
};

export default GlowButton;
