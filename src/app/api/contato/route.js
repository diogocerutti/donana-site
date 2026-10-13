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

  if (mensagem.length < 5 || mensagem.length > 5000) {
    return responder(
      {
        campo: "mensagem",
        mensagem: "Informe uma mensagem entre 5 e 5000 caracteres.",
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

  // Valida também no servidor antes de gastar um crédito.
  if (email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return responder({ campo: "email", mensagem: "Campo Inválido" }, 422);
  }

  const apiKey = process.env.ZEROBOUNCE_API_KEY;
  const resendApiKey = process.env.RESEND_API_KEY;
  const remetente = process.env.CONTACT_FROM_EMAIL;
  const destinatario = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !resendApiKey || !remetente || !destinatario) {
    return responder(
      {
        mensagem: "O formulário está temporariamente indisponível.",
      },
      503,
    );
  }

  try {
    const resposta = await fetch("https://api.zerobounce.net/v2/validate", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        api_key: apiKey,
        email,
        timeout: "20",
      }),
      cache: "no-store",
      signal: AbortSignal.timeout(25000),
    });

    if (!resposta.ok) {
      throw new Error("Falha na consulta.");
    }

    const resultado = await resposta.json();

    // Caso de chave inválida ou falta de créditos.
    if (resultado.error || !resultado.status) {
      throw new Error("Validação indisponível.");
    }

    if (resultado.status === "valid") {
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
            subject: "Nova mensagem pelo site — Donana",
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

    if (resultado.status === "invalid") {
      return responder({ campo: "email", mensagem: "Campo Inválido" }, 422);
    }

    if (resultado.status === "unknown" || resultado.status === "catch-all") {
      return responder(
        {
          campo: "email",
          mensagem:
            "Não foi possível confirmar este e-mail. Confira o endereço ou tente novamente mais tarde.",
        },
        422,
      );
    }

    if (["spamtrap", "abuse", "do_not_mail"].includes(resultado.status)) {
      return responder(
        {
          campo: "email",
          mensagem: "Este endereço não pode ser utilizado no formulário.",
        },
        422,
      );
    }

    throw new Error("Resultado inesperado.");
  } catch {
    return responder(
      {
        mensagem:
          "Não foi possível verificar seu e-mail. Tente novamente mais tarde.",
      },
      503,
    );
  }
}
