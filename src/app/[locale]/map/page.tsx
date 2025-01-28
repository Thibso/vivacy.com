import Accordion from "@/app/components/globals/accordion";
import VivacySecurity from "@/app/components/globals/vivacySecurity";
import WorldMap from "@/app/components/globals/worldMap";
import SubsidiariesList from "@/app/components/map/subsidiariesList";
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
  const t = useTranslations("Map");
  const subsidiary = [];
  let i = 1;

  while (i < 12) {
    subsidiary.push(t(`subsidiary.${i}`));
    i++;
  }

  return (
    <main>
      <section className="mt-14 relative overflow-hidden">
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
        <div className="myContainer space-y-8 lg:space-y-28">
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
          <SubsidiariesList />
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
            na={t.rich("distribution.na", {
              li: (chunks) => <li className="lg:text-lg">{chunks}</li>,
            })}
            sa={t.rich("distribution.sa", {
              li: (chunks) => <li className="lg:text-lg">{chunks}</li>,
            })}
            asia={t.rich("distribution.asia", {
              li: (chunks) => <li className="lg:text-lg">{chunks}</li>,
            })}
            africa={t.rich("distribution.africa", {
              li: (chunks) => <li className="lg:text-lg">{chunks}</li>,
            })}
            oceania={t.rich("distribution.oceania", {
              li: (chunks) => <li className="lg:text-lg">{chunks}</li>,
            })}
          />
        </div>
      </section>

      <VivacySecurity />
    </main>
  );
}
