import React from "react";
import ParticleScreen from "../../Components/Particles/ParticleScreen";
import GlowButton from "../../Components/ProjectButton/ProjectButton";
import Navbar from "../../Components/Navbar/Navbar";
import About from "../../Pages/About/About";
import Projects from "../../Pages/Project/Project";
import TimelineComponent from "../../Components/TimelineComponent/TimelineComponent";
import ImageLine from "../../Components/ImageLine/ImageLine";
import Firebase from "../../Assets/Images/services/firebase.svg";
import Hostinger from "../../Assets/Images/services/hostinger.png";
import PgAdmin from "../../Assets/Images/services/pgadmin.jpg";
import Geoserver from "../../Assets/Images/services/geoserver.png";
import Mongodb from "../../Assets/Images/services/mongodb.png";
import Vercel from "../../Assets/Images/services/vercel.png";
import "../Home/Home.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Home() {
  const images = [Firebase, Mongodb, PgAdmin, Geoserver, Hostinger, Vercel];
  return (
    <div className="banner-bg">
      <ParticleScreen />
      <div className="content">
        <Navbar />
        <h1 className="introduction">Websites & Apps? I speak fluent code</h1>
        <p className="name-title">
          Transforming Concepts Into Seamless{" "}
          <span id="ux">User Experiences</span>
        </p>
        <h2 className="developer-info">
          Hi, I'm Nogueira, a Full Stack Developer based in Brazil
        </h2>
        <GlowButton />
        <About />
        <Projects />
        <TimelineComponent />
        {/* <ImageLine images={images} /> */}

        <h1 className="who" id="who">
          Who <span>I Am</span> (Building...)
        </h1>
      </div>
    </div>
  );
}

export default Home;
