import styles from "./mission.module.css";
import { playfair } from "@/fonts/fonts";
import { TargetIcon, EyeIcon, HeartIcon } from "@/components/svg/svg";
import data from "@/data/data.json";

export default function Mission() {
  return (
    <div className={styles.valuesBox}>
      <div className={styles.valueItem}>
        <div className={styles.icon}>
          <TargetIcon />
        </div>
        <h1 className={playfair.className}>Missão</h1>
        <p>{data.contact.mission}</p>
      </div>
      <div className={styles.valueItem}>
        <div className={styles.icon}>
          <EyeIcon />
        </div>
        <h1 className={playfair.className}>Visão</h1>
        <p>{data.contact.vision}</p>
      </div>
      <div className={styles.valueItem}>
        <div className={styles.icon}>
          <HeartIcon />
        </div>
        <h1 className={playfair.className}>Valores</h1>
        <p>{data.contact.values}</p>
      </div>
    </div>
  );
}
