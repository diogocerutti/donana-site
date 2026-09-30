import styles from "./menu.module.css";
import { Playfair_Display } from "next/font/google";
import salgados from "../../../../public/img/salgados.jpeg";
import torta from "../../../../public/img/torta.png";
import pizzas from "../../../../public/img/pizzas.jpeg";
import docinhos from "../../../../public/img/docinhos.jpeg";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap" /* mostra uma fonte alternativa enquanto essa é carregada */,
});

const images = [
  { src: torta.src, name: "Tortas" },
  { src: salgados.src, name: "Salgados" },
  { src: pizzas.src, name: "Pizzas" },
  { src: docinhos.src, name: "Doces" },
];

export default function Menu() {
  return (
    <div className={styles.menu}>
      <div className={styles.text}>
        <p className={`${styles.title} ${playfair.className}`}>Menu</p>
        <p className={styles.subtitle}>
          Explore nossa linha completa de produtos, feitos diariamente com os
          melhores ingredientes.
        </p>
      </div>
      <div className={styles.menuBox}>
        {images.map((image, index) => (
          <div key={image.name} className={styles.menuItem}>
            {" "}
            <div className={styles.imageBox}>
              <p className={`${styles.imageName} ${playfair.className}`}>
                {image.name}
              </p>
              <img src={image.src} alt={image.name} className={styles.image} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
