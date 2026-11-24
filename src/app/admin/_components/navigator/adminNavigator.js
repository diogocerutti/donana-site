import Link from "next/link";

export default function AdminNavigator({ fontSize = "", onNavigate }) {
  return (
    <>
      <Link href="#" onClick={onNavigate} style={{ fontSize: fontSize }}>
        SAIR
      </Link>
    </>
  );
}
