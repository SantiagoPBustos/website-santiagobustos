"use client";

import { useState } from "react";
import "./globals.css";
import Preferences from "@/componentsUI/Preferences/Preferences";

export default function Home() {
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: any) => {
    const { clientX, clientY } = event;
    setCoordinates({ x: clientX, y: clientY });
  };

  const backgroundStyle = {
    background: `radial-gradient(circle at ${coordinates.x}px ${coordinates.y}px, #101E44 5%, #0E172B 400px)`,
  };

  return (
    <div
      className="principal-wrapper"
      style={{ ...backgroundStyle }}
      onMouseMove={handleMouseMove}
    >
      <div className="page-wrapper">
        <div className="sticky-wrapper">
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, y
          </p>
        </div>
        <div className="side-wrapper">
          <div>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text. All the Lorem Ipsum generators on
              the Internet tend to repeat predefined chunks as necessary, making
              this the first true generator on the Internet. It uses a
              dictionary of over 200 Latin words, combined with a handful of
              model sentence structures, to generate Lorem Ipsum which looks
              reasonable. The generated Lorem Ipsum is therefore always free
              from repetition, injected humour, or non-characteristic words
              etc.There are many There are many variations of passages of Lorem
              Ipsum available, but the majority have suffered alteration in some
              form, by injected humour, or randomised words which don't look
              even slightly believable. If you are going to use a passage of
              Lorem Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text. All the Lorem Ipsum generators on
              the Internet tend to repeat predefined chunks as necessa
            </p>
          </div>
          <div>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text. All the Lorem Ipsum generators on
              the Internet tend to repeat predefined chunks as necessary, making
              this the first true generator on the Internet. It uses a
              dictionary of over 200 Latin words, combined with a handful of
              model sentence structures, to generate Lorem Ipsum which looks
              reasonable. The generated Lorem Ipsum is therefore always free
              from repetition, injected humour, or non-characteristic words
              etc.There are many There are many variations of passages of Lorem
              Ipsum available, but the majority have suffered alteration in some
              form, by injected humour, or randomised words which don't look
              even slightly believable. If you are going to use a passage of
              Lorem Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text. All the Lorem Ipsum generators on
              the Internet tend to repeat predefined chunks as necessa
            </p>
          </div>
        </div>
      </div>

      <Preferences />
    </div>
  );
}
