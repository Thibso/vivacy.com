import BlueButton from "@/app/components/buttons/BlueButton";
import HeaderBigTitle from "@/app/components/globals/headerBigTitle";
import ImageHeader from "@/app/components/globals/ImageHeader";
import PAnimate from "@/app/components/globals/pAnimate";
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

const titleEN = "Desirial | Women's Intimate Health Treatment";
const descriptionEN =
  "Desirial by Vivacy. Discover hyaluronic acid-based innovation for the treatment of vaginal dryness and women's intimate comfort.";
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

export default function Desirial() {
  const t = useTranslations("Desirial");

  return (
    <main>
      <section className="relative min-h-[400px] lg:min-h-[550px] grid z-[1] overflow-hidden">
        <ImageHeader src={bgHeader} alt={t("alt")} />

        <div className="absolute top-0 left-0 size-full -z-[1] bg-blue opacity-15"></div>
        <HeaderBigTitle
          title={t.rich("title", {
            sup: (chunks) => (
              <sup className="text-[4vw] align-super">{chunks}</sup>
            ),
          })}
        />
      </section>

      <section className="relative z-[1]">
        <Image
          src={vivacyLogo}
          alt="Vivacy"
          quality={75}
          style={{
            objectFit: "contain",
            zIndex: "-1",
            bottom: "0",
            left: 0,
            position: "absolute",
            opacity: 0.02,
          }}
          className="w-full lg:w-[50%]"
        />
        <div className="myContainer space-y-8 lg:space-y-20">
          {/* <div className="space-y-8 lg:space-y-14">
            <FromTopCenteredTitles
              titleH2={t("section1.h2")}
              titleH3={t.rich("section1.h3", {
                sup: (chunks) => <sup>{chunks}</sup>,
              })}
              h3Classes="text-black"
            />
            <PAnimate
              classes="mx-auto text-center lg:w-[80%]"
              content={t.rich("section1.content", {
                p: (chunks) => <p className="lg:text-lg">{chunks}</p>,
              })}
            />
          </div> */}

          <div className="max-lg:space-y-8 lg:grid lg:grid-cols-2 lg:gap-x-14">
            <div className="lg:col-span-1 space-y-8 lg:space-y-14">
              <FromTopTitles
                titleH2={t("section2.h2")}
                titleH3={t("section2.h3")}
                h3Classes="text-black"
              />

              <PAnimate
                classes="lg:w-[80%]"
                content={t.rich("section2.content", {
                  p: (chunks) => <p className="lg:text-lg">{chunks}</p>,
                })}
              />

              <div className="max-lg:flex max-lg:justify-center">
                <BlueButton
                  content={t("cta.title")}
                  path={t("cta.path")}
                  blank={true}
                />
              </div>
            </div>

            <div className="col-span-1 relative max-lg:h-[350px]">
              <Image
                src={section2}
                alt={t("section2.alt")}
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

      <section className="relative z-[1]">
        <Image
          src={section3Bg}
          alt={t("section3.alt")}
          quality={100}
          fill
          style={{
            objectFit: "cover",
            objectPosition: "50% 50%",
            zIndex: "-1",
          }}
        />
        <div className="myContainer lg:grid lg:grid-cols-12 ">
          <div className="p-4 lg:p-10 lg:col-span-7 backdrop-blur rounded-xl bg-white/15 space-y-8 lg:space-y-20">
            <FromTopTitles
              titleH2={t("section3.h2")}
              titleH3={t("section3.h3")}
              h3Classes="lg:text-black"
            />

            <PAnimate
              content={t.rich("section3.content", {
                p: (chunks) => <p className="lg:text-lg">{chunks}</p>,
                sup: (chunks) => <sup>{chunks}</sup>,
              })}
            />
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
                  alt={t("section4.alt1")}
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
                  alt={t("section4.alt2")}
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
              <PAnimate
                content={t.rich("section4.content", {
                  p: (chunks) => <p className="lg:text-lg">{chunks}</p>,
                  sup: (chunks) => <sup>{chunks}</sup>,
                })}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-[1]">
        <Image
          src={bg}
          alt="texture"
          quality={75}
          fill
          style={{
            objectFit: "cover",
            zIndex: "-1",
          }}
          className="max-lg:hidden"
        />
        <div className="myContainer max-lg:pt-0 space-y-8 lg:space-y-20">
          <FromTopCenteredTitles
            titleH2={t("section5.h2")}
            titleH3={t("section5.h3")}
            h3Classes="text-black"
          />

          <div className="max-lg:flex max-lg:flex-col-reverse max-lg:gap-y-8 lg:grid lg:grid-cols-12 lg:gap-x-14 xl:gap-x-24">
            <div className="lg:col-span-5 lg:flex lg:flex-col lg:justify-around space-y-8 lg:space-y-20">
              <PAnimate
                content={t.rich("section5.content", {
                  p: (chunks) => <p className="lg:text-lg">{chunks}</p>,
                })}
              />

              <div className="max-lg:flex max-lg:justify-center">
                <BlueButton
                  content={t("cta.title")}
                  path={t("cta.path")}
                  blank={true}
                />
              </div>
            </div>

            <div className="col-span-7 relative max-lg:h-[350px] h-full">
              <Image
                src={section5}
                alt={t("section5.alt")}
                quality={75}
                fill
                style={{
                  objectFit: "cover",
                  objectPosition: "50% 0%",
                  borderRadius: "12px",
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
