import styles from "./location.module.css";

import { GlobalTitle, GlobalSubtitle } from "@/components/text/text";

export default function Location() {
  return (
    <div className={styles.location}>
      <div className={styles.text}>
        <GlobalTitle title={"Conheça a Don'Ana"} />
        <GlobalSubtitle subtitle={"Estamos localizados no centro da cidade."} />
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3551.9715772735503!2d-52.6108384!3d-27.094192099999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94e4b42788c35f97%3A0xb1c09609b19a2e68!2sPadaria%20Don'Ana!5e0!3m2!1spt-BR!2sbr!4v1790878786243!5m2!1spt-BR!2sbr"
        title="Localização"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className={styles.map}
      />
    </div>
  );
}
