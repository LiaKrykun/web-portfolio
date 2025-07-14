import "./GradientText.css";

import { useEffect, useRef } from "react";

export default function GradientText({
  children,
  className = "",
  colors = ["#D292BC", "rgb(174, 107, 79)", "#944C7B", "#2c3b6a", "#4B6FFF"],
  animationSpeed = 8,
  showBorder = false,
}) {
  const gradientRef = useRef(null);
  const borderRef = useRef(null);

  useEffect(() => {
    const style = `linear-gradient(to right, ${colors.join(", ")})`;
    if (gradientRef.current) {
      gradientRef.current.style.setProperty(
        "background-image",
        style,
        "important"
      );
      gradientRef.current.style.setProperty(
        "animation-duration",
        `${animationSpeed}s`
      );
    }
    if (showBorder && borderRef.current) {
      borderRef.current.style.setProperty(
        "background-image",
        style,
        "important"
      );
      borderRef.current.style.setProperty(
        "animation-duration",
        `${animationSpeed}s`
      );
    }
  }, [colors, animationSpeed, showBorder]);

  return (
    <div className={`animated-gradient-text ${className}`}>
      {showBorder && <div className="gradient-overlay" ref={borderRef}></div>}
      <div className="text-content" ref={gradientRef}>
        {children}
      </div>
    </div>
  );
}
