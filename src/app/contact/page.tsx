"use client";

import { useState } from "react";

export default function Contact() {
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: any) => {
    const { clientX, clientY } = event;
    setCoordinates({ x: clientX, y: clientY });
  };

  const backgroundStyle = {
    background: `radial-gradient(circle at ${coordinates.x}px ${coordinates.y}px, #192b5c 0%, #0E172B 400px)`,
  };
  return (
    <div
      className="principal-wrapper"
      style={{ ...backgroundStyle }}
      onMouseMove={handleMouseMove}
    ></div>
  );
}
