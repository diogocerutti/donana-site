import data from "@/data/data.json";

export function WhatsAppLink({
  mensagem = "Olá! Gostaria de saber mais informações.",
  children = "Fale conosco pelo WhatsApp",
  className,
}) {
  const numero = `55${data.contact.cellphone.replace(/\D/g, "")}`;

  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

  return (
    <a
      className={className}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}
