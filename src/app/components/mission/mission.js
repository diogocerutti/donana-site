import styles from "./mission.module.css";
import fachada from "../../../../public/img/fachada.png";
import { GlobalTitle, GlobalSubtitle } from "@/components/text/text";

export default function Mission() {
  return (
    <div className={styles.mission}>
      <img className={styles.image} src={fachada.src} />
      <div className={styles.text}>
        <GlobalTitle title={"Nossa Missão"} />
        <GlobalSubtitle
          subtitle={
            "Alimentar a alma das pessoas com amor e alegria, compartilhando o pão nosso de cada dia!"
          }
        />
      </div>
    </div>
  );
}
