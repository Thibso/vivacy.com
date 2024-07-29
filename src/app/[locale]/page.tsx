import type { Metadata } from "next";
import { useTranslations } from "next-intl";

export const metadata: Metadata = {
  title: "Vivacy.com",
  description: "Description",
};

export default function Home() {
  const t = useTranslations("HomePage");
  return (
    <div>
      <h1 className="text-blue text-3xl">{t("title")}</h1>
    </div>
  );
}
