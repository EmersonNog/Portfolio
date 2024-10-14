import React from "react";
import "./Navbar.css";

const Navbar = () => {
  const handleHomeClick = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="navbar">
      <div className="nav-item" onClick={handleHomeClick}>
        About
      </div>
      <div className="nav-item">Projects</div>
      <div className="nav-item">Career</div>
      <div className="nav-item">Contact</div>
    </div>
  );
};

export default Navbar;
