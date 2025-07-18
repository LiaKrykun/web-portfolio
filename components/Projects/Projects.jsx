import React from "react";
import "./Projects.css";
import projects from "../../assets/projects.js";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <div id="projects" className="card-area">
      <div className="projects-title">
        <h1>My Projects</h1>
      </div>
      <div className="wrapper box-area">
        {projects.map((pj, index) => {
          return (
            <div key={pj.pj_num || index}>
              <div className="box">
                <Link to={`/project/${pj.pj_num}`}>
                  <img key={index} src={pj.pj_img} alt="" />
                </Link>
                <div className="overlay">
                  <h2>{pj.pj_name}</h2>
                  <p>{pj.pj_stack}</p>
                  <Link className="prj-btn" to={`/project/${pj.pj_num}`}>
                    More details
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
