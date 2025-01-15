import BlueButton from "@/app/components/buttons/BlueButton";
import HeaderBigTitle from "@/app/components/globals/headerBigTitle";
import HeaderSpan from "@/app/components/globals/headerSpan";
import FromTopTitles from "@/app/components/titles/FromTopTitles";
import bg from "@/app/img/background-grained.jpg";
import bgHeader from "@/app/img/ipn/ipn-like-technology.jpg";
import section1Second from "@/app/img/ipn/ipn-like-technologye-vivacy.jpg";
import logoIpn from "@/app/img/ipn/logo-ipn-like-technology.png";
import section3 from "@/app/img/ipn/vivacy-hyaluronic-acid-expert-ipn-like-technology.jpg";
import section1First from "@/app/img/ipn/vivacy-ipn-like-technology.jpg";
import section2 from "@/app/img/ipn/vivacy-technology-ipn-like.jpg";

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
      title: "IpnLike",
      description: "Description EN",
    };
  } else if (locale === "fr") {
    return {
      title: "Titre FR",
      description: "Description FR",
    };
  }
}

export default function IpnLike() {
  const t = useTranslations("IpnLike");

  return (
    <main>
      <section className="relative min-h-[400px] lg:min-h-[550px] grid z-[1]">
        <Image
          src={bgHeader}
          alt={t("alt")}
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
        <div className="myContainer max-lg:flex max-lg:flex-col-reverse max-lg:gap-8 lg:grid lg:grid-cols-2 lg:gap-x-20 xl:gap-x-28">
          <div className="flex flex-col lg:justify-between gap-8 lg:gap-20 max-lg:w-full max-lg:max-w-[650px] max-lg:mx-auto">
            <Image
              src={section1First}
              alt={t("section1.alts.first")}
              quality={75}
              className="object-cover w-full h-[250px] lg:h-[300px] rounded-xl"
            />

            <Image
              src={section1Second}
              alt={t("section1.alts.second")}
              quality={75}
              className="object-cover w-full h-[250px] lg:h-[300px] rounded-xl"
            />
          </div>

          <div className="space-y-8 lg:space-y-14">
            <FromTopTitles
              titleH2={t("section1.h2")}
              titleH3={t("section1.h3")}
              h3Classes="text-black"
            />

            <div className="space-y-4">
              {t.rich("section1.content", {
                p: (chunks) => <p className="lg:text-lg">{chunks}</p>,
                sup: (chunks) => <sup className="text-sm">{chunks}</sup>,
              })}
            </div>

            <div className="flex max-lg:gap-14 lg:grid lg:grid-cols-2 justify-center lg:justify-start items-center">
              <div className="max-lg:w-full">
                <BlueButton content={t("cta.title")} path={t("cta.path")} />
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
            <div className="space-y-4 lg:py-14">
              {t.rich("section2.content", {
                p: (chunks) => <p className="lg:text-lg">{chunks}</p>,
                ul: (chunks) => <ul className="list-disc ml-4">{chunks}</ul>,
                li: (chunks) => <li className="lg:text-lg">{chunks}</li>,
                sup: (chunks) => <sup className="text-sm">{chunks}</sup>,
              })}
            </div>

            <div className="relative max-lg:h-[350px] ">
              <Image
                src={section2}
                alt={t("section2.alt")}
                quality={75}
                fill
                className="object-cover size-full rounded-xl"
              />
            </div>
          </div>

          <h2 className="h3-perso text-center">{t("section3.h3")}</h2>

          <div className="lg:grid lg:grid-cols-2 lg:gap-x-20 xl:gap-x-36 max-lg:space-y-8">
            <div className="space-y-8 lg:space-y-14 lg:py-8">
              <h3 className="h2-perso">{t("section3.h2")}</h3>

              <div className="space-y-4">
                {t.rich("section3.content", {
                  p: (chunks) => <p className="lg:text-lg">{chunks}</p>,
                })}
              </div>

              <h3 className="h2-perso">{t("section4.h3")}</h3>

              <div className="space-y-4">
                {t.rich("section4.content", {
                  p: (chunks) => <p className="lg:text-lg">{chunks}</p>,
                })}
              </div>

              <div className="max-lg:grid max-lg:justify-center">
                <BlueButton content={t("cta.title")} path={t("cta.path")} />
              </div>
            </div>
            <div className="relative max-lg:h-[350px]">
              <Image
                src={section3}
                alt={t("section3.alt")}
                quality={75}
                fill
                className=" object-cover size-full rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* VIDEO */}
      <section className="max-lg:px-4">
        <video className="lg:max-w-[70%] mx-auto" playsInline loop controls>
          <source
            src="/videos/vivacy-ipnlike-technology.mp4#t=1.5"
            type="video/mp4"
          />
        </video>

        <div className="myContainer">
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
