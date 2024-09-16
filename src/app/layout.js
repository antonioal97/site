import { Spline_Sans } from "next/font/google";
const splineSans = Spline_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700']
});


import "./globals.css";


export const metadata = {
  title: "Antônio Corrêa - Desenvolvedor Front-end, UI/UX Designer e Designer Gráfico",
  description: "Crio experiências memoraveis para pequenas e médias empresas que estão entrando no mundo da internet",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-Br">
      <body
        className={`${splineSans.variable} ${splineSans.className} antialiased `}
      >
        {children}
      </body>
    </html>
  );
}
