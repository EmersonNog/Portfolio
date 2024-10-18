import React from "react";
import Card from "../../Components/Card/Card";
import AnimatedSection from "../../Components/Animate/Animate";
import b1 from "../../Assets/Images/backgrounds/b1.svg";
import b4 from "../../Assets/Images/backgrounds/b4.svg";
import b5 from "../../Assets/Images/backgrounds/b5.svg";
import globe from "../../Assets/Images/backgrounds/globe.jpg";
import stack from "../../Assets/Images/backgrounds/stack.jpg";
import background_card from "../../Assets/Images/backgrounds/background_card.jpg";
import "./About.css";

const About = () => {
  return (
    <section className="about" id="about">
      <AnimatedSection direction="left" duration={3}>
        <div className="large-card">
          <Card
            backgroundImage={b1}
            text="I prioritize client collaboration, fostering open communication"
          />
        </div>
      </AnimatedSection>
      <AnimatedSection direction="right" duration={3}>
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
      </AnimatedSection>
      <section className="small-cards-below">
        <AnimatedSection direction="left" duration={3}>
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
        </AnimatedSection>
        <AnimatedSection direction="right" duration={3}>
          <div className="large-card-below">
            <Card
              backgroundImage={b5}
              text="The Inside Scoop: Building a GeoPlatform for transport in Brazil."
              size="contain"
            />
          </div>
        </AnimatedSection>
      </section>
    </section>
  );
};

export default About;
