import React, { Fragment } from "react";
import "./Portfolio.css";
import "../assets/images/project-dino.png";

const Projects = () => {
  return (
    <Fragment>
      <section className="portfolio-container">
        <div className="project-big">
          <img
            className="projects-image-big"
            src="src\assets\images\project-dino.png"
          />
        </div>
        <div className="projects-container">
          <div className="project-small">
            <img
              className="projects-image-small"
              src="src\assets\images\project-ocean.png"
            />
          </div>
          <div className="project-small">
            <img
              className="projects-image-small"
              src="src\assets\images\project-youtube.png"
            />
          </div>
        </div>
        <div className="project-long">
          <img
            className="projects-image-long"
            src="src\assets\images\project-portfolio.png"
          />
        </div>
      </section>
    </Fragment>
  );
};

export default Projects;
