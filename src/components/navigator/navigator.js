export default function Navigator({ fontSize = "", onNavigate }) {
  return (
    <>
      <a style={{ fontSize: fontSize }}>SOBRE NÓS</a>
      <a href="#menu" onClick={onNavigate} style={{ fontSize: fontSize }}>MENU</a>
      <a style={{ fontSize: fontSize }}>CONTATO</a>
      <a style={{ fontSize: fontSize }}>ORÇAMENTO</a>
    </>
  );
}
