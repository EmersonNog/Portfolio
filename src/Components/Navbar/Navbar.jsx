import React from "react";
import "./Navbar.css";

const Navbar = () => {
  const handleHomeClick = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleProjectsClick = () => {
    const projectsSection = document.getElementById("projects-section");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleCareerClick = () => {
    const projectsSection = document.getElementById("career-title");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="navbar">
      <div className="nav-item" onClick={handleHomeClick}>
        About
      </div>
      <div className="nav-item" onClick={handleProjectsClick}>
        Projects
      </div>
      <div className="nav-item" onClick={handleCareerClick}>
        Career
      </div>
      <div className="nav-item">Contact</div>
    </div>
  );
};

export default Navbar;
