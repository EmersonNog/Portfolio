import React from "react";
import "./Project.css";
import ProjectCard from "../../Components/ProjectCard/ProjectCard";
import ReactIcon from "../../Assets/Images/react.svg";
import PostgresIcon from "../../Assets/Images/postgres.png";
import NodeIcon from "../../Assets/Images/node.svg";
import TypescriptIcon from "../../Assets/Images/typescript.svg";
import Proj1 from "../../Assets/Images/proj1.png";

const Projects = () => {
  return (
    <section className="projects-section" id="projects-section">
      <h2 className="projects-title">
        A small section of <span id="text-project">recent projects</span>
      </h2>
      <div className="projects-grid">
        <ProjectCard
          image={Proj1}
          title="Fast Cartography"
          description="Analyze risks using satellite images and government data to prevent crises on urban slopes during heavy rains."
          technologies={[
            { name: "React", logo: ReactIcon },
            { name: "NodeJS", logo: NodeIcon },
            { name: "Typescript", logo: TypescriptIcon },
            { name: "PostgreSQL", logo: PostgresIcon },
          ]}
          buttonText="Check Live Site"
          link="https://dev.facepe.isitics.com/"
        />

        <ProjectCard
          image="project2.jpg"
          title="Project 2"
          subtitle="Mobile App"
          technologies={["Flutter", "Firebase", "Dart"]}
          buttonText="View Details"
          link="https://example.com/project2" // Adicione o link correto
        />
        <ProjectCard
          image="project3.jpg"
          title="Project 3"
          subtitle="Portfolio Website"
          technologies={["HTML", "CSS", "JavaScript"]}
          buttonText="View Details"
          link="https://example.com/project3" // Adicione o link correto
        />
        <ProjectCard
          image="project4.jpg"
          title="Project 4"
          subtitle="Data Analytics Dashboard"
          technologies={["Python", "Pandas", "Plotly"]}
          buttonText="View Details"
          link="https://example.com/project4" // Adicione o link correto
        />
      </div>
    </section>
  );
};

export default Projects;
