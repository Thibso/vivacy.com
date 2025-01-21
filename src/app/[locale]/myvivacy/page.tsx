import BlueButton from "@/app/components/buttons/BlueButton";
import HeaderBigTitle from "@/app/components/globals/headerBigTitle";
import ImageHeader from "@/app/components/globals/ImageHeader";
import PAnimate from "@/app/components/globals/pAnimate";
import FromTopCenteredTitles from "@/app/components/titles/FromTopCenteredTitles";
import MotionVideo from "@/app/components/videos/motionVideo";
import apple from "@/app/img/apple-store.jpg";
import bg from "@/app/img/background-grained.jpg";
import google from "@/app/img/google-store.jpg";
import bgHeader from "@/app/img/vivacy-security-check-products-provenance.jpg";
import section1 from "@/app/img/vivacy-security-logo.png";
import section3 from "@/app/img/vivacy-security.jpg";
import section2 from "@/app/img/vivacy-security.png";

import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

type Params = {
  params: { locale: string };
};

const titleEN = "My Vivacy App | Product Authentication | Injection Advice";
const descriptionEN =
  "My Vivacy. Discover the Vivacy product authentication app, as well as before and after hyaluronic acid injection advice for doctors.";
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

export default function MyVivacy() {
  const t = useTranslations("MyVivacy");
  const h = useTranslations("Global.vivacySecurity");

  return (
    <main>
      <section className="relative min-h-[400px] lg:min-h-[550px] grid z-[1] overflow-hidden">
        <ImageHeader src={bgHeader} alt={t("alt")} />
        <div className="absolute top-0 left-0 size-full -z-[1] bg-blue opacity-15"></div>
        <HeaderBigTitle title={t("title")} />
      </section>

      <section className="relative bg-[#fafbfc]">
        <div className="myContainer space-y-8 lg:space-20">
          <FromTopCenteredTitles
            titleH2={t("section1.h2")}
            titleH3={t("section1.h3")}
            h3Classes="text-black"
          />

          <PAnimate
            classes="text-center xl:max-w-[70%] mx-auto"
            content={t.rich("section1.content", {
              p: (chunks) => <p className="lg:text-lg">{chunks}</p>,
              sup: (chunks) => <sup>{chunks}</sup>,
            })}
          />

          <div className="space-y-8 lg:space-y-20 pt-20">
            <h2 className="h3-perso w-full xl:w-[70%] text-center lg:mx-auto">
              {t("section4.h2")}
            </h2>

            <MotionVideo src="/videos/presentation-myvivacy.mp4#t=1.5" />

            <div className="flex justify-center items-center gap-28">
              <BlueButton
                content={t("cta.title")}
                path={t("cta.path")}
                blank={true}
              />
              <div>
                <Image
                  src={section1}
                  alt={t("section1.alt")}
                  quality={75}
                  style={{
                    objectFit: "contain",
                  }}
                  className="h-[75px] w-fit"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue">
        <div className="myContainer space-y-8 lg:space-y-20">
          <h2 className="h3-perso text-white text-center">
            {t("section2.h2")}
          </h2>
          <div className="max-lg:flex max-lg:flex-col-reverse max-lg:gap-y-8 lg:grid lg:grid-cols-12">
            <div className="col-span-5 flex flex-col justify-center">
              <Image
                src={section2}
                alt={t("section2.alt")}
                quality={75}
                style={{
                  objectFit: "contain",
                  objectPosition: "50% 50%",
                  borderRadius: "12px",
                }}
                className="max-lg:mx-auto max-lg:w-[60%] lg:h-fit"
              />

              <div className="flex gap-4 justify-center mt-10">
                <Link
                  href="https://apps.apple.com/fr/app/my-vivacy/id1206429694"
                  target="_blank"
                  title={h("titles.appleStore")}
                >
                  <Image
                    src={apple}
                    alt={h("alts.appleStore")}
                    quality={75}
                    style={{
                      height: "40px",
                      objectFit: "contain",
                      borderRadius: "9px",
                    }}
                  />
                </Link>

                <Link
                  href="https://play.google.com/store/apps/details?id=eu.vivacy.vivacysecurity&hl=fr"
                  target="_blank"
                  title={h("titles.googlePlay")}
                >
                  <Image
                    src={google}
                    alt={h("alts.googlePlay")}
                    quality={75}
                    style={{
                      height: "40px",
                      objectFit: "contain",
                      borderRadius: "9px",
                    }}
                  />
                </Link>
              </div>
            </div>
            <div className="lg:my-4 lg:col-span-6 lg:col-start-7 p-4 lg:p-10 space-y-14 lg:space-y-20 bg-whiteGrey/20 backdrop-blur-md rounded-xl grid items-center">
              <PAnimate
                classes="space-y-8 lg:space-y-14 text-white"
                content={t.rich("section2.content", {
                  p: (chunks) => <p className="lg:text-lg">{chunks}</p>,
                  h2: (chunks) => (
                    <h2 className="h2-perso text-white">{chunks}</h2>
                  ),
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
        />

        <div className="myContainer lg:grid lg:grid-cols-12 max-lg:space-y-8">
          <div className="lg:col-span-6 space-y-8 lg:space-y-14 lg:py-6">
            <h2 className="h2-perso">{t("section3.h2")}</h2>
            <PAnimate
              classes="space-y-8 lg:space-y-14"
              content={t.rich("section3.content", {
                p: (chunks) => <p className="lg:text-lg">{chunks}</p>,
                h2: (chunks) => <h2 className="h2-perso">{chunks}</h2>,
              })}
            />
          </div>
          <div className="max-lg:h-[350px] lg:col-span-5 lg:col-start-8 relative">
            <Image
              src={section3}
              alt={t("section3.alt")}
              quality={75}
              fill
              style={{
                objectFit: "cover",
                objectPosition: "50% 50%",
                borderRadius: "12px",
              }}
              className="h-full"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
