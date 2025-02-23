import { useTranslations } from "next-intl";

export default function LegalNotice() {
  const t = useTranslations("LegalNotice");

  return (
    <main>
      <section className="relative z-[1] bg-white pt-8">
        <div className="myContainer space-y-4">
          {t.rich("content", {
            h2: (chunks) => <h2 className="h3-perso pt-8">{chunks}</h2>,
            h3: (chunks) => <h3 className="h2-perso pt-8">{chunks}</h3>,
            h4: (chunks) => <h4 className="lg:text-lg font-bold">{chunks}</h4>,
            p: (chunks) => <p className="lg:text-lg">{chunks}</p>,
            strong: (chunks) => (
              <strong className="lg:text-lg font-bold">{chunks}</strong>
            ),
            ul: (chunks) => <ul className="list-disc ml-8">{chunks}</ul>,
            li: (chunks) => <li className="lg:text-lg">{chunks}</li>,
          })}
        </div>
      </section>
    </main>
  );
}
