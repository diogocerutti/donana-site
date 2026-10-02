import Link from "next/link";

export default function Navigator({ fontSize = "", onNavigate }) {
  return (
    <>
      <Link href="/#about" style={{ fontSize: fontSize }}>
        SOBRE NÓS
      </Link>
      <Link href="/#menu" onClick={onNavigate} style={{ fontSize: fontSize }}>
        MENU
      </Link>
      <Link href="/#contact" style={{ fontSize: fontSize }}>
        CONTATO
      </Link>
      <Link href="/#price" style={{ fontSize: fontSize }}>
        ORÇAMENTO
      </Link>
    </>
  );
}
