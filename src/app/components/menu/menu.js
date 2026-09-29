import styles from "./menu.module.css";
import { Playfair_Display } from "next/font/google";
import salgados from "../../../../public/img/cento_salgados.png";
import torta from "../../../../public/img/torta.png";
import pizza from "../../../../public/img/pizza.jpg";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap" /* mostra uma fonte alternativa enquanto essa é carregada */,
});

const images = [{ src: salgados.src }, { src: torta.src }, { src: pizza.src }];

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
      <div className={styles.imageBox}>
        {images.map((image, index) => (
          <img
            key={image.src}
            src={image.src}
            alt=""
            className={styles.image}
          />
        ))}
      </div>
    </div>
  );
}
