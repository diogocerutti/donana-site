import styles from "./about.module.css";

import salgados from "../../../public/img/salgados.jpeg";
import torta from "../../../public/img/torta.png";
import pizzas from "../../../public/img/pizzas.jpeg";
import docinhos from "../../../public/img/docinhos.jpeg";

import { playfair } from "../fonts/fonts";

const images = [
  {
    src: torta.src,
    name: "Tortas",
    href: "/cardapios/NOVO CARDÁPIO DE TORTAS DIGITAL.pdf",
  },
  { src: salgados.src, name: "Salgados", href: "" },
  { src: pizzas.src, name: "Pizzas", href: "" },
  { src: docinhos.src, name: "Doces", href: "" },
];

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
        <p className={`${styles.descTitle} ${playfair.className}`}>
          Nosso Ambiente
        </p>
      </div>
      <div className={styles.aboutBox}>
        {images.map((image, index) => (
          <a
            key={image.name}
            href={image.href || undefined}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.aboutItem}
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
