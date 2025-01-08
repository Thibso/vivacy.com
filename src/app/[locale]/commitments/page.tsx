import BlueButton from "@/app/components/buttons/BlueButton";
import HeaderBigTitle from "@/app/components/globals/headerBigTitle";
import HeaderSpan from "@/app/components/globals/headerSpan";
import FromTopCenteredTitles from "@/app/components/titles/FromTopCenteredTitles";
import FromTopTitles from "@/app/components/titles/FromTopTitles";
import fourth from "@/app/img/auvergne-rhone-alpes-vivacy.jpg";
import bg from "@/app/img/background-grained.jpg";
import authenticity from "@/app/img/badge-check.png";
import efficiency from "@/app/img/crosshair.png";
import environment from "@/app/img/environment-challenge-vivacy.jpeg";
import rhoneAlpes from "@/app/img/Groupe 66.png";
import security from "@/app/img/lock-keyhole.png";
import quality from "@/app/img/shield-check.png";
import first from "@/app/img/vivacy-laboratories-commitments.jpg";
import second from "@/app/img/vivacy-photo-from-top.jpg";

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

  const valuesAlt = [
    t("section1.quality.title"),
    t("section1.security.title"),
    t("section1.authenticity.title"),
    t("section1.efficiency.title"),
  ];

  return (
    <main>
      <section className="relative min-h-[400px] lg:min-h-[550px] grid z-[1]">
        <video
          className="absolute max-md:h-[150%] max-xl:h-[140%] xl:size-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover -z-[2]"
          autoPlay
          muted
          playsInline
          loop
        >
          <source src="/videos/our-commitments-vivacy.mp4" type="video/mp4" />
        </video>
        <div className="absolute top-0 left-0 size-full -z-[1] bg-blue opacity-25"></div>
        <HeaderBigTitle title={t("title")} />

        <HeaderSpan content={t("span")} />
      </section>

      <section className="relative z-[1] bg-white">
        <div className="myContainer space-y-8 lg:space-y-28">
          <FromTopCenteredTitles
            titleH2={t("section1.h2")}
            titleH3={t("section1.h3")}
            h3Classes="text-black"
          />

          <div className="max-lg:space-y-12 lg:grid lg:grid-cols-2 lg:gap-x-20 lg:gap-y-14 relative lg:w-[80%] lg:mx-auto">
            {corporateValues.map((value, index) => {
              return (
                <div key={index} className="space-y-4">
                  <Image
                    src={value[0]}
                    alt={valuesAlt[index]}
                    quality={75}
                    className="mx-auto"
                  />
                  <h4 className="text-lg font-semibold text-center uppercase text-blue">
                    {value[1]}
                  </h4>
                  <p className="text-center lg:text-lg">{value[2]}</p>
                </div>
              );
            })}

            <div className="max-lg:flex max-lg:justify-center lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2">
              <BlueButton
                content={t("section1.cta.title")}
                path={t("section1.cta.path")}
              />
            </div>
          </div>

          <div>
            <p>* {t("section1.references.rifd")}</p>
          </div>
        </div>
      </section>

      <section className="relative z-[1] pb-16 lg:pb-24 xl:pb-32">
        <Image
          src={bg}
          alt="texture"
          quality={100}
          className="absolute object-contain w-full -z-[1]"
        />

        <div className="myContainer max-lg:pb-8">
          <FromTopTitles
            titleH2={t("section2.h2")}
            titleH3={t("section2.h3")}
            h3Classes="text-black"
          />
        </div>

        <div className="max-lg:space-y-14">
          {/* first */}
          <div className="max-lg:flex max-lg:flex-col-reverse max-lg:px-5 max-lg:gap-8 lg:grid lg:grid-cols-2">
            <div className="relative max-lg:h-[350px]">
              <Image
                src={first}
                alt={t("section2.first.alt")}
                quality={75}
                fill
                className="object-cover object-center"
              />
            </div>
            <div className="lg:myContainer space-y-4">
              {t.rich("section2.first.content", {
                p: (chunks) => <p className="lg:text-lg">{chunks}</p>,
              })}
            </div>
          </div>

          {/* second */}
          <div className="max-lg:px-5 space-y-8 lg:grid lg:grid-cols-2 lg:mt-72">
            <div className="lg:px-28 lg:py-6 space-y-8 lg:space-y-20">
              <FromTopTitles
                titleH2={t("section2.second.h2")}
                titleH3={t("section2.second.h3")}
                h3Classes="text-black"
              />

              <div className="space-y-4">
                {t.rich("section2.second.content", {
                  p: (chunks) => <p className="lg:text-lg">{chunks}</p>,
                })}
              </div>
            </div>

            <div className="relative max-lg:h-[350px] lg:mr-14">
              <Image
                src={second}
                alt={t("section2.second.alt")}
                quality={100}
                fill
                className="object-cover object-left"
              />
            </div>
          </div>

          {/* third */}
          <div className="max-lg:px-5 max-lg:flex max-lg:flex-col-reverse max-lg:gap-8 lg:grid lg:grid-cols-2 lg:mt-40">
            <div className="relative max-lg:h-[350px]">
              <Image
                src={environment}
                alt={t("section2.third.alt")}
                quality={75}
                fill
                className="object-cover object-center"
              />
            </div>
            <div className="lg:px-28 lg:pb-16 space-y-8 lg:space-y-20">
              <FromTopTitles
                titleH2={t("section2.third.h2")}
                titleH3={t("section2.third.h3")}
                h3Classes="text-black"
              />
              <div className="space-y-4">
                {t.rich("section2.third.content", {
                  p: (chunks) => <p className="lg:text-lg">{chunks}</p>,
                })}
              </div>
            </div>
          </div>

          {/* fourth */}
          <div className="max-lg:px-5 lg:grid lg:grid-cols-2 lg:mt-10 space-y-8">
            <div className="lg:myContainer space-y-8 lg:space-y-20">
              <Image
                src={rhoneAlpes}
                alt={t("section2.fourth.alt")}
                quality={75}
                className="max-lg:w-[60%] max-lg:mx-auto"
              />
              <div className="space-y-4">
                {t.rich("section2.third.content", {
                  p: (chunks) => <p className="lg:text-lg">{chunks}</p>,
                })}
              </div>
            </div>
            <div className="relative max-lg:h-[350px]">
              <Image
                src={fourth}
                alt={t("section2.fourth.alt")}
                quality={75}
                fill
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
