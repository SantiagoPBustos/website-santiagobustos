"use client";
import styles from "./style.module.css";
import React, { useRef, useState } from "react";

function SoundBar() {
  const ref = useRef<HTMLVideoElement | null>(null);
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
    if (ref.current) {
      if (!click) {
        ref.current.play();
      } else {
        ref.current.pause();
      }
    }
  };
  return (
    <div className={styles.box} onClick={handleClick}>
      <span
        className={`${styles.line}
      ${click ? styles.run : styles.paused}
      `}
      />
      <span
        className={`${styles.line}
      ${click ? styles.run : styles.paused}
      `}
      />
      <span
        className={`${styles.line}
      ${click ? styles.run : styles.paused}
      `}
      />
      <span
        className={`${styles.line}
      ${click ? styles.run : styles.paused}
      `}
      />
      <span
        className={`${styles.line}
      ${click ? styles.run : styles.paused}
      `}
      />
      <audio src={"/assets/music.mp3"} ref={ref} loop />
    </div>
  );
}
export default SoundBar;
