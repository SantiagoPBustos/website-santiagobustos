import Link from "next/link";
import styles from "./styles.module.css";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Preferences() {
  const handleChangeLenguage = (e: any) => {
    console.log(e);
  };

  return (
    <nav className={`${styles.preferences}`}>
      <Link href={"/"} target="_blank">
        Musica
      </Link>
      <Link onClick={handleChangeLenguage} href={"/"} target="_blank">
        Idioma
      </Link>
    </nav>
  );
}
