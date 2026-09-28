import styles from "./page.module.css";
import Carousel from "./components/carousel/carousel";

export default function Home() {
  return (
    <div className={styles.page}>
      <Carousel />
    </div>
  );
}
