import styles from "./about.module.css";
import { playfair } from "../fonts/fonts";

export default function About() {
  return (
    <div className={styles.about}>
      <div className={styles.text}>
        <p className={`${styles.title} ${playfair.className}`}>Sobre Nós</p>
        <p className={styles.subtitle}>
          Somos uma empresa que visa o melhor para o cliente, com qualidade no
          serviço e atendimento. Deixando seus eventos mais deliciosos com
          nossos produtos.
        </p>
      </div>
      <div className={styles.menuBox}>
        {images.map((image, index) => (
          <a
            key={image.name}
            href={image.href || undefined}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.menuItem}
          >
            {" "}
            <div className={styles.imageBox}>
              <p className={`${styles.imageName} ${playfair.className}`}>
                {image.name}
              </p>
              <img src={image.src} alt={image.name} className={styles.image} />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
