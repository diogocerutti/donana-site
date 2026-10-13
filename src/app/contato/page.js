"use client";

import styles from "./contato.module.css";

import { useForm } from "react-hook-form";
import { useState } from "react";
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
  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
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
    setEmailVerificado(false);

    try {
      const resposta = await fetch("/api/validar-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: dados.email,
        }),
        signal: AbortSignal.timeout(30000),
      });

      const resultado = await resposta.json();

      if (!resposta.ok) {
        if (resultado.campo === "email") {
          setError(
            "email",
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
              resultado.mensagem || "Não foi possível verificar o e-mail.",
          });
        }

        return;
      }

      if (resultado.valido !== true) {
        throw new Error("Resposta inesperada.");
      }

      setEmailVerificado(true);

      // Na próxima etapa, o envio será implementado no servidor.
    } catch {
      setError("root.servidor", {
        type: "server",
        message:
          "Não foi possível verificar o e-mail. Tente novamente mais tarde.",
      });
    }
  }

  const [emailVerificado, setEmailVerificado] = useState(false);

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
        <form
          className={styles.message}
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <p
            style={{ color: "rgb(42 27 24 / 1" }}
            className={`${styles.title} ${playfair.className}`}
          >
            Envie uma Mensagem
          </p>
          <div className={styles.msgItem}>
            <label htmlFor="nome">Nome Completo*</label>
            <input
              id="nome"
              type="text"
              autoComplete="name"
              placeholder="Digite o seu nome"
              className={styles.inputField}
              aria-invalid={Boolean(errors.nome)}
              aria-describedby={errors.nome ? "erro-nome" : undefined}
              {...register("nome", {
                required: "Informe seu nome.",
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
                required
                id="email"
                type="email"
                autoComplete="email"
                placeholder="seu@email.com"
                className={styles.inputField}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "erro-email" : undefined}
                {...register("email", {
                  required: "Informe seu e-mail.",
                  setValueAs: (valor) => valor.trim(),
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Campo Inválido",
                  },
                  onChange: () => setEmailVerificado(false),
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
                id="telefone"
                type="tel"
                autoComplete="tel-national"
                placeholder="(00)00000-0000"
                className={styles.inputField}
                aria-invalid={Boolean(errors.telefone)}
                aria-describedby={errors.telefone ? "erro-telefone" : undefined}
                {...register("telefone", {
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
              required
              id="mensagem"
              rows={5}
              placeholder="Como podemos te ajudar?"
              className={styles.inputMsg}
              aria-invalid={Boolean(errors.mensagem)}
              aria-describedby={errors.mensagem ? "erro-mensagem" : undefined}
              {...register("mensagem", {
                required: "Informe sua mensagem.",
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

          {emailVerificado && (
            <p role="status">
              E-mail validado pelo ZeroBounce. A mensagem ainda não foi enviada.
            </p>
          )}
          <button
            type="submit"
            className={styles.formButton}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Validando e-mail..." : "Enviar Mensagem"}
          </button>
        </form>
      </div>
    </div>
  );
}
