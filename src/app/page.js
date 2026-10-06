import styles from "./page.module.css";
import Carousel from "./components/carousel/carousel";
import Mission from "./components/mission/mission";
import Location from "./components/location/location";
import Menu from "./components/menu/menu";

export default function Home() {
  return (
    <div id="home" className={styles.page}>
      <Carousel />
      <Mission />
      <Location />
      <Menu />
    </div>
  );
}
