import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className={"navbar"}>
      <div className="nav-item" onClick={() => scrollToSection("about")}>
        About
      </div>
      <div
        className="nav-item"
        onClick={() => scrollToSection("projects-section")}
      >
        Projects
      </div>
      <div className="nav-item" onClick={() => scrollToSection("career")}>
        Career
      </div>

      <div className="nav-item" onClick={() => scrollToSection("zyra-title")}>
        Zyra
      </div>
      <div
        className="nav-item"
        onClick={() => scrollToSection("email-container")}
      >
        Contact
      </div>
    </div>
  );
};

const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

export default Navbar;
