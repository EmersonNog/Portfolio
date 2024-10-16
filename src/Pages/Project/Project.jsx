import React from "react";
import "./Project.css";
import ProjectCard from "../../Components/ProjectCard/ProjectCard";
import ReactIcon from "../../Assets/Images/react.svg";
import PostgresIcon from "../../Assets/Images/postgres.png";
import NodeIcon from "../../Assets/Images/node.svg";
import TypescriptIcon from "../../Assets/Images/typescript.svg";
import DartIcon from "../../Assets/Images/dart.png";
import FlutterIcon from "../../Assets/Images/flutter.png";
import FirebaseIcon from "../../Assets/Images/firebase.png";
import PythonIcon from "../../Assets/Images/python.png";
import QtIcon from "../../Assets/Images/qt.png";
import GDALIcon from "../../Assets/Images/gdal.png";
import Proj1 from "../../Assets/Images/PEPE.png";
import Proj2 from "../../Assets/Images/EngiManager.jpg";
import Proj3 from "../../Assets/Images/plugin.jpg";
import Proj4 from "../../Assets/Images/reurb.png";

const Projects = () => {
  return (
    <section className="projects-section" id="projects-section">
      <h2 className="projects-title">
        A Small Section of <span id="text-project">Recent Projects</span>
      </h2>
      <div className="projects-grid">
        <ProjectCard
          image={Proj1}
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
          image={Proj2}
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
          image={Proj3}
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
          image={Proj4}
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
  );
};

export default Projects;
