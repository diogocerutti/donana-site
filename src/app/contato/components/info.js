import styles from "../contato.module.css";

import { ClockIcon, LocationIcon, MailIcon, PhoneIcon } from "./icons";
import { MdWhatsapp } from "react-icons/md";
import { playfair } from "../../../fonts/fonts";

export function Info() {
  return (
    <div className={styles.info}>
      <p className={`${styles.title} ${playfair.className}`}>Informações</p>
      <div className={styles.infoItem}>
        <div className={styles.icon}>
          <ClockIcon />
        </div>
        <div className={styles.infoData}>
          <p className={styles.itemTitle}>Horário de Atendimento</p>
          <p className={styles.itemSubtitle}>07:00h às 20:30h</p>
        </div>
      </div>
      <div className={styles.infoItem}>
        <div className={styles.icon}>
          <LocationIcon />
        </div>
        <div className={styles.infoData}>
          <p className={styles.itemTitle}>Endereço</p>
          <p className={styles.itemSubtitle}>
            Rua Sete de Setembro, 620-D, Bairro Presidente Médici, Chapecó, SC
          </p>
        </div>
      </div>
      <div className={styles.infoItem}>
        <div className={styles.icon}>
          <MailIcon />
        </div>
        <div className={styles.infoData}>
          <p className={styles.itemTitle}>E-mail</p>
          <p className={styles.itemSubtitle}>falecom@padariadonana.com.br</p>
        </div>
      </div>
      <div className={styles.infoItem}>
        <div className={styles.icon}>
          <PhoneIcon />
        </div>
        <div className={styles.infoData}>
          <p className={styles.itemTitle}>Telefone</p>
          <p className={styles.itemSubtitle}>(49) 3322-1058</p>
          <p
            style={{ color: "rgb(212 175 55 / 1" }}
            className={styles.itemSubtitle}
          >
            <MdWhatsapp color="#1ca017" /> (49) 98817-4925
          </p>
        </div>
      </div>
    </div>
  );
}
