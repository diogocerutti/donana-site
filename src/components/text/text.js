import { playfair } from "@/fonts/fonts";
import styles from "./text.module.css";

export function GlobalTitle({ title }) {
  return (
    <p className={`${styles.globalTitle} ${playfair.className}`}>{title}</p>
  );
}

export function GlobalSubtitle({ subtitle }) {
  return <p className={styles.globalSubtitle}>{subtitle}</p>;
}
