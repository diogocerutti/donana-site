import { Playfair_Display } from "next/font/google";
import { Urbanist } from "next/font/google";

export const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap" /* mostra uma fonte alternativa enquanto essa é carregada */,
});

export const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap" /* mostra uma fonte alternativa enquanto essa é carregada */,
});
