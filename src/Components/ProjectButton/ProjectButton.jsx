import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import "./ProjectButton.css";

const GlowButton = () => {
  const handleProjectsClick = () => {
    const projectsSection = document.getElementById("projects-section");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button className="btn" onClick={handleProjectsClick}>
      See my work
      <FontAwesomeIcon icon={faPaperPlane} className="icon" />{" "}
    </button>
  );
};

export default GlowButton;
