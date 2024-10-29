import BlueButton from "@/app/components/buttons/BlueButton";
import HeaderBigTitle from "@/app/components/globals/headerBigTitle";
import HeaderSpan from "@/app/components/globals/headerSpan";
import FromTopCenteredTitles from "@/app/components/titles/FromTopCenteredTitles";
import FromTopTitles from "@/app/components/titles/FromTopTitles";
import bg from "@/app/img/background-grained.jpg";
import bgHeader from "@/app/img/desirial/desirial-vivacy-laboratories.jpg";
import section4First from "@/app/img/desirial/expert-hyaluronic-acid-intimate-injections.jpg";
import section2 from "@/app/img/desirial/intimate-health-women-expert.jpg";
import section5 from "@/app/img/desirial/intimate-hyaluronic-acid-specialist.jpg";
import section3Bg from "@/app/img/desirial/intimitae-treatment-women-hyaluronic-acid.jpg";
import section4Second from "@/app/img/desirial/specialiste-women-intimate-health.jpg";
import vivacyLogo from "@/app/img/vivacy-laboratories-hyaluronic-acid-france.png";

import { useTranslations } from "next-intl";
import Image from "next/image";

type Params = {
  params: { locale: string };
};

// META DATAS
export async function generateMetadata({ params }: Params) {
  const locale = params.locale;
  if (locale === "en") {
    return {
      title: "DESIRIAL",
      description: "Description EN",
    };
  } else if (locale === "fr") {
    return {
      title: "Titre FR",
      description: "Description FR",
    };
  }
}

export default function Desirial() {
  const t = useTranslations("Desirial");

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
        <HeaderBigTitle title={t("title")} />

        <HeaderSpan content={t("span")} />
      </section>

      <section className="relative">
        <Image
          src={vivacyLogo}
          alt=""
          quality={75}
          style={{
            objectFit: "contain",
            zIndex: "-1",
            bottom: "0",
            left: 0,
            position: "absolute",
            opacity: 0.05,
          }}
          className="w-full lg:w-[50%]"
        />
        <div className="myContainer space-y-8 lg:space-y-28">
          <div className="space-y-8 lg:space-y-14">
            <FromTopCenteredTitles
              titleH2={t("section1.h2")}
              titleH3={t("section1.h3")}
              h3Classes="text-black"
            />

            <div className="space-y-4 mx-auto text-center lg:w-[60%]">
              {t.rich("section1.content", {
                p: (chunks) => <p className="text-lg">{chunks}</p>,
              })}
            </div>
          </div>

          <div className="max-lg:flex max-lg:flex-col-reverse max-lg:gap-y-8 lg:grid lg:grid-cols-2 lg:gap-x-14">
            <div className="lg:col-span-1 space-y-8 lg:space-y-14 lg:mb-36">
              <FromTopTitles
                titleH2={t("section2.h2")}
                titleH3={t("section2.h3")}
                h3Classes="text-black"
              />
              <div className="space-y-4 lg:w-[80%]">
                {t.rich("section2.content", {
                  p: (chunks) => <p className="text-lg">{chunks}</p>,
                })}
              </div>

              <div className="max-lg:flex max-lg:justify-center lg:pt-14">
                <BlueButton content={t("cta.title")} path={t("cta.path")} />
              </div>
            </div>

            <div className="col-span-1 relative max-lg:h-[350px]">
              <Image
                src={section2}
                alt=""
                quality={75}
                fill
                style={{
                  objectFit: "cover",
                  objectPosition: "50% 50%",
                  borderRadius: "12px",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative">
        <Image
          src={section3Bg}
          alt=""
          quality={100}
          fill
          style={{
            objectFit: "cover",
            objectPosition: "50% 50%",
            zIndex: "-1",
          }}
        />
        <div className="myContainer lg:grid lg:grid-cols-10 ">
          <div className="p-4 lg:p-10 lg:col-span-7 backdrop-blur rounded-xl bg-white/15 space-y-8 lg:space-y-14">
            <FromTopTitles
              titleH2={t("section3.h2")}
              titleH3={t("section3.h3")}
              h3Classes="text-white"
            />
            <div className="xl:w-[70%]">
              {t.rich("section3.content", {
                p: (chunks) => <p className="text-lg">{chunks}</p>,
              })}
            </div>
            <div className="max-lg:flex max-lg:justify-center">
              <BlueButton content={t("cta.title")} path={t("cta.path")} />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="myContainer space-y-8 lg:space-y-28">
          <FromTopCenteredTitles
            titleH2={t("section4.h2")}
            titleH3={t("section4.h3")}
            h3Classes="text-black"
          />
          <div className="lg:grid lg:grid-cols-12 max-lg:space-y-8">
            <div className="lg:col-span-6 grid grid-cols-5 gap-x-4 lg:gap-x-10 h-[350px] lg:h-full">
              <div className="col-span-2 relative h-full">
                <Image
                  src={section4First}
                  alt=""
                  quality={75}
                  fill
                  style={{
                    objectFit: "cover",
                    objectPosition: "50% 50%",
                    borderRadius: "11px",
                  }}
                />
              </div>
              <div className="col-span-3 relative h-full">
                <Image
                  src={section4Second}
                  alt=""
                  quality={75}
                  fill
                  style={{
                    objectFit: "cover",
                    objectPosition: "50% 50%",
                    borderRadius: "11px",
                  }}
                />
              </div>
            </div>

            <div className="col-span-5 col-start-8 space-y-14 lg:py-4">
              <div className="space-y-4">
                {t.rich("section4.content", {
                  p: (chunks) => <p className="text-lg">{chunks}</p>,
                })}
              </div>
              <div className="max-lg:flex max-lg:justify-center">
                <BlueButton content={t("cta.title")} path={t("cta.path")} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative">
        <Image
          src={bg}
          alt=""
          quality={75}
          fill
          style={{
            objectFit: "cover",
            zIndex: "-1",
          }}
        />
        <div className="myContainer max-lg:space-y-8">
          <FromTopTitles
            titleH2={t("section5.h2")}
            titleH3={t("section5.h3")}
            h3Classes="text-black"
          />

          <div className="max-lg:flex max-lg:flex-col-reverse max-lg:gap-y-8 lg:grid lg:grid-cols-12 lg:gap-x-14 xl:gap-x-24">
            <div className="lg:col-span-6 lg:flex lg:flex-col lg:justify-around max-lg:space-y-8">
              <div className="space-y-4">
                {t.rich("section5.content", {
                  p: (chunks) => <p className="text-lg">{chunks}</p>,
                })}
              </div>
              <div className="max-lg:flex max-lg:justify-center">
                <BlueButton content={t("cta.title")} path={t("cta.path")} />
              </div>
            </div>

            <div className="col-span-6 relative h-[350px] lg:h-[750px]">
              <Image
                src={section5}
                alt=""
                quality={75}
                fill
                style={{
                  objectFit: "cover",
                  objectPosition: "50% 50%",
                  borderRadius: "11px",
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
