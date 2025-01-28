import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Farmacia de Turno",
  description: "Encontra qué farmacia está de turno el día de la fecha"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <footer className="p-4 border-t-2 border-dotted">
        <div className="flex items-center justify-center">
          Desarrollador con ❤️ por &#160;
          <a
            href="https://www.linkedin.com/in/jeremias-arriondo/" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            target="_blank" rel="noopener noreferrer"
          >Jeremias Arriondo</a>
        </div>
      </footer>
      </body>
    </html>
  );
}
