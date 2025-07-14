import { useParams } from "react-router-dom";
import projects from "../../assets/projects.js";
import { useState } from "react";
import { useEffect } from "react";
import "./ProjectDetail.css";

const ProjectDetail = () => {
  const { id } = useParams();
  const [prj, setPrj] = useState(null);
  const openWebsite = () => {
    window.open(prj.pj_url, "_blank");
  };
  const openGitHub = () => {
    window.open(prj.pj_github, "_blank");
  };

  useEffect(() => {
    setPrj(projects[id - 1]);
  }, []);

  return (
    <div className="prj-page">
      {prj && (
        <div className="prj-page-container">
          <h2>{prj.pj_name}</h2>
          <div className="pj-container">
            <div className="pj-container-left">
              <img
                key={prj.pj_name}
                src={prj.pj_img}
                alt={prj.pj_name}
                className="prj-page-img"
              />
            </div>
            <div className="pj-container-right">
              <div>
                <h3>Overview:</h3>
                <p>{prj.pj_overview}</p>
              </div>
              <div>
                <h3>Project Duration:</h3>
                <p>{prj.pj_time}</p>
              </div>
              <div>
                <h3>Used technologies:</h3>
                <p>{prj.pj_stack}</p>
              </div>
            </div>
          </div>
          <div className="prj-page-btns">
            <button onClick={openWebsite}>View live</button>
            <button onClick={openGitHub}>GitHub</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;
