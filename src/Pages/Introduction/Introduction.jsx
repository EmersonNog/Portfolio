import React from "react";
import GlowButton from "../../Components/ProjectButton/ProjectButton";
import AnimatedSection from "../../Components/Animate/Animate";
import "./Introduction.css";

function Introduction() {
  return (
    <div className="introduction-container">
      <AnimatedSection direction="bottom">
        <h1 className="introduction">Websites & Apps? I speak fluent code</h1>
        <p className="name-title">
          Transforming Concepts Into Seamless{" "}
          <span id="ux">User Experiences</span>
        </p>
        <h2 className="developer-info">
          Hi, I'm Nogueira, a Full Stack Developer and Geospatial Analyst based
          in Brazil
        </h2>
        <GlowButton />
      </AnimatedSection>
    </div>
  );
}

export default Introduction;
