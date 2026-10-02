import styles from "./page.module.css";
import Carousel from "./components/carousel/carousel";
import About from "./components/about/about";
import Location from "./components/location/location";
import Menu from "./components/menu/menu";

export default function Home() {
  return (
    <div id="#" className={styles.page}>
      <Carousel />
      <About />
      <Location />
      <Menu />
    </div>
  );
}
