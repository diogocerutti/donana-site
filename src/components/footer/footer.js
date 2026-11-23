"use client";

import data from "@/data/data.json";
import styles from "./footer.module.css";
import logo from "../../../public/img/logo.png";
import Navigator from "../navigator/navigator";
import { FaWhatsapp, FaFacebookF, FaInstagram } from "react-icons/fa";
import { WhatsAppLink } from "../whatsapp/whatsapp";

import { playfair } from "@/fonts/fonts";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footerItem}>
        <img src={logo.src} className={styles.logo} />
        <p className={styles.description}>
          Qualidade no serviço e atendimento para deixar seus eventos deliciosos
          com nossos produtos.
        </p>
        <div className={styles.icons}>
          <WhatsAppLink>
            <FaWhatsapp size={20} color="white" />{" "}
          </WhatsAppLink>
          <FaFacebookF size={20} color="white" />
          <FaInstagram size={20} color="white" />
        </div>
      </div>
      <div className={styles.footerItem}>
        <p className={`${styles.title} ${playfair.className}`}>Opções</p>
        <Navigator fontSize="14px" />
      </div>
      <div className={styles.footerItem}>
        <p className={`${styles.title} ${playfair.className}`}>Contato</p>
        <div className={styles.contactInfo}>
          <p>📍</p>
          <p>{data.contact.address}</p>
        </div>
        <div className={styles.contactInfo}>
          <p>📞</p>
          <WhatsAppLink>
            <p>{data.contact.cellphone}</p>
          </WhatsAppLink>
        </div>
        <div className={styles.contactInfo}>
          <p>✉️</p>
          <a href={`mailto:${data.contact.email}`}>{data.contact.email}</a>
        </div>
      </div>
    </div>
  );
}
