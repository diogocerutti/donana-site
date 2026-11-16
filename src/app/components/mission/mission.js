import styles from "./mission.module.css";
import fachada from "../../../../public/img/fachada-nova.jpeg";
import { GlobalTitle, GlobalSubtitle } from "@/components/text/text";
import { playfair } from "@/fonts/fonts";
import { TargetIcon, EyeIcon, HeartIcon } from "@/components/svg/svg";
import data from "@/data/data.json";

export default function Mission() {
  return (
    // <div className={styles.mission}>
    //   <img className={styles.image} src={fachada.src} />
    //   <div className={styles.text}>
    //     <GlobalTitle title="Nossa Missão" />
    //     <GlobalSubtitle subtitle="Alimentar a alma das pessoas com amor e alegria, compartilhando o pão nosso de cada dia!" />
    //   </div>
    // </div>
    <div className={styles.valuesBox}>
      <div className={styles.valueItem}>
        <div className={styles.icon}>
          <TargetIcon />
        </div>
        <h1 className={`${styles.title} ${playfair.className}`}>Missão</h1>
        <p>{data.contact.mission}</p>
      </div>
      <div className={styles.valueItem}>
        <div className={styles.icon}>
          <EyeIcon />
        </div>
        <h1 className={`${styles.title} ${playfair.className}`}>Visão</h1>
        <p>{data.contact.vision}</p>
      </div>
      <div className={styles.valueItem}>
        <div className={styles.icon}>
          <HeartIcon />
        </div>
        <h1 className={`${styles.title} ${playfair.className}`}>Valores</h1>
        <p>{data.contact.values}</p>
      </div>
    </div>
  );
}
