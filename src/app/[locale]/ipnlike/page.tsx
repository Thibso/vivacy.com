import BlueButton from "@/app/components/buttons/BlueButton";
import HeaderBigTitle from "@/app/components/globals/headerBigTitle";
import ImageHeader from "@/app/components/globals/ImageHeader";
import PAnimate from "@/app/components/globals/pAnimate";
import FromTopTitles from "@/app/components/titles/FromTopTitles";
import MotionVideo from "@/app/components/videos/motionVideo";
import bg from "@/app/img/background-grained.jpg";
import section1Second from "@/app/img/ipn/ipn-like-technology-vivacy.jpg";
import bgHeader from "@/app/img/ipn/ipn-like-technology.jpg";
import logoIpn from "@/app/img/ipn/logo-ipn-like-technology.png";
import section3 from "@/app/img/ipn/vivacy-hyaluronic-acid-expert-ipn-like-technology.jpg";
import section1First from "@/app/img/ipn/vivacy-ipn-like-technology.jpg";
import section2 from "@/app/img/ipn/vivacy-technology-ipn-like.jpg";

import { useTranslations } from "next-intl";
import Image from "next/image";

type Params = {
  params: { locale: string };
};

const titleEN =
  "IPN-Like Technology | Hyaluronic acid-based medical device | Vivacy";
const descriptionEN =
  "IPN-Like Technology. Discover an exclusive, patented hyaluronic acid technology from Laboratoires Vivacy, French filling treatments in aesthetic medicine.";
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

export default function IpnLike() {
  const t = useTranslations("IpnLike");

  return (
    <main>
      <section className="relative min-h-[400px] lg:min-h-[550px] grid z-[1] overflow-hidden">
        <ImageHeader src={bgHeader} alt={t("alt")} />

        <div className="absolute top-0 left-0 size-full -z-[1] bg-blue opacity-15"></div>
        <HeaderBigTitle
          title={t.rich("title", {
            sup: (chunks) => <sup>{chunks}</sup>,
          })}
        />
      </section>

      <section className="relative">
        <div className="myContainer max-lg:flex max-lg:flex-col-reverse max-lg:gap-8 lg:grid lg:grid-cols-2 lg:gap-x-20 xl:gap-x-28">
          <div className="flex flex-col lg:justify-between gap-8 lg:gap-20 max-lg:w-full max-lg:max-w-[650px] max-lg:mx-auto">
            <Image
              src={section1First}
              alt={t("section1.alts.first")}
              quality={100}
              className="object-cover w-full h-[250px] lg:h-[300px] rounded-xl"
            />

            <Image
              src={section1Second}
              alt={t("section1.alts.second")}
              quality={100}
              className="object-cover w-full h-[250px] lg:h-[300px] rounded-xl"
            />
          </div>

          <div className="space-y-8 lg:space-y-14">
            <FromTopTitles
              titleH2={t("section1.h2")}
              titleH3={t("section1.h3")}
              h3Classes="text-black"
            />

            <PAnimate
              content={t.rich("section1.content", {
                p: (chunks) => <p className="lg:text-lg">{chunks}</p>,
                sup: (chunks) => <sup className="text-sm">{chunks}</sup>,
              })}
            />

            <div className="flex max-lg:gap-14 lg:grid lg:grid-cols-2 justify-center lg:justify-start items-center">
              <div className="max-lg:w-full">
                <BlueButton content={t("cta_1.title")} path={t("cta_1.path")} />
              </div>
              <Image
                src={logoIpn}
                alt={t("section1.alts.logo")}
                quality={75}
                style={{
                  objectFit: "contain",
                }}
                className=""
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

        <div className="myContainer space-y-8 lg:space-y-20">
          <FromTopTitles
            titleH2={t("section2.h2")}
            titleH3={t("section2.h3")}
            h3Classes="text-black"
          />

          <div className="lg:grid lg:grid-cols-2 lg:gap-x-20 xl:gap-x-28 max-lg:space-y-8">
            <PAnimate
              classes="lg:py-14"
              content={t.rich("section2.content", {
                p: (chunks) => <p className="lg:text-lg">{chunks}</p>,
                ul: (chunks) => <ul className="list-disc ml-4">{chunks}</ul>,
                li: (chunks) => <li className="lg:text-lg">{chunks}</li>,
                sup: (chunks) => <sup className="text-sm">{chunks}</sup>,
              })}
            />

            <div className="relative max-lg:h-[350px] ">
              <Image
                src={section2}
                alt={t("section2.alt")}
                quality={100}
                fill
                className="object-cover size-full rounded-xl"
              />
            </div>
          </div>

          <h2 className="h3-perso text-center">{t("section3.h3")}</h2>

          <div className="lg:grid lg:grid-cols-2 lg:gap-x-20 xl:gap-x-36 max-lg:space-y-8">
            <div className="space-y-8 lg:space-y-14 lg:py-8">
              <h3 className="h2-perso">{t("section3.h2")}</h3>

              <PAnimate
                content={t.rich("section3.content", {
                  p: (chunks) => <p className="lg:text-lg">{chunks}</p>,
                })}
              />

              <h3 className="h2-perso">{t("section4.h3")}</h3>

              <PAnimate
                content={t.rich("section4.content", {
                  p: (chunks) => <p className="lg:text-lg">{chunks}</p>,
                })}
              />

              <div className="max-lg:grid max-lg:justify-center">
                <BlueButton content={t("cta_2.title")} path={t("cta_2.path")} />
              </div>
            </div>
            <div className="relative max-lg:h-[350px]">
              <Image
                src={section3}
                alt={t("section3.alt")}
                quality={75}
                fill
                className="object-cover size-full rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* VIDEO */}
      <section className="max-lg:px-4 myContainer bg-[#fafbfc] space-y-8 lg:space-y-20">
        <MotionVideo src="/videos/vivacy-ipnlike-technology.mp4#t=1.5" />

        <div>
          <ol className="space-y-2 list-decimal">
            {t.rich("references", {
              li: (chunks) => <li className="text-sm">{chunks}</li>,
            })}
          </ol>
        </div>
      </section>
    </main>
  );
}
