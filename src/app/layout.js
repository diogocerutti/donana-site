import "./globals.css";
import { urbanist } from "@/fonts/fonts";

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={urbanist.className}>{children}</body>
    </html>
  );
}
