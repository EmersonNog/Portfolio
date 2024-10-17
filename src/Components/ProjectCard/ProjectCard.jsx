import React from "react";
import "./ProjectCard.css";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const ProjectCard = ({
  images,
  title,
  subtitle,
  description,
  technologies,
  buttonText,
  link,
}) => {
  const settings = {
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="project-card">
      <div className="project-image-container">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <img
                src={image}
                alt={`${title} - ${index}`}
                className="project-image"
              />
            </div>
          ))}
        </Slider>
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
