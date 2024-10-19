import React from "react";
import ChatComponent from "../../Components/Chat/Chat";
import AnimatedSection from "../../Components/Animate/Animate";
import "./AI.css";

const ArtificialIntelligence = () => {
  return (
    <AnimatedSection>
      <div className="zyra-container">
        <h1 className="zyra-title" id="zyra-title">
          Meet <span className="zyra">Zyra</span>: My AI Companion
        </h1>
        <ChatComponent />
      </div>
    </AnimatedSection>
  );
};

export default ArtificialIntelligence;
