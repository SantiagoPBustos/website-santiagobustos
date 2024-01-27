import styles from "./styles.module.css";

type Props = {
  universityDegree: string;
  descriptionPersonal: string;
};

export default function PersonalInfo({
  universityDegree = "",
  descriptionPersonal = "",
}: Props) {
  return (
    <div>
      <h1 className={`${styles.name}`}>Santiago Bustos</h1>
      <p className={`${styles.title}`}>{universityDegree}</p>
      <p className={`${styles.description}`}>{descriptionPersonal}</p>
    </div>
  );
}
