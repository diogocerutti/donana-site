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

export async function POST(request) {
  let dados;

  try {
    dados = await request.json();
  } catch {
    return responder(
      { campo: "email", mensagem: "Solicitação inválida." },
      400,
    );
  }

  const email = typeof dados?.email === "string" ? dados.email.trim() : "";

  const nome = typeof dados?.nome === "string" ? dados.nome.trim() : "";

  const mensagem =
    typeof dados?.mensagem === "string" ? dados.mensagem.trim() : "";

  const telefone =
    typeof dados?.telefone === "string" ? dados.telefone.trim() : "";

  if (nome.length < 5 || nome.length > 120) {
    return responder(
      {
        campo: "nome",
        mensagem: "Informe um nome entre 5 e 120 caracteres.",
      },
      422,
    );
  }

  if (mensagem.length < 5 || mensagem.length > 1000) {
    return responder(
      {
        campo: "mensagem",
        mensagem: "Informe uma mensagem entre 5 e 1000 caracteres.",
      },
      422,
    );
  }

  if (telefone) {
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
  }

  // Valida o formato do e-mail também no servidor antes do envio.
  if (email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return responder({ campo: "email", mensagem: "Campo Inválido" }, 422);
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
        subject: `Nova mensagem pelo site — Donana [${randomUUID()}]`,
        headers: {
          "X-Entity-Ref-ID": randomUUID(),
        },
        text: [
          `Nome: ${nome}`,
          `E-mail: ${email}`,
          `Telefone: ${telefone || "Não informado"}`,
          "",
          "Mensagem:",
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
        mensagem: "E-mail enviado com sucesso!",
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
