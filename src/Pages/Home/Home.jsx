// src/Pages/Home/Home.jsx
import React from "react";
import ParticleScreen from "../../Components/Particles/ParticleScreen";
import GlowButton from "../../Components/ProjectButton/ProjectButton";
import Navbar from "../../Components/Navbar/Navbar";
import About from "../../Pages/About/About";
import Projects from "../../Pages/Project/Project";
import TimelineComponent from "../../Components/TimelineComponent/TimelineComponent";
import AnimatedSection from "../../Components/Animate/Animate";
import Tecnologies from "../Tecnologies/Tecnologies";
import "./Home.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Details from "../Details/Details";
import ArtificialIntelligence from "../IA/AI";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";

function Home() {
  return (
    <div className="banner-bg">
      <ParticleScreen />
      <div className="content">
        <Navbar />

        <AnimatedSection direction="bottom">
          <h1 className="introduction">Websites & Apps? I speak fluent code</h1>
          <p className="name-title">
            Transforming Concepts Into Seamless{" "}
            <span id="ux">User Experiences</span>
          </p>
          <h2 className="developer-info">
            Hi, I'm Nogueira, a Full Stack Developer based in Brazil
          </h2>
          <GlowButton />
        </AnimatedSection>

        <About />
        <Projects />
        <TimelineComponent />
        <Details />
        <ArtificialIntelligence />
        <Tecnologies />

        <h1>(Building Footer...)</h1>
        <br />
        <FontAwesomeIcon icon={faGear} size="3x" />
        <br />
        <br />
      </div>
    </div>
  );
}

export default Home;
