import type { Metadata } from "next";
import { getMessages } from "next-intl/server";
import localFont from "next/font/local";

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
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} className={mona.className}>
      <body>
        <header>Nav Bar</header>

        {children}

        <footer>Footer</footer>
      </body>
    </html>
  );
}
