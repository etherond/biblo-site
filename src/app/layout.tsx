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
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
    other: [
      {
        rel: 'icon',
        url: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        rel: 'icon',
        url: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  },
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
            <div className="mt-4">
              <a
                href="https://instagram.com/laslo_app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white text-black hover:bg-white/90 transition"
                aria-label="Notre compte Instagram @laslo_app"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="22"
                  height="22"
                  aria-hidden="true"
                  className="fill-current"
                >
                  <path d="M12 7.2a4.8 4.8 0 1 0 0 9.6 4.8 4.8 0 0 0 0-9.6Zm0 7.8a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm6.1-8.4a1.12 1.12 0 1 1-2.24 0 1.12 1.12 0 0 1 2.24 0ZM12 1.8c-2.6 0-2.9 0-3.9.06-1 .06-1.7.22-2.3 .47-.6 .24-1.1 .57-1.6 1.03-.46 .46-.8 1-.99 1.6-.26 .6-.41 1.3-.47 2.3C2.7 8.2 2.7 8.5 2.7 11.1c0 2.6 0 2.9 .06 3.9 .06 1 .22 1.7 .47 2.3 .24 .6 .57 1.1 1.03 1.6 .46 .46 1 .8 1.6 .99 .6 .26 1.3 .41 2.3 .47 1 .06 1.3 .06 3.9 .06 2.6 0 2.9 0 3.9-.06 1-.06 1.7-.22 2.3-.47 .6-.24 1.1-.57 1.6-1.03 .46-.46 .8-1 .99-1.6 .26-.6 .41-1.3 .47-2.3 .06-1 .06-1.3 .06-3.9 0-2.6 0-2.9-.06-3.9-.06-1-.22-1.7-.47-2.3a4.54 4.54 0 0 0-.99-1.6 4.54 4.54 0 0 0-1.6-.99c-.6-.26-1.3-.41-2.3-.47-1-.06-1.3-.06-3.9-.06Zm0 1.8c2.5 0 2.8 0 3.8 .06 .9 .05 1.4 .2 1.8 .33 .45 .17 .77 .36 1.1 .68 .32 .32 .5 .64 .68 1.1 .13 .38 .28 .9 .33 1.8 .06 1 .06 1.3 .06 3.8 0 2.5 0 2.8-.06 3.8-.05 .9-.2 1.4-.33 1.8-.17 .45-.36 .77-.68 1.1-.32 .32-.64 .5-1.1 .68-.38 .13-.9 .28-1.8 .33-1 .06-1.3 .06-3.8 .06Z"/>
                </svg>
              </a>
            </div>
          </div>
        </section>
      </body>
    </html>
  );
}
