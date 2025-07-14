import React, { useEffect, useRef, useState } from "react";
import Lottie from "lottie-react";
import cursorAnimation from "../assets/animations/wired-lineal-1145-wings-hover-pinch.json";

export default function CursorFollower() {
  const [target, setTarget] = useState({ x: 0, y: 0 });
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const animationFrameRef = useRef();

  useEffect(() => {
    const handleMove = (e) => {
      setTarget({ x: e.clientX, y: e.clientY });
    };

    const updatePosition = () => {
      setPosition((prev) => ({
        x: prev.x + (target.x - prev.x) * 0.02, // 0.1 is the easing (lower = slower)
        y: prev.y + (target.y - prev.y) * 0.02,
      }));
      animationFrameRef.current = requestAnimationFrame(updatePosition);
    };

    window.addEventListener("mousemove", handleMove);
    animationFrameRef.current = requestAnimationFrame(updatePosition);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, [target]);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 9999,
      }}
    >
      <div
        style={{
          position: "absolute",
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: "translate(-20%, -100%)",
          width: 100,
          height: 100,
        }}
      >
        <Lottie
          animationData={cursorAnimation}
          loop
          autoplay
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    </div>
  );
}
