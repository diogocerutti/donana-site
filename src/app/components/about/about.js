import styles from "./about.module.css";
import aboutImg from "../../../../public/img/totem.png";
import fachada from "../../../../public/img/fachada.png";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap" /* mostra uma fonte alternativa enquanto essa é carregada */,
});

export default function About() {
  return (
    <div className={styles.about}>
      <img className={styles.image} src={fachada.src} />
      <div className={styles.text}>
        <p className={`${styles.title} ${playfair.className}`}>Sobre Nós</p>
        <p className={styles.subtitle}>
          Somos uma empresa que visa o melhor para o cliente, com qualidade no
          serviço e atendimento.
        </p>
      </div>
    </div>
  );
}
