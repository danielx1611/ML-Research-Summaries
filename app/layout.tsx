import type { Metadata } from "next";
import Link from "next/link";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My Reading Notes",
  description: "A personal place for drafting and organizing reading notes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${robotoMono.variable} min-h-screen bg-zinc-50 text-zinc-900 antialiased`}
      >
        <div className="flex min-h-screen flex-col">
          <header className="border-b border-zinc-200 bg-white">
            <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
                  Machine Learning Notes
                </p>
                <p className="text-lg font-semibold text-zinc-900">
                  Summaries on machine learning papers
                </p>
              </div>
              <nav className="flex items-center gap-4 text-sm font-medium text-zinc-600">
                <Link
                  className="rounded-full px-4 py-2 transition hover:bg-zinc-100 hover:text-zinc-900"
                  href="/"
                >
                  Home
                </Link>
                <Link
                  className="rounded-full px-4 py-2 transition hover:bg-zinc-100 hover:text-zinc-900"
                  href="/summaries"
                >
                  Notes
                </Link>
              </nav>
            </div>
          </header>
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  );
}
