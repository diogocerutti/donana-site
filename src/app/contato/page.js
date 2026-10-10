"use client";

import styles from "./contato.module.css";

import { playfair } from "../../fonts/fonts";
import { GlobalTitle, GlobalSubtitle } from "@/components/text/text";
import {
  ClockIcon,
  LocationIcon,
  MailIcon,
  PhoneIcon,
} from "./components/icons";
import { MdWhatsapp } from "react-icons/md";

export default function Contato() {
  return (
    <div className={styles.contact}>
      <GlobalTitle title={"Contato"} />
      <GlobalSubtitle
        subtitle={
          "Tem alguma dúvida, reclamação, sugestão ou elogio? Entre em contato conosco."
        }
      />
      <div className={styles.contactForm}>
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
                Rua Sete de Setembro, 620-D, Bairro Presidente Médici, Chapecó,
                SC
              </p>
            </div>
          </div>
          <div className={styles.infoItem}>
            <div className={styles.icon}>
              <MailIcon />
            </div>
            <div className={styles.infoData}>
              <p className={styles.itemTitle}>E-mail</p>
              <p className={styles.itemSubtitle}>
                falecom@padariadonana.com.br
              </p>
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
        <form className={styles.message}>
          <p
            style={{ color: "rgb(42 27 24 / 1" }}
            className={`${styles.title} ${playfair.className}`}
          >
            Envie uma Mensagem
          </p>
          <div className={styles.msgItem}>
            <label for="name">Nome Completo*</label>
            <input
              required
              className={styles.inputField}
              type="text"
              placeholder="Digite o seu nome"
              id="name"
            />
          </div>
          <div className={styles.phoneMail}>
            <div className={styles.msgItem}>
              <label for="email">E-mail*</label>
              <input
                required
                className={styles.inputField}
                type="email"
                placeholder="seu@email.com"
                id="email"
              />
            </div>
            <div className={styles.msgItem}>
              <label for="phone">Telefone*</label>
              <input
                required
                className={styles.inputField}
                type="tel"
                placeholder="(00)00000-0000"
                id="phone"
              />
            </div>
          </div>
          <div className={styles.msgItem}>
            <label for="message">Mensagem*</label>
            <textarea
              id="message"
              required
              className={styles.inputMsg}
              placeholder="Como podemos te ajudar?"
              rows={5}
            />
          </div>
          <button type="submit" className={styles.formButton}>
            Enviar Mensagem
          </button>
        </form>
      </div>
    </div>
  );
}
