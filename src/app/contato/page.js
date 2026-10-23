"use client";

import styles from "./contato.module.css";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { playfair } from "../../fonts/fonts";
import { GlobalTitle, GlobalSubtitle } from "@/components/text/text";
import { Info } from "./components/info";

export default function Contato() {
  const [mensagemSucesso, setMensagemSucesso] = useState("");

  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "onBlur", // valida quando sai de um campo
    defaultValues: {
      nome: "",
      email: "",
      telefone: "",
      mensagem: "",
    },
  });

  async function onSubmit(dados) {
    clearErrors("root");
    setMensagemSucesso("");

    try {
      const resposta = await fetch("/api/contato", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dados),
        signal: AbortSignal.timeout(45000),
      });

      const resultado = await resposta.json();

      if (!resposta.ok) {
        const campos = ["nome", "email", "telefone", "mensagem"];

        if (campos.includes(resultado.campo)) {
          setError(
            resultado.campo,
            {
              type: "server",
              message: resultado.mensagem,
            },
            { shouldFocus: true },
          );
        } else {
          setError("root.servidor", {
            type: "server",
            message:
              resultado.mensagem || "Não foi possível confirmar o envio.",
          });
        }

        return;
      }

      if (resultado.enviado !== true) {
        throw new Error("Resposta inesperada.");
      }

      reset();
      setMensagemSucesso("✅ E-mail enviado com sucesso!");
    } catch {
      setError("root.servidor", {
        type: "server",
        message:
          "Não foi possível confirmar o envio. Aguarde antes de tentar novamente.",
      });
    }
  }

  return (
    <div className={styles.contact}>
      <GlobalTitle title="Contato" />
      <GlobalSubtitle subtitle="Tem alguma dúvida, reclamação, sugestão ou elogio? Entre em contato conosco." />
      <div className={styles.container}>
        <Info />
        <form
          className={styles.form}
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <h2 className={`${styles.title} ${playfair.className}`}>
            Envie uma Mensagem
          </h2>
          <div className={styles.msgItem}>
            <label htmlFor="nome">Nome Completo*</label>
            <input
              readOnly={isSubmitting}
              maxLength={120}
              id="nome"
              type="text"
              autoComplete="name"
              placeholder="Digite o seu nome"
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
          <div className={styles.phoneMail}>
            <div className={styles.msgItem}>
              <label htmlFor="email">E-mail*</label>
              <input
                readOnly={isSubmitting}
                maxLength={254}
                required
                id="email"
                type="email"
                autoComplete="email"
                placeholder="seu@email.com"
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "erro-email" : undefined}
                {...register("email", {
                  required: "Informe seu e-mail.",
                  maxLength: {
                    value: 254,
                    message: "O e-mail deve ter no máximo 254 caracteres.",
                  },
                  setValueAs: (valor) => valor.trim(),
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Campo Inválido",
                  },
                })}
              />
              {errors.email && (
                <p id="erro-email" role="alert" className={styles.errorMsg}>
                  {errors.email.message}
                </p>
              )}
            </div>
            <div className={styles.msgItem}>
              <label htmlFor="telefone">Telefone (opcional)</label>
              <input
                maxLength={25}
                readOnly={isSubmitting}
                id="telefone"
                type="tel"
                autoComplete="tel-national"
                placeholder="(00)00000-0000"
                aria-invalid={Boolean(errors.telefone)}
                aria-describedby={errors.telefone ? "erro-telefone" : undefined}
                {...register("telefone", {
                  maxLength: {
                    value: 25,
                    message: "O telefone deve ter no máximo 25 caracteres.",
                  },
                  validate: (valor) => {
                    // Telefone é opcional.
                    if (!valor.trim()) return true;

                    if (!/^[\d\s().-]+$/.test(valor)) {
                      return "Informe um telefone válido com DDD.";
                    }

                    const numeros = valor.replace(/\D/g, "");

                    return (
                      /^[1-9]{2}(?:[2-5]\d{7}|9\d{8})$/.test(numeros) ||
                      "Informe um telefone válido com DDD."
                    );
                  },
                })}
              />
              {errors.telefone && (
                <p id="erro-telefone" role="alert" className={styles.errorMsg}>
                  {errors.telefone.message}
                </p>
              )}
            </div>
          </div>
          <div className={styles.msgItem}>
            <label htmlFor="mensagem">Mensagem*</label>
            <textarea
              readOnly={isSubmitting}
              maxLength={1000}
              required
              id="mensagem"
              rows={5}
              placeholder="Como podemos te ajudar?"
              className={styles.inputMsg}
              aria-invalid={Boolean(errors.mensagem)}
              aria-describedby={errors.mensagem ? "erro-mensagem" : undefined}
              {...register("mensagem", {
                required: "Informe sua mensagem.",
                maxLength: {
                  value: 1000,
                  message: "A mensagem deve ter no máximo 1000 caracteres.",
                },
                validate: (valor) =>
                  valor.trim().length >= 5 ||
                  "A mensagem deve ter pelo menos 5 caracteres.",
              })}
            />
            {errors.mensagem && (
              <p id="erro-mensagem" role="alert" className={styles.errorMsg}>
                {errors.mensagem.message}
              </p>
            )}
          </div>
          {errors.root?.servidor && (
            <p role="alert" className={styles.errorMsg}>
              {errors.root.servidor.message}
            </p>
          )}

          {mensagemSucesso && (
            <div className={styles.success}>
              <p role="status">{mensagemSucesso}</p>

              <button
                type="button"
                className={styles.closeSuccess}
                onClick={() => setMensagemSucesso("")}
                aria-label="Fechar"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
          )}
          <button
            type="submit"
            className={styles.formButton}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
          </button>
        </form>
      </div>
    </div>
  );
}
