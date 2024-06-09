import styles from "./styles.module.css";

type Props = {
  about: string;
  experience: string;
  skills: string;
  education: string;
  projects: string;
};

export default function NavBar({
  about = "",
  experience = "",
  skills = "",
  education = "",
  projects = "",
}: Props) {
  return (
    <nav className={`${styles.navStyles}`}>
      <ul>
        <li>
          <a href="#about">
            <span className={`${styles.span}`} />
            <span>{about}</span>
          </a>
        </li>
        <li>
          <a href="#education">
            <span className={`${styles.span}`}></span>
            <span>{education}</span>
          </a>
        </li>
        <li>
          <a href="#projects">
            <span className={`${styles.span}`} />
            <span>{projects}</span>
          </a>
        </li>
        <li>
          <a href="#experience">
            <span className={`${styles.span}`}></span>
            <span>{experience}</span>
          </a>
        </li>
        <li>
          <a href="#skills">
            <span className={`${styles.span}`}></span>
            <span>{skills}</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}
