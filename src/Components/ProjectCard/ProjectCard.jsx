import React from "react";
import "./ProjectCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const ProjectCard = ({
  image,
  title,
  subtitle,
  description,
  technologies,
  buttonText,
  link,
}) => {
  return (
    <div className="project-card">
      <div className="project-image-container">
        <img src={image} alt={title} className="project-image" />
      </div>
      <h3 className="project-title">{title}</h3>
      <h4 className="project-subtitle">{subtitle}</h4>
      <p className="project-description">{description}</p>
      <div className="button-tech-container">
        <div className="technology-icons">
          {technologies.map((tech, index) => (
            <div key={index} className="technology-icon">
              <img src={tech.logo} alt={tech.name} className="tech-logo" />
            </div>
          ))}
        </div>
        <div className="button-icon-container">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-button"
          >
            {buttonText}
          </a>
          <FontAwesomeIcon icon={faPaperPlane} className="send-icon" />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
