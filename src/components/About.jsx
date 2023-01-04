import React, { Fragment } from "react";
import "./About.css";

const About = () => {
  return (
    <Fragment>
      <section className="about-container">
        <div className="about-main-text">
          <h3>Hi, my name is</h3>
          <h1>Hyago Eurico</h1>
          <h2>I build things for the web</h2>
        </div>
        <div className="glow-circle"></div>

        <div className="about-container-info">
          <div>
            <p>
              I'm a <span>Frontend Web Developer</span> building the Front-end
              of Websites and Web Applications that leads to the success of the
              overall product. Check out some of my work in the{" "}
              <span>Projects</span> section.
            </p>

            <p>
              I'm open to <span>Job</span> opportunities where I can contribute,
              learn and grow. If you have a good opportunity that matches my
              skills and experience then don't hesitate to <span>contact</span>{" "}
              me.
            </p>
          </div>
        </div>
        <div className="about-container-skill">
          <h1>My Skills</h1>
          <div className="skills">
            <div className="skill">HTML</div>
            <div className="skill">CSS</div>
            <div className="skill">JavaScript</div>
            <div className="skill">TypeScript</div>
            <div className="skill">React </div>
            <div className="skill">GIT</div>
            <div className="skill">Github</div>
            <div className="skill">Responsive Design</div>
            <div className="skill">Terminal</div>
            <div className="skill">SQL Basics</div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default About;
