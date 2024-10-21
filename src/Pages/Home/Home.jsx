import React from "react";
import ParticleScreen from "../../Components/Particles/ParticleScreen";
import Navbar from "../../Components/Navbar/Navbar";
import About from "../../Pages/About/About";
import Projects from "../../Pages/Project/Project";
import TimelineComponent from "../../Components/TimelineComponent/TimelineComponent";
import Tecnologies from "../Tecnologies/Tecnologies";
import Details from "../Details/Details";
import ArtificialIntelligence from "../IA/AI";
import Footer from "../../Components/Footer/Footer";
import Introduction from "../Introduction/Introduction";
import Contact from "../Contact/Contact";
import "./Home.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Home() {
  return (
    <div className="banner-bg">
      <ParticleScreen />
      <Navbar />
      <div className="content">
        <Introduction />
        <About />
        <Projects />
        <TimelineComponent />
        <Details />
        <Contact />
        <ArtificialIntelligence />
        <Tecnologies />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
