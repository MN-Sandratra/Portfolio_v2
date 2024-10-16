import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Poppins } from 'next/font/google'
import { Providers } from './providers'

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Mon Portfolio de Développeur",
  description: "Portfolio professionnel présentant mes projets et compétences en développement",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={poppins.className}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background dark:bg-background-dark text-text dark:text-text-dark transition-colors duration-300 ease-in-out`}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
