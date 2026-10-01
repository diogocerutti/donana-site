import styles from "./contact.module.css";
import { playfair } from "../../fonts/fonts";

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
