import Link from "next/link";

export default function Navigator({ fontSize = "", onNavigate }) {
  return (
    <>
      <Link href="/#menu" onClick={onNavigate} style={{ fontSize: fontSize }}>
        MENU
      </Link>
      <Link
        href="/sobre-nos"
        onClick={onNavigate}
        style={{ fontSize: fontSize }}
      >
        SOBRE NÓS
      </Link>
      <Link href="/contato" onClick={onNavigate} style={{ fontSize: fontSize }}>
        CONTATO
      </Link>
      <Link
        href="/orcamento"
        onClick={onNavigate}
        style={{ fontSize: fontSize }}
      >
        ORÇAMENTO
      </Link>
    </>
  );
}
