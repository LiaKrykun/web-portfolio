import React from "react";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import "./Toggle.css";

// Toggle component with just icon
export const Toggle = ({ handleChange, isChecked }) => {
  const toggle_img = isChecked ? moon : sun;

  return (
    <div className="toggle-container icon-toggle" onClick={handleChange}>
      <img
        className="check-img"
        src={toggle_img}
        alt={isChecked ? "moon icon" : "sun icon"}
      />
    </div>
  );
};
