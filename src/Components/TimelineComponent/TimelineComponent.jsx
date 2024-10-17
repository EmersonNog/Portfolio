import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Certare from "../../Assets/Images/logos/certare.jpg";
import Facepe from "../../Assets/Images/logos/facepe.png";
import Fapepi from "../../Assets/Images/logos/fapepi.png";
import "./TimelineComponent.css";

function TimelineComponent() {
  const timelineItems = [
    {
      date: "April 2023 - the moment",
      title: ["Certare Engineering and Consulting"],
      description:
        "I worked with cutting-edge technologies, developing skills in data science, creating fullstack web and mobile applications, and developing geospatial analysis algorithms with Python, always focusing on transforming data into strategic information.",
      icon: Certare,
      keyWords: ["Innovation", "Research", "Development", "Data Science"],
    },
    {
      date: "April 2023 - May 2024",
      title: "Piauí State Research Support Foundation",
      description:
        "I worked on developing a web platform for diagnosing the youth of Piauí, utilizing data provided by government institutions. The platform aims to offer a comprehensive analysis of the situation of youth in the region, facilitating access to essential information for formulating public policies and actions aimed at youth development.",
      icon: Fapepi,
      keyWords: ["Innovation", "Development", "Data Science"],
    },
    {
      date: "March 2024 - June 204",
      title:
        "Foundation for the Support of Science and Technology of the State of Pernambuco",
      description:
        "I worked on developing a web GIS platform that provides predictive analyses of risk areas by integrating data from satellite images, sensors, government information, and drones. The goal is to prevent and manage crises related to heavy rainfall in urban slopes.",
      icon: Facepe,
      keyWords: ["Innovation", "Development", "Web GIS"],
    },
  ];

  return (
    <main className="career-container">
      <h1 className="name-title-career" id="career">
        My Professional <span className="career">Career</span>
      </h1>
      <VerticalTimeline lineColor="#CBACF9">
        {timelineItems.map((item, index) => (
          <VerticalTimelineElement
            contentArrowStyle={{
              borderRight: "7px solid #0C1327",
            }}
            contentStyle={{
              backgroundColor: "#0C1327",
            }}
            key={index}
            date={item.date}
            iconStyle={{
              background: "white",
              border: "2px solid #CBACF9",
              boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
            }}
            icon={
              <img src={item.icon} alt={item.title} className="timeline-icon" />
            }
          >
            <div className="keywords-container">
              {item.keyWords.map((word, idx) => (
                <div key={idx} className="keyword">
                  {word}
                </div>
              ))}
            </div>
            <h3 className="vertical-timeline-element-title">{item.title}</h3>
            <p className="vertical-timeline-element-description">
              {item.description}
            </p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </main>
  );
}

export default TimelineComponent;
