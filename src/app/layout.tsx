import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  // Poids disponibles: 100, 200, 300, 400, 500, 600, 700, 800, 900
  weight: ["400", "500", "600", "700"],
  // Inclure uniquement le sous-ensemble latin
  subsets: ["latin"],
  // Nom de la variable CSS
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Werewolves Game Assistant",
  description: "Assistant pour gérer les parties de Loups-Garous",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${poppins.variable} antialiased`}>{children}</body>
    </html>
  );
}
