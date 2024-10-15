// src/Pages/Home/Home.js

import React from "react";
import "../Home/Home.css";
import ParticleScreen from "../../Components/Particles/ParticleScreen";
import GlowButton from "../../Components/ProjectButton/ProjectButton";
import Navbar from "../../Components/Navbar/Navbar";
import About from "../../Pages/About/About";
import Projects from "../../Pages/Project/Project"; // Importe o novo componente

function Home() {
  return (
    <div className="banner-bg">
      <ParticleScreen />
      <div className="content">
        <Navbar />
        <h1 className="introduction">Websites & Apps? I speak fluent code</h1>
        <p className="name-title">
          Transforming Concepts into Seamless{" "}
          <span id="ux">User Experiences</span>
        </p>
        <h2 className="developer-info">
          Hi, I'm Nogueira, a Full Stack Developer based in Brazil
        </h2>
        <GlowButton />
        <About />
        <Projects />
        <h2 className="career-title">
          Professional <span className="career-text">Career</span>
        </h2>
      </div>
    </div>
  );
}

export default Home;
