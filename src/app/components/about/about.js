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
          Somos uma padaria que visa o melhor para o cliente, com serviço de
          qualidade e atendimento de excelência.
        </p>
      </div>
    </div>
  );
}
