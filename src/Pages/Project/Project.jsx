import React from "react";
import "./Project.css";
import ProjectCard from "../../Components/ProjectCard/ProjectCard";
import AnimatedSection from "../../Components/Animate/Animate";
import ReactIcon from "../../Assets/Images/tecnology/ReactIcon.png";
import PostgresIcon from "../../Assets/Images/tecnology/postgres.png";
import NodeIcon from "../../Assets/Images/tecnology/node.svg";
import TypescriptIcon from "../../Assets/Images/tecnology/Typescript.png";
import DartIcon from "../../Assets/Images/tecnology/dart.png";
import FlutterIcon from "../../Assets/Images/tecnology/flutter.png";
import FirebaseIcon from "../../Assets/Images/tecnology/firebase.png";
import PythonIcon from "../../Assets/Images/tecnology/python.png";
import QtIcon from "../../Assets/Images/tecnology/qt.png";
import GDALIcon from "../../Assets/Images/tecnology/gdal.png";
import Pepe1 from "../../Assets/Images/projects/PEPE1.png";
import Pepe2 from "../../Assets/Images/projects/PEPE2.png";
import Pepe3 from "../../Assets/Images/projects/PEPE3.png";
import Engi1 from "../../Assets/Images/projects/Engi1.jpg";
import Engi2 from "../../Assets/Images/projects/Engi2.jpg";
import Engi3 from "../../Assets/Images/projects/Engi3.jpg";
import Plugin1 from "../../Assets/Images/projects/plugin1.jpg";
import Plugin2 from "../../Assets/Images/projects/plugin2.jpg";
import Plugin3 from "../../Assets/Images/projects/plugin3.jpg";
import Reurb1 from "../../Assets/Images/projects/reurb1.png";
import Reurb2 from "../../Assets/Images/projects/reurb2.png";
import Reurb3 from "../../Assets/Images/projects/reurb3.png";

const Projects = () => {
  return (
    <AnimatedSection>
      <section className="projects-section" id="projects-section">
        <h2 className="projects-title">
          A Small Section of <span id="text-project">Recent Projects</span>
        </h2>
        <div className="projects-grid">
          <ProjectCard
            images={[Pepe1, Pepe2, Pepe3]}
            title="Web GIS: Fast Cartography Solutions"
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
            images={[Engi1, Engi2, Engi3]}
            title="Engineer Contract Hub"
            description="This solution enables the complete management of construction contracts, providing a detailed and practical view of the entire process."
            technologies={[
              { name: "Dart", logo: DartIcon },
              { name: "Flutter", logo: FlutterIcon },
              { name: "Firebase", logo: FirebaseIcon },
            ]}
            buttonText="Check Repository"
            link="https://github.com/EmersonNog/EngiManage"
          />
          <ProjectCard
            images={[Plugin1, Plugin2, Plugin3]}
            title="Plugin in Open Source Software"
            description="Plugin integrated into the QGis software that extracts road network data from anywhere in the world."
            technologies={[
              { name: "Python", logo: PythonIcon },
              { name: "Qt", logo: QtIcon },
              { name: "GDAL", logo: GDALIcon },
            ]}
            buttonText="Check Repository"
            link="https://github.com/EmersonNog/plugin-route-builder-qgis"
          />
          <ProjectCard
            images={[Reurb1, Reurb2, Reurb3]}
            title="Web Plataform for Urban Land Regularization"
            description="Online GIS with user authentication, PDF generation from Postgres data, and GeoServer connection for vector layers."
            technologies={[
              { name: "React", logo: ReactIcon },
              { name: "NodeJS", logo: NodeIcon },
              { name: "PostgreSQL", logo: PostgresIcon },
            ]}
            buttonText="Check Repository"
            link="https://github.com/EmersonNog/webgis-geoserver-caucaia"
          />
        </div>
      </section>
    </AnimatedSection>
  );
};

export default Projects;
