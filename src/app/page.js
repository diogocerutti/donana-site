import styles from "./page.module.css";
import Carousel from "./components/carousel/carousel";
import About from "./components/about/about";

export default function Home() {
  return (
    <div className={styles.page}>
      <Carousel />
      <About />
    </div>
  );
}
