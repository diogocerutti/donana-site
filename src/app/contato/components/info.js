import styles from "./info.module.css";
import data from "@/data/data.json";

import {
  ClockIcon,
  LocationIcon,
  MailIcon,
  PhoneIcon,
} from "@/components/svg/svg.js";
import { MdWhatsapp } from "react-icons/md";
import { playfair } from "@/fonts/fonts";

export function Info() {
  return (
    <div className={styles.info}>
      <h2 className={`${styles.title} ${playfair.className}`}>Informações</h2>
      <div className={styles.infoItem}>
        <div className={styles.icon}>
          <ClockIcon />
        </div>
        <div className={styles.infoData}>
          <p className={styles.itemTitle}>Horário de Atendimento</p>
          <p className={styles.itemSubtitle}>{data.contact.hour}</p>
        </div>
      </div>
      <div className={styles.infoItem}>
        <div className={styles.icon}>
          <LocationIcon />
        </div>
        <div className={styles.infoData}>
          <p className={styles.itemTitle}>Endereço</p>
          <p className={styles.itemSubtitle}>{data.contact.address}</p>
        </div>
      </div>
      <div className={styles.infoItem}>
        <div className={styles.icon}>
          <MailIcon />
        </div>
        <div className={styles.infoData}>
          <p className={styles.itemTitle}>E-mail</p>
          <a
            href={`mailto:${data.contact.email}`}
            className={styles.itemSubtitle}
          >
            {data.contact.email}
          </a>
        </div>
      </div>
      <div className={styles.infoItem}>
        <div className={styles.icon}>
          <PhoneIcon />
        </div>
        <div className={styles.infoData}>
          <p className={styles.itemTitle}>Telefone</p>
          <p className={styles.itemSubtitle}>{data.contact.phone}</p>
          <p className={`${styles.itemSubtitle} ${styles.whatsapp}`}>
            <MdWhatsapp color="#1ca017" /> {data.contact.cellphone}
          </p>
        </div>
      </div>
    </div>
  );
}
