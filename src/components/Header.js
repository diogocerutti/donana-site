import styles from "./header.module.css";
import logo from "../../public/img/logo.png";

export default function Header() {
  return (
    <div className={styles.header}>
      <img src={logo.src} className={styles.logo} />
      <div className={styles.navbar}>
        <a>MENU</a>
        <a>SOBRE NÓS</a>
        <a>CONTATO</a>
        <a>ORÇAMENTO</a>
      </div>
    </div>
  );
}
