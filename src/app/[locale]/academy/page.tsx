import VideoToLeft from "@/app/components/academy/videoToLeft";
import BlueButton from "@/app/components/buttons/BlueButton";
import HeaderBigTitle from "@/app/components/globals/headerBigTitle";
import ImageHeader from "@/app/components/globals/ImageHeader";
import PAnimate from "@/app/components/globals/pAnimate";
import FromTopCenteredTitles from "@/app/components/titles/FromTopCenteredTitles";
import FromTopTitles from "@/app/components/titles/FromTopTitles";
import aesthetic from "@/app/img/academy/aesthetic.png";
import kol from "@/app/img/academy/kol.png";
import videos from "@/app/img/academy/new-videos.png";
import webinars from "@/app/img/academy/regular-live-webinars.png";
import trainings from "@/app/img/academy/training.png";
import bg from "@/app/img/background-grained.jpg";
import section4_2 from "@/app/img/vivacy-academy-demonstration.jpg";
import bgHeader from "@/app/img/vivacy-academy-formations.jpg";
import section4_1 from "@/app/img/vivacy-academy-lesson.jpg";
import section2 from "@/app/img/vivacy-academy.jpg";
import vivacyLogo from "@/app/img/vivacy-laboratories-hyaluronic-acid-france.png";

import { useTranslations } from "next-intl";
import Image from "next/image";

type Params = {
  params: { locale: string };
};

const titleEN = "Vivacy Academy | Learning Platform for Medical Professionals";
const descriptionEN =
  "Vivacy Academy. Discover this learning platform 100% dedicated to healthcare professionals interested in dermal fillers.";
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

export default function VivacyBeauty() {
  const t = useTranslations("Academy");

  const icons = [trainings, kol, videos, webinars, aesthetic];
  const texts = [
    t.rich("section2.steps.1", {
      p: (chunk) => <p className="text-white text-base text-center">{chunk}</p>,
      br: () => <br />,
    }),
    t.rich("section2.steps.2", {
      p: (chunk) => <p className="text-white text-base text-center">{chunk}</p>,
      br: () => <br />,
    }),
    t.rich("section2.steps.3", {
      p: (chunk) => <p className="text-white text-base text-center">{chunk}</p>,
      br: () => <br />,
    }),
    t.rich("section2.steps.4", {
      p: (chunk) => <p className="text-white text-base text-center">{chunk}</p>,
      br: () => <br />,
    }),
    t.rich("section2.steps.5", {
      p: (chunk) => <p className="text-white text-base text-center">{chunk}</p>,
      br: () => <br />,
    }),
  ];

  return (
    <main>
      <section className="relative min-h-[400px] lg:min-h-[550px] grid z-[1] overflow-hidden">
        <ImageHeader src={bgHeader} alt={t("alt")} />

        <div className="absolute top-0 left-0 size-full -z-[1] bg-blue opacity-15"></div>
        <HeaderBigTitle title={t("title")} />
      </section>

      <section className="relative z-[1]">
        <Image
          src={vivacyLogo}
          alt="Vivacy"
          quality={75}
          style={{
            objectFit: "contain",
            zIndex: "-1",
            top: "27%",
            left: "-5%",
            position: "absolute",
            opacity: 0.02,
          }}
          className="w-full lg:w-[70%]"
        />
        <div className="myContainer space-y-8 lg:space-y-28">
          <div className="max-lg:space-y-8 lg:grid lg:grid-cols-2 lg:gap-x-14">
            <div className="lg:col-span-1 space-y-8 lg:space-y-14">
              <FromTopTitles
                titleH2={t("section1.h2")}
                titleH3={t("section1.h3")}
                h3Classes="text-black"
              />

              <PAnimate
                classes="lg:w-[80%]"
                content={t.rich("section1.content", {
                  p: (chunks) => <p className="lg:text-lg">{chunks}</p>,
                  sup: (chunks) => <sup>{chunks}</sup>,
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
                alt={t("section1.alt")}
                quality={100}
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

      <section className="relative z-[1] bg-blue">
        <div className="myContainer space-y-8 lg:space-y-20">
          <FromTopCenteredTitles
            titleH2={t("section2.h2")}
            titleH3={t("section2.h3")}
            h3Classes="text-white"
            h2Classes="text-white"
          />

          <div className="max-lg:space-y-8 lg:grid lg:grid-cols-5 max-w-[1200px] lg:items-center mx-auto">
            {texts.map((text, index) => {
              return (
                <article
                  key={index}
                  className="space-y-4 flex flex-col items-center"
                >
                  <Image
                    src={icons[index]}
                    alt={t("section1.alt")}
                    quality={100}
                  />
                  {text}
                </article>
              );
            })}
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

        <VideoToLeft />

        <div className="myContainer max-lg:pt-0 max-lg:space-y-8 lg:grid lg:grid-cols-2 lg:items-center lg:gap-x-20">
          <div className="space-y-8 lg:space-y-20">
            <FromTopTitles
              titleH2={t("section4.h2")}
              titleH3={t("section4.h3")}
            />

            <PAnimate
              content={t.rich("section4.content", {
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

          <div className="grid grid-rows-2 h-full gap-y-8">
            <div className="relative  max-lg:h-[300px]">
              <Image
                src={section4_1}
                alt={t("section1.alt")}
                quality={100}
                fill
                style={{
                  objectFit: "cover",
                  objectPosition: "50% 50%",
                  borderRadius: "12px",
                }}
              />
            </div>

            <div className="relative max-lg:h-[300px]">
              <Image
                src={section4_2}
                alt={t("section1.alt")}
                quality={100}
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
    </main>
  );
}
