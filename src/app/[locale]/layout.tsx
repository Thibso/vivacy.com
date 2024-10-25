import { routing } from "@/i18n/routing";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import localFont from "next/font/local";
import { notFound } from "next/navigation";
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

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} className={mona.className}>
      <body className="relative overflow-x-hidden">
        <NavBar localeActive={locale} />

        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>

        <footer>Footer</footer>
      </body>
    </html>
  );
}
