// Components/About.js
import React from "react";
import Card from "../../Components/Card/Card";
import b1 from "../../Assets/Images/b1.svg";
import b4 from "../../Assets/Images/b4.svg";
import b5 from "../../Assets/Images/b5.svg";
import globe from "../../Assets/Images/globe.jpg";
import stack from "../../Assets/Images/stack.jpg";
import background_card from "../../Assets/Images/background_card.jpg";
import "./About.css";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="large-card">
        <Card
          backgroundImage={b1}
          text="I prioritize client collaboration, fostering open communication"
        />
      </div>
      <div className="small-cards">
        <Card
          backgroundImage={b4}
          text="I'm very flexible with time zone communications"
          size="contain"
        />
        <Card
          backgroundImage={stack}
          text="I constantly try to improve My tech stack"
        />
      </div>
      <section className="small-cards-below">
        <div className="small-cards">
          <Card
            backgroundImage={globe}
            text="Tech enthusiast with a passion for development."
          />
          <Card
            backgroundImage={background_card}
            text="Let's start a project together!"
            showButton={true}
          />
        </div>
        <div className="large-card-below">
          <Card
            backgroundImage={b5}
            text="The Inside Scoop Building a GeoPlatform for transport in Brazil."
            size="contain"
          />
        </div>
      </section>
    </section>
  );
};

export default About;
