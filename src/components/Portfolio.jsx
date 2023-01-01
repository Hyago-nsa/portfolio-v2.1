import React, { Fragment } from "react";
import "./Portfolio.css";

const Projects = () => {
  return (
    <Fragment>
      <section className="portfolio-container">
        <div className="project-big">
            <h1 className="projects-text">Algum texto</h1>
            <h2 className="projects-subtext">Alguma descricao</h2>
        </div>
        <div className="projects-container">
          <div className="project-small"></div>
          <div className="project-small"></div>
        </div>
        <div className="project-long"></div>
        <div className="projects-container">
          <div className="project-small"></div>
          <div className="project-small"></div>
        </div>
        <div className="projects-container">
          <div className="project-small"></div>
          <div className="project-small"></div>
        </div>
      </section>
    </Fragment>
  );
};

export default Projects;
