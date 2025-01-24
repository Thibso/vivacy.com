import localFont from "next/font/local";
import React from "react";
import "./globals.css";

// Font files can be colocated inside of `app`
const mona = localFont({
  src: "./MonaSansVF-Regular.ttf",
  display: "swap",
});

export default async function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={mona.className}>
      <body>{children}</body>
    </html>
  );
}
