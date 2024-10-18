// src/Pages/Home/Details.jsx
import React from "react";
import InfoBox from "../../Components/InfoBox/InfoBox";
import "./Details.css";
import Dev from "../../Assets/Images/backgrounds/dev.svg";
import Web from "../../Assets/Images/backgrounds/web.svg";
import Mentor from "../../Assets/Images/backgrounds/mentor.svg";
import OpenSource from "../../Assets/Images/backgrounds/open_source.svg";
import AnimatedSection from "../../Components/Animate/Animate";

function Details() {
  return (
    <AnimatedSection>
      <main className="box-container">
        <h1 className="who-title">
          Did <span className="who">You Know?</span>
        </h1>
        <div className="info-box-container">
          <InfoBox
            imageSrc={Dev}
            text={"Software Developer"}
            subtitle={
              "As a full stack developer armed with more than 4 years of work experience, I've worked and walked with various organizations to bring their products to life. My tech stack includes React, Vite, Tailwind, Node.js, Express, Mongoose, MongoDB, Firebase, Postgres, and I also use Python for data science and Flutter for mobile development."
            }
          />
          <InfoBox
            imageSrc={Web}
            text={"Web Accessibility Consultant"}
            subtitle={
              "I'm an advocate for building responsive, accessible and inclusive digital products that help our clients achieve the best possible user experience."
            }
          />
          <InfoBox
            imageSrc={Mentor}
            text={"Mentor"}
            subtitle={
              "I ocassionally mentor students and young tech professionals starting their tech journey and help them navigate the tech industry by reviewing their projects and suggesting ideas for improvement."
            }
          />
          <InfoBox
            imageSrc={OpenSource}
            text={"Open-Source Contributor"}
            subtitle={
              "As an active open-source contributor and maintainer, I contribute to the development of code bases for QGIS, a GIS tool widely used for geospatial data analysis, focusing on adding features and optimizing performance."
            }
          />
        </div>
      </main>
    </AnimatedSection>
  );
}

export default Details;
