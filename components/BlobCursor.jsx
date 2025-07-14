"use client";
import { useTrail, animated } from "@react-spring/web";
import { useRef, useEffect } from "react";
import "./BlobCursor.css";

const fast = { tension: 1200, friction: 40 };
const slow = { mass: 10, tension: 200, friction: 50 };
const trans = (x, y) => `translate3d(${x}px,${y}px,0) translate3d(-50%,-50%,0)`;

// Helper lerp function for easing
const lerp = (start, end, amt) => start + (end - start) * amt;

const OFFSET_X = 30; // offset right of cursor
const OFFSET_Y = -20; // offset above cursor
const STOP_DISTANCE = 5; // minimum distance to stop near cursor

const BlobCursor = ({ blobType = "circle", fillColor = "#fegefe" }) => {
  const [trail, api] = useTrail(3, (i) => ({
    xy: [window.innerWidth / 2, window.innerHeight / 2], // start centered
    config: i === 0 ? fast : slow,
  }));

  // Store real cursor position here
  const cursorPos = useRef([window.innerWidth / 2, window.innerHeight / 2]);
  // Store current blob position here
  const blobPos = useRef([window.innerWidth / 2, window.innerHeight / 2]);

  useEffect(() => {
    // Update cursor position on mousemove anywhere in window
    const handleMouseMove = (e) => {
      cursorPos.current = [e.clientX, e.clientY];
    };
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    let animationFrameId;

    const animate = () => {
      const [bx, by] = blobPos.current;
      const [cx, cy] = cursorPos.current;

      // Target position = cursor + offset
      const targetX = cx + OFFSET_X;
      const targetY = cy + OFFSET_Y;

      const dx = targetX - bx;
      const dy = targetY - by;
      const distance = Math.sqrt(dx * dx + dy * dy);

      let newX = bx;
      let newY = by;

      // Move towards target if farther than STOP_DISTANCE
      if (distance > STOP_DISTANCE) {
        newX = lerp(bx, targetX, 0.15); // 0.15 = lag speed
        newY = lerp(by, targetY, 0.15);
      }

      blobPos.current = [newX, newY];
      api.start({ xy: blobPos.current });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationFrameId);
  }, [api]);

  return (
    <div className="container">
      <svg style={{ position: "absolute", width: 0, height: 0 }}>
        <filter id="blob">
          <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="30" />
          <feColorMatrix
            in="blur"
            values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 35 -10"
          />
        </filter>
      </svg>
      <div className="main">
        {trail.map((props, index) => (
          <animated.div
            key={index}
            style={{
              transform: props.xy.to(trans),
              borderRadius: blobType === "circle" ? "50%" : "0%",
              backgroundColor: fillColor,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default BlobCursor;
