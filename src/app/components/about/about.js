import styles from "./about.module.css";
import image from "../../../../public/img/image.jpg";

export default function About() {
  return (
    <div className={styles.about}>
      <img className={styles.image} src={image.src} />
      <div className={styles.aboutCaption}>
        <h1>Sobre Nós</h1>
        <p>
          Somos uma empresa que visa o melhor para o cliente, com qualidade no
          serviço e atendimento.x
        </p>
      </div>
    </div>
  );
}
