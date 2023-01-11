import React, { Fragment } from "react";
import "./Portfolio.css";
import "../assets/images/project-dino.png";

const Projects2 = () => {
  return (
    <Fragment>
      <section className="portfolio-container">
        <div className="projects-container">
          <div className="project-small">
            <img
              className="projects-image-small"
              src="src\assets\images\project-budget.png"
            />
          </div>
          <div className="project-small">
            <img
              className="projects-image-small"
              src="src\assets\images\project-memory-game.png"
            />
          </div>
        </div>
        <div className="projects-container">
          <div className="project-small">
            <img
              className="projects-image-small"
              src="src\assets\images\project-dino.png"
            />
          </div>
          <div className="project-small">
            <img
              className="projects-image-small"
              src="src\assets\images\project-dino.png"
            />
          </div>
        </div>

        <div className="project-long">
          <img
            className="projects-image-long"
            src="src\assets\images\project-dino.png"
          />
        </div>
        <div className="project-long">
          <img
            className="projects-image-long"
            src="src\assets\images\project-dino.png"
          />
        </div>
      </section>
    </Fragment>
  );
};

export default Projects2;
