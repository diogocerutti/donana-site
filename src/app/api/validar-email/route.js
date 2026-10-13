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

  // Valida também no servidor antes de gastar um crédito.
  if (email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return responder({ campo: "email", mensagem: "Campo Inválido" }, 422);
  }

  const apiKey = process.env.ZEROBOUNCE_API_KEY;

  if (!apiKey) {
    return responder(
      { mensagem: "A validação de e-mail está indisponível." },
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
      return responder({ valido: true }, 200);
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
