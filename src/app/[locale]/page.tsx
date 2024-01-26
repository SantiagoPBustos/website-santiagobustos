"use client";

import { useState } from "react";
import Preferences from "@/componentsUI/Preferences/Preferences";
import Logo from "@/subComponentsUI/Logo/Logo";
import PersonalInfo from "@/componentsUI/PersonalInfo/PersonalInfo";
import { useTranslations } from "next-intl";

export default function Home() {
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: any) => {
    const { clientX, clientY } = event;
    setCoordinates({ x: clientX, y: clientY });
  };

  const backgroundStyle = {
    background: `radial-gradient(circle at ${coordinates.x}px ${coordinates.y}px, #192b5c 0%, #0E172B 700px)`,
  };

  const t = useTranslations("IndexPage");

  return (
    <div
      className="principal-wrapper"
      style={{ ...backgroundStyle }}
      onMouseMove={handleMouseMove}
    >
      <header className="headers-wrapper content-left">
        <Logo />
        <Preferences />
      </header>
      <main className="page-wrapper">
        <section className="side-wrapper"></section>
        <section className="sticky-wrapper">
          <PersonalInfo title={t("title")} />
        </section>
        <section className="content-wrapper"></section>
        <section className="side-wrapper"></section>
      </main>
      <footer className="headers-wrapper"></footer>
    </div>
  );
}
