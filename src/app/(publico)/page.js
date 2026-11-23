import styles from "./page.module.css";
import Carousel from "./_components/carousel/carousel";
import Mission from "./_components/mission/mission";
import Location from "./_components/location/location";
import Menu from "./_components/menu/menu";

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
