import type { Metadata } from "next";
import { Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Laslo — La solution pour les architectes et designers d'intérieur",
  description:
    "Laslo centralise vos références produits, inspirations et moodboards pour un flux de travail simple et efficace.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${inter.variable} ${geistMono.variable} antialiased text-[#0d0f12] bg-white`}>
        <header className="sticky top-0 z-50 h-16 backdrop-blur-md bg-white/70 border-b border-zinc-200/70">
          <div className="mx-auto w-full max-w-[1120px] px-4 h-full flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 font-bold">
              <Image
                src="/laslo_logo_long.png"
                alt="Laslo"
                width={160}
                height={32}
                className="h-8 w-auto"
                priority
              />
            </Link>
            <div className="flex items-center gap-2">
              <Link href="#contact" className="inline-flex items-center rounded-full border border-zinc-300 px-4 py-2 text-sm font-semibold hover:shadow transition">Obtenir mon accès</Link>
            </div>
          </div>
        </header>
        {children}
        <section className="py-10 border-t border-zinc-200 bg-[#0b0c0f] text-white">
          <div className="mx-auto w-full max-w-[1120px] px-4 text-center">
            <div className="flex items-center justify-center gap-4 flex-wrap text-sm text-zinc-300">
              <Link href="/mentions-legales" className="underline underline-offset-4 hover:text-white">Mentions légales</Link>
              <Link href="/politique-confidentialite" className="underline underline-offset-4 hover:text-white">Politique de confidentialité</Link>
              <Link href="/a-propos" className="underline underline-offset-4 hover:text-white">À propos</Link>
            </div>
          </div>
        </section>
      </body>
    </html>
  );
}
