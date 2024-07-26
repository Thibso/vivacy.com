import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import React from "react";

export const metadata: Metadata = {
  title: "test title",
  description: "test description",
};

export default function Home() {
  const t = useTranslations("IndexPage");
  return (
    <div>
      <h1 className="text-blue text-3xl">{t("title")}</h1>
    </div>
  );
}
