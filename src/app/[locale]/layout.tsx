import type { Metadata } from "next";
import localFont from "next/font/local";
import React from "react";
import NavBar from "../components/globals/NavBar";
import "./globals.css";

export const metadata: Metadata = {
  robots: "noindex",
};
// Font files can be colocated inside of `app`
const mona = localFont({
  src: "./MonaSansVF-Regular.ttf",
  display: "swap",
});

export default function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={locale} className={mona.className}>
      <body className="relative">
        <NavBar />

        <div>{children}</div>

        <footer>Footer</footer>
      </body>
    </html>
  );
}
