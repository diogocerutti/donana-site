import styles from "./about.module.css";
import fachada from "../../../../public/img/fachada.png";
import { playfair } from "../../fonts/fonts";

export default function About() {
  return (
    <div className={styles.about}>
      <img className={styles.image} src={fachada.src} />
      <div className={styles.text}>
        <p className={`${styles.title} ${playfair.className}`}>Nossa missão</p>
        <p className={styles.subtitle}>
          Alimentar a alma das pessoas com amor e alegria, compartilhando o pão
          nosso de cada dia!
        </p>
      </div>
    </div>
  );
}
