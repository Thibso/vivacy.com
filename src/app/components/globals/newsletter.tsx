import { useTranslations } from "next-intl";
import NewsletterForm from "../forms/newsletterForm";

export default function Newsletter() {
  const t = useTranslations("Newsletter");

  return (
    <div className="px-4 py-4 lg:px-14 lg:py-8 bg-[#000d8f] relative z-[10] flex max-lg:flex-col lg:justify-between items-center lg:gap-x-4 max-lg:gap-y-8">
      <p className="text-white text-xl">{t("content")}</p>
      <NewsletterForm />
    </div>
  );
}
