import React from "react";
import "./Clouds.css";
import cloud1 from "../../assets/cloud1.png";
import cloud2 from "../../assets/cloud2.png";
import cloud3 from "../../assets/cloud3.png";
import cloud4 from "../../assets/cloud4.png";
import cloud5 from "../../assets/cloud5.png";
import cloud7 from "../../assets/cloud7.png";
import cloud8 from "../../assets/cloud8.png";
import cloud10 from "../../assets/cloud10.png";

function Clouds() {
  return (
    <div className="clouds">
      <div className="cloud-top">
        <img src={cloud7} alt="cloud" style={{ "--i": 2 }} />
        <img src={cloud8} alt="cloud" style={{ "--i": 4 }} />
        <img src={cloud10} alt="cloud" style={{ "--i": 8 }} />
      </div>
      <div className="cloud-center">
        <img src={cloud7} alt="cloud" style={{ "--i": 2 }} />
        <img src={cloud8} alt="cloud" style={{ "--i": 5 }} />
        <img src={cloud10} alt="cloud" style={{ "--i": 8 }} />
      </div>
      <div className="cloud-bottom">
        <img src={cloud1} alt="cloud" style={{ "--i": 1 }} />
        <img src={cloud2} alt="cloud" style={{ "--i": 2 }} />
        <img src={cloud3} alt="cloud" style={{ "--i": 3 }} />
        <img src={cloud4} alt="cloud" style={{ "--i": 4 }} />
        <img src={cloud5} alt="cloud" style={{ "--i": 5 }} />
      </div>
    </div>
  );
}

export default Clouds;
