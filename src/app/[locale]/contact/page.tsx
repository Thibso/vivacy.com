import ContactForm from "@/app/components/forms/contactForm";
import FromTopTitles from "@/app/components/titles/FromTopTitles";
import vivacyLogo from "@/app/img/vivacy-laboratories-hyaluronic-acid-france.png";
import Image from "next/image";

import VivacySecurity from "@/app/components/globals/vivacySecurity";
import { useTranslations } from "next-intl";

type Params = {
  params: { locale: string };
};

const titleEN = "Contact Vivacy | A question about hyaluronic acid?";
const descriptionEN =
  "Contact Laboratoires Vivacy. Do you have any questions about hyaluronic acid indications? Would you like to contact our sales department?";
const titleFR = "";
const descriptionFR = "";

// META DATAS
export async function generateMetadata({ params }: Params) {
  const locale = params.locale;
  if (locale === "en") {
    return {
      title: titleEN,
      description: descriptionEN,
      authors: [{ name: "VIVACY" }],
      openGraph: {
        title: titleEN,
        description: descriptionEN,
        url: "https://vivacy.com/",
        siteName: "vivacy.com",
        images: [
          {
            url: "https://vivacy.com/vivacy-laboratories.jpg",
            width: 800,
            height: 600,
          },
        ],
        locale: "en_US",
        type: "website",
      },
    };
  } else if (locale === "fr") {
    return {
      title: titleFR,
      description: descriptionFR,
      authors: [{ name: "VIVACY" }],
      openGraph: {
        title: titleFR,
        description: descriptionFR,
        url: "https://vivacy.com/",
        siteName: "vivacy.com",
        images: [
          {
            url: "https://vivacy.com/vivacy-laboratories.jpg",
            width: 800,
            height: 600,
          },
        ],
        locale: "fr_FR",
        type: "website",
      },
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
            opacity: 0.02,
          }}
          className="max-lg:hidden w-full lg:w-[60%] -right-[20%] top-[15%]"
        />
        <div className="myContainer space-y-8 lg:space-y-28">
          <FromTopTitles
            titleH2={t("h2")}
            titleH3={t("h3")}
            h3Classes="text-black"
          />

          <div className="lg:grid lg:grid-cols-12 lg:space-x-28 lg:px-14 max-lg:space-y-8">
            <div className="lg:col-span-8 rounded-xl border-[1px] p-4 lg:py-8 lg:px-14 border-blue ">
              <ContactForm />
            </div>
            <div className="lg:col-span-4 lg:my-auto">
              <div className="space-y-4 text-center">
                {t.rich("annotation", {
                  p: (chunks) => <p className="lg:text-lg">{chunks}</p>,
                  a: (chunks) => (
                    <a
                      href={chunks?.toString()}
                      className="lg:text-lg underline"
                    >
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
