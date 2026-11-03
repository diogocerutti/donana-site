import { randomUUID } from "node:crypto";

export const runtime = "nodejs";

function responder(dados, status) {
  return Response.json(dados, {
    status,
    headers: {
      "Cache-Control": "no-store",
    },
  });
}

function obterTexto(valor) {
  return typeof valor === "string" ? valor.trim() : "";
}

export async function POST(request) {
  let dados;

  try {
    dados = await request.json();
  } catch {
    return responder({ mensagem: "Solicitação inválida." }, 400);
  }

  const nome = obterTexto(dados?.nome);
  const email = obterTexto(dados?.email);
  const telefone = obterTexto(dados?.telefone);
  const assunto = obterTexto(dados?.assunto);
  const mensagem = obterTexto(dados?.mensagem);

  if (nome.length < 5 || nome.length > 120) {
    return responder(
      {
        campo: "nome",
        mensagem: "Informe um nome entre 5 e 120 caracteres.",
      },
      422,
    );
  }

  if (email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return responder(
      {
        campo: "email",
        mensagem: "Informe um e-mail válido.",
      },
      422,
    );
  }

  if (!telefone) {
    return responder(
      {
        campo: "telefone",
        mensagem: "Informe seu telefone.",
      },
      422,
    );
  }

  const numeros = telefone.replace(/\D/g, "");

  if (
    telefone.length > 25 ||
    !/^[\d\s().-]+$/.test(telefone) ||
    !/^[1-9]{2}(?:[2-5]\d{7}|9\d{8})$/.test(numeros)
  ) {
    return responder(
      {
        campo: "telefone",
        mensagem: "Informe um telefone válido com DDD.",
      },
      422,
    );
  }

  if (assunto.length < 5 || assunto.length > 100) {
    return responder(
      {
        campo: "assunto",
        mensagem: "Informe um assunto entre 5 e 100 caracteres.",
      },
      422,
    );
  }

  if (mensagem.length < 30 || mensagem.length > 2500) {
    return responder(
      {
        campo: "mensagem",
        mensagem: "Informe uma mensagem entre 30 e 2500 caracteres.",
      },
      422,
    );
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const remetente = process.env.CONTACT_FROM_EMAIL;
  const destinatario = process.env.CONTACT_TO_EMAIL;

  if (!resendApiKey || !remetente || !destinatario) {
    return responder(
      {
        mensagem: "O formulário está temporariamente indisponível.",
      },
      503,
    );
  }

  try {
    const identificador = randomUUID();

    const respostaEnvio = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: remetente,
        to: [destinatario],
        reply_to: email,
        subject: `Nova solicitação de orçamento — Don'Ana [${identificador}]`,
        headers: {
          "X-Entity-Ref-ID": identificador,
        },
        text: [
          `Nome: ${nome}`,
          `E-mail: ${email}`,
          `Telefone: ${telefone}`,
          `Assunto: ${assunto}`,
          "",
          "Mensagem / Detalhes:",
          mensagem,
        ].join("\n"),
      }),
      signal: AbortSignal.timeout(15000),
    });

    if (!respostaEnvio.ok) {
      throw new Error("Falha no envio.");
    }

    const envio = await respostaEnvio.json();

    if (!envio.id) {
      throw new Error("Envio não confirmado.");
    }

    return responder(
      {
        enviado: true,
        mensagem: "Solicitação de orçamento enviada com sucesso!",
      },
      200,
    );
  } catch {
    return responder(
      {
        mensagem:
          "Não foi possível confirmar o envio. Aguarde antes de tentar novamente.",
      },
      503,
    );
  }
}
