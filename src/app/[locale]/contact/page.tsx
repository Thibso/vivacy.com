import ContactForm from "@/app/components/forms/contactForm";
import FromTopTitles from "@/app/components/titles/FromTopTitles";
import vivacyLogo from "@/app/img/vivacy-laboratories-hyaluronic-acid-france.png";
import Image from "next/image";

import VivacySecurity from "@/app/components/globals/vivacySecurity";
import { useTranslations } from "next-intl";

type Params = {
  params: { locale: string };
};

// META DATAS
export async function generateMetadata({ params }: Params) {
  const locale = params.locale;
  if (locale === "en") {
    return {
      title: "Contact",
      description: "Description EN",
    };
  } else if (locale === "fr") {
    return {
      title: "Titre FR",
      description: "Description FR",
    };
  }
}

export default function Contact() {
  const t = useTranslations("Contact");
  return (
    <main>
      <section className="relative pt-[75px] z-[1]">
        <Image
          src={vivacyLogo}
          alt="Vivacy"
          quality={75}
          style={{
            objectFit: "contain",
            zIndex: "-1",
            position: "absolute",
            opacity: 0.05,
          }}
          className="max-lg:hidden w-full lg:w-[60%] -right-[20%] top-[15%]"
        />
        <div className="myContainer space-y-8 lg:space-y-28">
          <FromTopTitles
            titleH2={t("h2")}
            titleH3={t("h3")}
            h3Classes="text-black"
          />

          <div className="lg:grid lg:grid-cols-12 lg:gap-x-28 lg:px-14 max-lg:space-y-8">
            <div className="lg:col-span-8 rounded-xl border-[1px] p-4 lg:py-8 lg:px-14 border-blue ">
              <ContactForm />
            </div>
            <div className="lg:col-span-4 lg:my-auto">
              <div className="space-y-4 text-center">
                {t.rich("annotation", {
                  p: (chunks) => <p className="text-lg">{chunks}</p>,
                  a: (chunks) => (
                    <a href={chunks?.toString()} className="text-lg underline">
                      {chunks}
                    </a>
                  ),
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <VivacySecurity />
    </main>
  );
}
