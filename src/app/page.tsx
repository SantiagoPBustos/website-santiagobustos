"use client";

import Image from "next/image";
import { useState } from "react";
import Switcher from "../componentsUI/ThemeSwitcher/switcher";

export default function Home() {
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: any) => {
    const { clientX, clientY } = event;
    setCoordinates({ x: clientX, y: clientY });
    console.log(coordinates);
  };

  const backgroundStyle = {
    background: `radial-gradient(circle at ${coordinates.x}px ${coordinates.y}px, #101F43 5%, #0E172B 450px)`,
  };

  return (
    <>
      <header></header>
      <main style={{ ...backgroundStyle }} onMouseMove={handleMouseMove}>
        <section>
          <Switcher />
        </section>
      </main>
    </>
  );
}
