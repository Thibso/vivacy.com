import BlueButton from "@/app/components/buttons/BlueButton";
import HeaderBigTitle from "@/app/components/globals/headerBigTitle";
import PAnimate from "@/app/components/globals/pAnimate";
import FromTopCenteredTitles from "@/app/components/titles/FromTopCenteredTitles";
import FromTopTitles from "@/app/components/titles/FromTopTitles";
import bg from "@/app/img/background-grained.jpg";
import secrtion1Second from "@/app/img/stylage/specialist-hyaluronic-acid-laboratory-vivacy-stylage.jpg";
import secrtion1First from "@/app/img/stylage/stylage-acid-hyaluronic-expert.jpg";
import section4First from "@/app/img/stylage/stylage-acid-hyaluronic-quality.jpg";
import section3Bg from "@/app/img/stylage/stylage-range-hyaluronic-acid-injections.jpg";
import section2 from "@/app/img/stylage/stylage-range-vivacy-laboratories.jpg";
import section4Second from "@/app/img/stylage/stylage-safety-hyaluronic-acid-injections.jpg";
import vivacyLogo from "@/app/img/vivacy-laboratories-hyaluronic-acid-france.png";

import { useTranslations } from "next-intl";
import Image from "next/image";

type Params = {
  params: { locale: string };
};

const titleEN = "Stylage by Vivacy | Acide Hyaluronique Injectable Premium";
const descriptionEN =
  "Stylage by Vivacy. Discover the range of hyaluronic acid-based filling products from Laboratoires Vivacy, with or without lidocaine.";
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

export default function Stylage() {
  const t = useTranslations("Stylage");

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
          <source src="/videos/stylage-vivacy.mp4" type="video/mp4" />
        </video>
        <div className="absolute top-0 left-0 size-full -z-[1] bg-blue opacity-25"></div>
        <HeaderBigTitle
          title={t.rich("title", {
            sup: (chunks) => <sup>{chunks}</sup>,
          })}
        />
      </section>

      <section className="relative z-[1] bg-white">
        <Image
          src={vivacyLogo}
          alt="Vivacy"
          quality={75}
          style={{
            objectFit: "contain",
            zIndex: "-1",
            left: 0,
            position: "absolute",
            opacity: 0.02,
          }}
          className="w-full lg:w-[60%] bottom-[200px] lg:-bottom-[300px]"
        />
        <div className="myContainer space-y-8 lg:space-y-28">
          <FromTopCenteredTitles
            titleH2={t("section1.h2")}
            titleH3={t.rich("section1.h3", {
              sup: (chunks) => <sup>{chunks}</sup>,
            })}
            h3Classes="text-black"
          />

          <div className="max-lg:flex max-lg:flex-col-reverse max-lg:gap-y-8 lg:grid lg:grid-cols-12">
            <div className="lg:col-span-5 space-y-8 lg:space-y-28 lg:py-4">
              <PAnimate
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

            <div className="col-span-6 col-start-7 gap-y-4 grid grid-rows-2 relative max-lg:h-[350px]">
              <div className="row-span-1 relative">
                <Image
                  src={secrtion1First}
                  alt={t("section1.alt1")}
                  quality={100}
                  fill
                  style={{
                    objectFit: "cover",
                    objectPosition: "50% 50%",
                    borderRadius: "12px",
                  }}
                />
              </div>
              <div className="row-span-1 relative">
                <Image
                  src={secrtion1Second}
                  alt={t("section1.alt2")}
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
        </div>
      </section>

      <section className="relative z-[1]">
        <div className="myContainer max-lg:pt-0">
          <div className="lg:grid lg:grid-cols-12 max-lg:space-y-8">
            <div className="lg:col-span-6 relative max-lg:h-[350px]">
              <Image
                src={section2}
                alt={t("section2.alt")}
                quality={100}
                fill
                style={{
                  objectFit: "cover",
                  objectPosition: "50% 50%",
                  borderRadius: "12px",
                }}
              />
            </div>

            <div className="lg:col-span-5 lg:col-start-8 space-y-8 lg:space-y-20 lg:py-8">
              <FromTopTitles
                titleH2={t("section2.h2")}
                titleH3={t("section2.h3")}
                h3Classes="text-black"
              />

              <PAnimate
                content={t.rich("section2.content", {
                  p: (chunks) => <p className="lg:text-lg">{chunks}</p>,
                })}
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
        <div className="myContainer lg:grid lg:grid-cols-10 ">
          <div className="p-4 lg:p-10 lg:col-span-7 backdrop-blur rounded-xl bg-white/15 space-y-8 lg:space-y-20">
            <FromTopTitles
              titleH2={t("section3.h2")}
              titleH3={t("section3.h3")}
              h3Classes="lg:text-black"
            />
            <div className="space-y-4">
              <PAnimate
                content={t.rich("section3.content", {
                  p: (chunks) => <p className="lg:text-lg">{chunks}</p>,
                  sup: (chunks) => <sup className="text-sm">{chunks}</sup>,
                })}
              />

              <p className="text-sm">{t("section3.asterisk")}</p>
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
        />
        <div className="myContainer space-y-8 lg:space-y-20">
          <FromTopCenteredTitles
            titleH2={t.rich("section4.h2", {
              sup: (chunks) => <sup>{chunks}</sup>,
            })}
            titleH3={t("section4.h3")}
            h3Classes="text-black"
          />
          <div className="lg:grid lg:grid-cols-12 max-lg:space-y-8">
            <div className="lg:col-span-6 grid grid-cols-5 gap-x-4 lg:gap-x-10 h-[350px] lg:h-full">
              <div className="col-span-2 relative h-full">
                <Image
                  src={section4First}
                  alt={t("section4.alt1")}
                  quality={100}
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
                  quality={100}
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

              <div className="max-lg:flex max-lg:justify-center">
                <BlueButton
                  content={t("cta.title")}
                  path={t("cta.path")}
                  blank={true}
                />
              </div>
            </div>
          </div>

          <ol className="max-lg pt-4 list-decimal mx-4">
            {t.rich("section4.references", {
              li: (chunks) => <li className="text-sm">{chunks}</li>,
            })}
          </ol>
        </div>
      </section>
    </main>
  );
}
