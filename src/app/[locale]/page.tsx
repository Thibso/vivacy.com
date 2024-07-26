import type { Metadata } from "next";
import { useTranslations } from "next-intl";

export const metadata: Metadata = {
  title: "test title",
  description: "test description",
};

export default function Home() {
  const t = useTranslations("Index");
  return <h1>{t("title")}</h1>;
}
