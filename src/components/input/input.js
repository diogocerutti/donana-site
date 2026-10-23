import styles from "./input.module.css";
import { playfair } from "@/fonts/fonts";

export function GlobalInput() {
  return (
    <div className={styles.globalInput}>
      <label htmlFor="nome">Nome Completo*</label>
      <input
        maxLength={120}
        id="nome"
        type="text"
        autoComplete="name"
        placeholder="Digite o seu nome"
        className={styles.inputField}
        aria-invalid={Boolean(errors.nome)}
        aria-describedby={errors.nome ? "erro-nome" : undefined}
        {...register("nome", {
          required: "Informe seu nome.",
          maxLength: {
            value: 120,
            message: "O nome deve ter no máximo 120 caracteres.",
          },
          validate: (valor) =>
            valor.trim().length >= 5 ||
            "O nome deve ter pelo menos 5 caracteres.",
        })}
        required
      />
      {errors.nome && (
        <p id="erro-nome" role="alert" className={styles.errorMsg}>
          {errors.nome.message}
        </p>
      )}
    </div>
  );
}
