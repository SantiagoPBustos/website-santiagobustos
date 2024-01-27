import styles from "./styles.module.css";
import LocaleSwitcher from "../../subComponentsUI/LocaleSwitcher/LocaleSwitcher";
import SoundBar from "@/subComponentsUI/SoundBar/SoundBar";

export default function Preferences() {
  return (
    <nav className={`${styles.preferences}`}>
      <SoundBar />
      <LocaleSwitcher />
    </nav>
  );
}
