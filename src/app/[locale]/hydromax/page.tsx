import BlueButton from "@/app/components/buttons/BlueButton";
import WhiteButton from "@/app/components/buttons/WhiteButton";
import HeaderBigTitle from "@/app/components/globals/headerBigTitle";
import ImageHeader from "@/app/components/globals/ImageHeader";
import PAnimate from "@/app/components/globals/pAnimate";
import UlAnimate from "@/app/components/globals/UlAnimate";
import KeyNumbers from "@/app/components/hydromax/keyNumbers";
import TextOnImage from "@/app/components/hydromax/textOnImage";
import VideoToLeftHydromax from "@/app/components/hydromax/videoToLeft";
import FromTopTitles from "@/app/components/titles/FromTopTitles";
import bg from "@/app/img/background-grained.jpg";
import bgHeader from "@/app/img/hydromax/hydromax-laboratoires-vivacy.jpg";
import bgImg from "@/app/img/hydromax/hydromax-packaging-laboratoire-vivacy.jpg";
import section2 from "@/app/img/hydromax/packshot-hydromax-laboratoire-vivacy.jpg";
import skin3complex from "@/app/img/hydromax/skin3-complex-vivacy-hydromax-.png";
import section4 from "@/app/img/hydromax/stylage-hydromax-filler-hyaluronic-acid-vivacy.jpg";
import section3 from "@/app/img/hydromax/vivacy-hyaluronic-acid-experts-hydromax.jpg";

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
  const t = useTranslations("Hydromax");

  return (
    <main>
      <section className="relative min-h-[400px] lg:min-h-[550px] grid z-[1] overflow-hidden">
        <ImageHeader src={bgHeader} alt={t("alt")} />

        <div className="absolute top-0 left-0 size-full -z-[1] bg-blue opacity-50"></div>
        <HeaderBigTitle
          title={t.rich("title", {
            sup: (chunks) => <sup>{chunks}</sup>,
          })}
        />
        <div className="flex justify-center absolute bottom-10 left-1/2 -translate-x-1/2">
          <WhiteButton content={t("cta_1.title")} path="" />
        </div>
      </section>

      <section className="bg-white z-[2] relative">
        <div className="myContainer space-y-8 lg:space-y-20">
          <VideoToLeftHydromax />
        </div>
      </section>

      <section className="relative bg-blue z-[2]">
        <div className="px-4 py-12 lg:px-24 lg:grid lg:grid-cols-3">
          <div className="col-span-2 flex justify-start">
            <Image
              src={skin3complex}
              alt="Logo Skin3 complexe"
              quality={100}
              className="max-lg:w-[70%] h-full lg:max-h-[200px] w-auto object-contain"
            />
          </div>

          <div className="max-lg:pt-8 flex">
            <UlAnimate
              classes="max-lg:mx-auto my-auto"
              content={t.rich("section2.content", {
                li: (chunks) => (
                  <li className="lg:text-3xl text-white list-decimal">
                    {chunks}
                  </li>
                ),
                sup: (chunks) => <sup>{chunks}</sup>,
                strong: (chunks) => <strong>{chunks}</strong>,
              })}
            />
          </div>
        </div>
      </section>

      <section className="relative z-[2]">
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
        <div className="myContainer lg:grid lg:grid-cols-7 lg:gap-x-24">
          <div className="col-span-4 space-y-8 lg:space-y-14 lg:py-8">
            <FromTopTitles
              titleH2={t("section3.h2")}
              titleH3={t.rich("section3.h3", {
                sup: (chunks) => <sup>{chunks}</sup>,
              })}
              h3Classes="text-black"
            />
            <PAnimate
              content={t.rich("section3.content", {
                p: (chunks) => (
                  <p className="lg:text-lg lg:max-w-[80%]">{chunks}</p>
                ),
                strong: (chunks) => (
                  <strong className="lg:text-lg">{chunks}</strong>
                ),
              })}
            />
            <FromTopTitles
              titleH2={t.rich("section3.h3_bis", {
                sup: (chunks) => <sup>{chunks}</sup>,
              })}
              titleH3={null}
              h3Classes="text-black"
            />
            <PAnimate
              content={t.rich("section3.content_bis", {
                p: (chunks) => (
                  <p className="lg:text-lg lg:max-w-[80%]">{chunks}</p>
                ),
                strong: (chunks) => (
                  <strong className="lg:text-lg">{chunks}</strong>
                ),
                sup: (chunks) => <sup>{chunks}</sup>,
              })}
            />
          </div>

          <div className="col-span-3 relative max-lg:mt-8 max-lg:h-[350px]">
            <Image
              src={section2}
              alt={t("section3.alt")}
              quality={100}
              fill
              style={{
                objectFit: "cover",
                objectPosition: "50% 50%",
              }}
              className="rounded-xl"
            />
          </div>
        </div>
      </section>

      <section className="relative z-[2]">
        <Image
          src={bgImg}
          alt=""
          quality={100}
          fill
          style={{
            objectFit: "cover",
            zIndex: "-2",
            objectPosition: "bottom center",
          }}
        />

        <div className="absolute size-full top-[0] left-0 bg-blue/30 -z-[1]"></div>

        <TextOnImage />
      </section>

      <section className="bg-white z-[2] relative">
        <div className="lg:py-24 space-y-8 lg:space-y-20 max-lg:myContainer">
          {/* FIRST */}
          <div className="lg:grid lg:grid-cols-7 max-lg:flex max-lg:flex-col-reverse max-lg:gap-y-8">
            <div className="col-span-4 relative max-lg:h-[350px]">
              <Image
                src={section3}
                alt={t("section3.alt")}
                quality={100}
                fill
                style={{
                  objectFit: "cover",
                  objectPosition: "50% 50%",
                }}
                className="max-lg:rounded-xl rounded-r-xl"
              />
            </div>

            <div className="lg:col-span-3 lg:px-24 lg:py-14 space-y-8 lg:space-y-20">
              <FromTopTitles
                titleH2={t.rich("section5.h2", {
                  sup: (chunks) => <sup>{chunks}</sup>,
                })}
                titleH3={t.rich("section5.h3", {
                  sup: (chunks) => <sup>{chunks}</sup>,
                })}
                h3Classes="text-black"
              />

              <PAnimate
                content={t.rich("section5.content", {
                  p: (chunks) => <p className="lg:text-lg">{chunks}</p>,
                  strong: (chunks) => (
                    <strong className="lg:text-lg">{chunks}</strong>
                  ),
                  sup: (chunks) => <sup>{chunks}</sup>,
                })}
              />
            </div>
          </div>

          {/* SECOND */}
          <div className="lg:grid lg:grid-cols-7">
            <div className="lg:col-span-3 lg:px-24 lg:py-14 space-y-8 lg:space-y-20">
              <FromTopTitles
                titleH2={t.rich("section6.h2", {
                  sup: (chunks) => <sup>{chunks}</sup>,
                })}
                titleH3={t.rich("section6.h3", {
                  sup: (chunks) => <sup>{chunks}</sup>,
                })}
                h3Classes="text-black"
              />

              <PAnimate
                content={t.rich("section6.content", {
                  p: (chunks) => <p className="lg:text-lg">{chunks}</p>,
                  strong: (chunks) => (
                    <strong className="lg:text-lg">{chunks}</strong>
                  ),
                  sup: (chunks) => <sup>{chunks}</sup>,
                  ul: (chunks) => (
                    <ul className="lg:text-lg list-disc ml-8">{chunks}</ul>
                  ),
                  li: (chunks) => <li>{chunks}</li>,
                })}
              />
              <div className="flex justify-center lg:justify-start">
                <BlueButton content={t("cta_1.title")} path={t("cta_1.path")} />
              </div>
            </div>
            <div className="col-span-4 relative max-lg:h-[350px] max-lg:mt-8">
              <Image
                src={section4}
                alt={t("section3.alt")}
                quality={75}
                fill
                style={{
                  objectFit: "cover",
                  objectPosition: "50% 0%",
                }}
                className="max-lg:rounded-xl rounded-l-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <KeyNumbers />
    </main>
  );
}
