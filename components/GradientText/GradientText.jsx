import "./GradientText.css";

export default function GradientText({
  children,
  className = "",
  colors = [
    " #D292BC",
    "rgb(174, 107, 79)",
    " #944C7B",
    " #2c3b6a",
    " #4B6FFF",
  ],
  animationSpeed = 20,
  showBorder = false,
}) {
  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${colors.join(", ")})`,
    animationDuration: `${animationSpeed}s`,
  };

  return (
    <div className={`animated-gradient-text ${className}`}>
      {showBorder && (
        <div className="gradient-overlay" style={gradientStyle}></div>
      )}
      <div className="text-content" style={gradientStyle}>
        {children}
      </div>
    </div>
  );
}
