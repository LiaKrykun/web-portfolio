import React from "react";
import "./About.css";

function About() {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
      </div>
      <div className="about-sections">
        <div className="about-left">
          <div className="about-me">
            <p>
              Front-End Web Developer with skills in web design and development,
              specializing in HTML/CSS, JavaScript, and React. Experienced in
              building responsive, user-friendly websites and designing
              interactive prototypes.
            </p>
            <p>
              As a career changer from digital marketing and cake decoration, I
              apply creativity and visual storytelling to build clear and
              user-centered digital experiences.
            </p>

            <a href="/files/resume.pdf" download className="resume">
              <button className="resume-btn">Resume</button>
            </a>
          </div>
        </div>
        <div className="about-right">
          <div className="about-skills">
            <div className="skill">
              <p>HTML, CSS, Bootstrap</p>
              <hr style={{ width: "100%" }} />
            </div>
            <div className="skill">
              <p>ReactJS</p>
              <hr style={{ width: "85%" }} />
            </div>
            <div className="skill">
              <p>JavaScript</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="skill">
              <p>Figma, Adobe XD</p>
              <hr style={{ width: "90%" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
