import styles from "./about.module.css";

import salgados from "../../../public/img/salgados.jpeg";
import torta from "../../../public/img/torta.png";
import pizzas from "../../../public/img/pizzas.jpeg";
import docinhos from "../../../public/img/docinhos.jpeg";

import { playfair } from "../../fonts/fonts";
import { GlobalTitle, GlobalSubtitle } from "@/components/text/text";

const images = [
  {
    src: torta.src,
    href: "/cardapios/NOVO CARDÁPIO DE TORTAS DIGITAL.pdf",
  },
  { src: salgados.src, href: "" },
  { src: pizzas.src, href: "" },
  { src: docinhos.src, href: "" },
];

export default function About() {
  return (
    <div className={styles.about}>
      <div className={styles.text}>
        <GlobalTitle title={"Sobre Nós"} />
        <GlobalSubtitle
          subtitle={
            "Somos uma empresa que visa o melhor para o cliente, com qualidade no serviço e atendimento. Deixando seus eventos mais deliciosos com nossos produtos."
          }
        />
        <div className={`${styles.description} ${playfair.className}`}>
          <p className={styles.descTitle}>Nosso Ambiente</p>
          <p className={styles.descSubtitle}>Momentos Don'Ana</p>
        </div>
      </div>
      <div className={styles.aboutBox}>
        {images.map((image, index) => (
          <a
            key={image.src}
            href={image.href || undefined}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.aboutItem}
          >
            {" "}
            <div className={styles.imageBox}>
              <img src={image.src} alt={image.name} className={styles.image} />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
