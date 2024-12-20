import { routing } from "@/i18n/routing";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import localFont from "next/font/local";
import { notFound } from "next/navigation";
import React from "react";
import Footer from "../components/globals/footer";
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
      <head>
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>
      <body className="relative overflow-x-hidden">
        <NavBar localeActive={locale} />

        <NextIntlClientProvider messages={messages}>
          <div className="bg-white">{children}</div>
        </NextIntlClientProvider>

        <Footer />
      </body>
    </html>
  );
}
