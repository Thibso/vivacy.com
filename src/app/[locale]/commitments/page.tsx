import BlueButton from "@/app/components/buttons/BlueButton";
import FromTopCenteredTitles from "@/app/components/titles/FromTopCenteredTitles";
import authenticity from "@/app/img/badge-check.png";
import efficiency from "@/app/img/crosshair.png";
import security from "@/app/img/lock-keyhole.png";
import bgHeader from "@/app/img/our-brands-hyaluronic-acid.jpg";
import quality from "@/app/img/shield-check.png";

import { useTranslations } from "next-intl";
import Image, { StaticImageData } from "next/image";

type Params = {
  params: { locale: string };
};

// META DATAS
export async function generateMetadata({ params }: Params) {
  const locale = params.locale;
  if (locale === "en") {
    return {
      title: "Our brands",
      description: "Description EN",
    };
  } else if (locale === "fr") {
    return {
      title: "Titre FR",
      description: "Description FR",
    };
  }
}

export default function OurCommitments() {
  const t = useTranslations("Commitments");

  const corporateValues: Array<[StaticImageData, string, string]> = [
    [quality, t("section1.quality.title"), t("section1.quality.content")],
    [security, t("section1.security.title"), t("section1.security.content")],
    [
      authenticity,
      t("section1.authenticity.title"),
      t("section1.authenticity.content"),
    ],
    [
      efficiency,
      t("section1.efficiency.title"),
      t("section1.efficiency.content"),
    ],
  ];

  return (
    <main>
      <section className="relative min-h-[400px] lg:min-h-[550px] grid">
        <Image
          src={bgHeader}
          alt=""
          quality={100}
          fill
          style={{
            objectFit: "cover",
            objectPosition: "50% 50%",
            zIndex: "-2",
            position: "absolute",
          }}
        />
        <div className="absolute top-0 left-0 size-full -z-[1] bg-blue opacity-15"></div>
        <div className="m-auto px-5 lg:px-28 lg:py-32">
          <h1 className=" text-[10vw] font-mona uppercase font-bold text-whiteGrey text-center leading-none">
            {t("title")}
          </h1>
        </div>

        <span className="max-lg:text-center max-lg:w-[60%] absolute bottom-8 lg:bottom-16 left-1/2 -translate-x-1/2 bg-whiteGrey/50 py-3 px-8 rounded-full uppercase text-sm text-blue backdrop-blur-sm">
          {t("span")}
        </span>
      </section>

      <section>
        <div className="myContainer space-y-8 lg:space-y-28">
          <FromTopCenteredTitles
            titleH2={t("section1.h2")}
            titleH3={t("section1.h3")}
            h3Classes="text-black"
          />

          <div className="grid grid-cols-2 gap-x-20 gap-y-14 relative">
            {corporateValues.map((value, index) => {
              return (
                <div key={index} className="space-y-4">
                  <Image
                    src={value[0]}
                    alt=""
                    quality={75}
                    className="mx-auto"
                  />
                  <h4 className="text-lg font-semibold text-center uppercase text-blue">
                    {value[1]}
                  </h4>
                  <p className="text-center">{value[2]}</p>
                </div>
              );
            })}

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2">
              <BlueButton
                content={t("section1.cta.title")}
                path={t("section1.cta.path")}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
