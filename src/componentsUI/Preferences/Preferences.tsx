import Link from "next/link";
import styles from "./styles.module.css";
import Image from "next/image";

export default function Preferences() {
  return (
    <nav className={`${styles.preferences}`}>
      <Link href={"/"} target="_blank">
        Musica
      </Link>
      <Link href={"/"} target="_blank">
        Idioma
      </Link>
    </nav>
  );
}
