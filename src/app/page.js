import styles from "./page.module.css";
import logo from "../../public/img/logo.png";

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <img src={logo.src} className={styles.logo} />
        <a>MENU</a>
        <a>SOBRE NÓS</a>
        <a>CONTATO</a>
        <a>ORÇAMENTO</a>
      </header>
      <main className={styles.main}></main>
    </div>
  );
}
