import { useTranslations } from "next-intl";
import NewsletterForm from "../forms/newsletterForm";

export default function Newsletter() {
  const t = useTranslations("Newsletter");

  return (
    <div className="px-4 py-5 lg:px-14 lg:py-14 bg-blue relative z-[2] flex max-lg:flex-col lg:justify-between items-center lg:gap-x-4 max-lg:gap-y-8">
      <p className="text-white text-lg">{t("content")}</p>
      <NewsletterForm />
    </div>
  );
}
