import styles from "./styles.module.css";
import LocaleSwitcher from "../../subComponentsUI/LocaleSwitcher/LocaleSwitcher";
import SoundBar from "@/subComponentsUI/SoundBar/SoundBar";

type Props = {
  title: string;
};

export default function AboutInfo({ title = "" }: Props) {
  return (
    <div>
      <div className="about-me">
        <p className="title" id="about">
          <span className="number-title">01. </span>
          {title}
        </p>
        <div className="line-title"></div>
      </div>
      <div style={{ paddingRight: 50, paddingBottom: 50 }}>
        <p>
          I'm passionate about web and mobile development I have knowledge in
          software development phases and technologies such as Typescript,
          Javascript, ReactJS, Angular, NextJS, MySQL, Oracle, MongoBD Java,
          Visual Basic, C#. Currently i´m student in academic completion of
          Systems Engineering and Computation at the Universidad Pedagogica y
          Tecnologica de Colombia one of the best public universities in the
          country obtained good grades and results in my college career. I have
          fast learning ability, good programming logic, good communication
          skills, interested in continuously learning new development
          technologies, I am responsible and organized.
        </p>
      </div>
    </div>
  );
}
