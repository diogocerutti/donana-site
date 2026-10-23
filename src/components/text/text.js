import { playfair } from "@/fonts/fonts";
import styles from "./text.module.css";

export function GlobalTitle({ title }) {
  return (
    <h1 className={`${styles.globalTitle} ${playfair.className}`}>{title}</h1>
  );
}

export function GlobalSubtitle({ subtitle }) {
  return <p className={styles.globalSubtitle}>{subtitle}</p>;
}
