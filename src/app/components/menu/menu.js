import styles from "./menu.module.css";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap" /* mostra uma fonte alternativa enquanto essa é carregada */,
});

export default function Menu() {
  return (
    <div className={styles.menu}>
      <div>
        <p className={`${styles.title} ${playfair.className}`}>Menu</p>
        <p className={styles.subtitle}>
          Explore nossa linha completa de produtos, feitos diariamente com os
          melhores ingredientes.
        </p>
      </div>
    </div>
  );
}
