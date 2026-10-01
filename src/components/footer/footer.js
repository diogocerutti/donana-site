"use client";

import styles from "./footer.module.css";
import logo from "../../../public/img/logo.png";
import Navigator from "../navigator/navigator";
import { FaWhatsapp, FaFacebookF, FaInstagram } from "react-icons/fa";

import { playfair } from "@/app/fonts/fonts";

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
          <FaWhatsapp size={20} color="white" />
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
          <p>
            Rua Sete de Setembro, Nº 620-D, Bairro Presidente Médici, Chapecó -
            SC
          </p>
        </div>
        <div className={styles.contactInfo}>
          <p>📞</p>
          <p>(49) 98817-4925</p>
        </div>
        <div className={styles.contactInfo}>
          <p>✉️</p>
          <p>falecom@padariadonana.com.br</p>
        </div>
      </div>
    </div>
  );
}
