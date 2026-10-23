import styles from "./orcamento.module.css";
import { GlobalTitle, GlobalSubtitle } from "@/components/text/text";

export default function Orcamento() {
  return (
    <div className={styles.orcamento}>
      <GlobalTitle title={"Orçamento"} />
      <GlobalSubtitle
        subtitle={
          "Preencha os dados abaixo e entraremos em contato o mais breve possível com os detalhes para o seu evento."
        }
      />
      <form className={styles.orcForm}>
        <label htmlFor="nome">Nome Completo*</label>
        <input
          maxLength={120}
          id="nome"
          type="text"
          autoComplete="name"
          placeholder="Digite o seu nome"
          className={styles.inputField}
          required
        />
      </form>
    </div>
  );
}
