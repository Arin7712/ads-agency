"use client";
import React, { useEffect, useState } from "react";

const BallCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", moveCursor);

    // Hide default cursor when custom cursor is active
    document.body.style.cursor = "none";

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.body.style.cursor = "default"; // Reset the cursor when the component unmounts
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 z-50 pointer-events-none"
      style={{
        transform: `translate3d(${position.x - 25}px, ${position.y - 25}px, 0)`,
        transition: "transform 0.05s ease-out",
      }}
    >
      {/* Ball with text inside */}
      <div
        className="w-30 h-30 bg-white rounded-full flex justify-center items-center text-center"
        style={{ position: "absolute" }}
      >
        <span className="text-black text-xs font-semibold uppercase">Watch<br/>reel</span>
      </div>

      {/* Text below the ball */}
      <div
        className="absolute top-30 left-4 flex text-center transform mt-2 text-white text-xs"
        style={{
          whiteSpace: "nowrap",
        }}
      >
        BASIC/DEPT®<br/>
      </div>
    </div>
  );
};

export default BallCursor;
