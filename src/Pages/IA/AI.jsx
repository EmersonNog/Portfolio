import React from "react";
import ChatComponent from "../../Components/Chat/Chat";
import "./AI.css";

const ArtificialIntelligence = () => {
  return (
    <div className="zyra-container">
      <h1 className="zyra-title" id="zyra-title">
        Meet <span className="zyra">Zyra</span>: My AI Companion
      </h1>
      <ChatComponent />
    </div>
  );
};

export default ArtificialIntelligence;
