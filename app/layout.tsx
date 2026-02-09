import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TicketSys - Reservation & Ticketing",
  description: "A comprehensive ticketing system powered by Next.js and Supabase",
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
        <header className="border-b bg-white dark:bg-zinc-950">
          <div className="container mx-auto flex h-16 items-center justify-between px-4">
            <Link href="/" className="text-xl font-bold tracking-tight">
              TicketSys
            </Link>
            <nav className="flex items-center gap-6">
              <Link
                href="/admin/reservations"
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                Reservations
              </Link>
              <Link
                href="/admin/tickets"
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                Tickets
              </Link>
              <Link
                href="/login"
                className="rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
              >
                Login
              </Link>
            </nav>
          </div>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
