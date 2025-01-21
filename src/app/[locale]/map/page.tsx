import Accordion from "@/app/components/globals/accordion";
import VivacySecurity from "@/app/components/globals/vivacySecurity";
import WorldMap from "@/app/components/globals/worldMap";
import FromTopCenteredTitles from "@/app/components/titles/FromTopCenteredTitles";
import vivacyLogo from "@/app/img/vivacy-laboratories-hyaluronic-acid-france.png";
import { useTranslations } from "next-intl";
import Image from "next/image";

type Params = {
  params: { locale: string };
};

const titleEN =
  "Laboratoires Vivacy’s Global Network | Distributors & Subsidiaries";
const descriptionEN =
  "Vivacy's Global Network. Find out more about the distributors and subsidiaries of Vivacy, experts in hyaluronic acid-based treatments.";
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
            url: "http://localhost:3000/vivacy-laboratories.jpg",
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
            url: "http://localhost:3000/vivacy-laboratories.jpg",
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
  const t = useTranslations("Map");
  const subsidiary = [];
  let i = 1;

  while (i < 12) {
    subsidiary.push(t(`subsidiary.${i}`));
    i++;
  }

  return (
    <main>
      <section className="mt-14 relative">
        <Image
          src={vivacyLogo}
          alt="Vivacy"
          quality={75}
          style={{
            objectFit: "contain",
            zIndex: "-1",
            opacity: 0.02,
          }}
          className="max-lg:hidden absolute -right-[30%] top-[15%]"
        />
        <div className="myContainer lg:pl-8 space-y-8 lg:space-y-28">
          <FromTopCenteredTitles
            titleH2={t("title")}
            titleH3={t("sub")}
            h3Classes="text-black"
          />
          <WorldMap />
        </div>
      </section>

      <section className="bg-blue">
        <div className="myContainer space-y-8 lg:space-y-20">
          <FromTopCenteredTitles
            titleH2={t("h2")}
            titleH3={t("h3")}
            h3Classes="text-white"
            h2Classes="text-white"
          />
          <ul className="lg:w-[90%] mx-auto">
            <li className="max-lg:hidden grid grid-cols-7 text-white uppercase border-b-2 border-white/50 py-6 font-bold">
              <span className="col-span-2">{t(`subsidiary.title`)}</span>
              <span className="col-span-3">{t(`adresses.title`)}</span>
              <span className="col-span-2">{t(`details.title`)}</span>
            </li>
            {subsidiary.map((item, index) => {
              return (
                <li
                  key={index}
                  className="max-lg:flex max-lg:flex-col max-lg:gap-y-4 lg:grid lg:grid-cols-7 text-white border-b-2 border-white/50 py-6 lg:items-center"
                >
                  <span className="max-lg:font-bold lg:col-span-2">
                    {t.rich(`subsidiary.${index + 1}`, {
                      br: () => <br />,
                    })}
                  </span>
                  <span className="lg:col-span-3">
                    {t.rich(`adresses.${index + 1}`, {
                      br: () => <br />,
                    })}
                  </span>
                  <span className="lg:col-span-2">
                    {t.rich(`details.${index + 1}`, {
                      br: () => <br />,
                    })}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section>
        <div className="myContainer space-y-8 lg:space-y-20">
          <FromTopCenteredTitles
            titleH2={t("section2.h2")}
            titleH3={t("section2.h3")}
            h3Classes="text-black"
          />

          <Accordion
            europe={t.rich("distribution.europe", {
              li: (chunks) => <li className="lg:text-lg">{chunks}</li>,
            })}
            asia={t.rich("distribution.asia", {
              li: (chunks) => <li className="lg:text-lg">{chunks}</li>,
            })}
            africa={t.rich("distribution.africa", {
              li: (chunks) => <li className="lg:text-lg">{chunks}</li>,
            })}
            americas={t.rich("distribution.americas", {
              li: (chunks) => <li className="lg:text-lg">{chunks}</li>,
            })}
          />
        </div>
      </section>

      <VivacySecurity />
    </main>
  );
}
