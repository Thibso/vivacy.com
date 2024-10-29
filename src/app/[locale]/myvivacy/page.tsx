import BlueButton from "@/app/components/buttons/BlueButton";
import WhiteButton from "@/app/components/buttons/WhiteButton";
import HeaderBigTitle from "@/app/components/globals/headerBigTitle";
import HeaderSpan from "@/app/components/globals/headerSpan";
import FromTopTitles from "@/app/components/titles/FromTopTitles";
import bg from "@/app/img/background-grained.jpg";
import bgHeader from "@/app/img/vivacy-security-check-products-provenance.jpg";
import section1 from "@/app/img/vivacy-security-logo.png";
import section3 from "@/app/img/vivacy-security.jpg";
import section2 from "@/app/img/vivacy-security.png";

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
      title: "Stylage",
      description: "Description EN",
    };
  } else if (locale === "fr") {
    return {
      title: "Titre FR",
      description: "Description FR",
    };
  }
}

export default function MyVivacy() {
  const t = useTranslations("MyVivacy");

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
        <div className="myContainer max-lg:space-y-14 lg:grid lg:grid-cols-12 lg:items-center">
          <div className="col-span-5 space-y-8 lg:space-y-24">
            <FromTopTitles
              titleH2={t("section1.h2")}
              titleH3={t("section1.h3")}
              h3Classes="text-black"
            />
            <div className="space-y-4">
              {t.rich("section1.content", {
                p: (chunks) => <p className="text-lg">{chunks}</p>,
              })}
            </div>
          </div>

          <div className="col-span-3 col-start-8">
            <Image
              src={section1}
              alt=""
              quality={75}
              style={{
                objectFit: "contain",
              }}
              className="max-lg:mx-auto max-lg:w-[50%]"
            />
          </div>
        </div>
      </section>

      <section className="bg-blue">
        <div className="myContainer space-y-8 lg:space-y-20">
          <h2 className="h3-perso text-white text-center">
            {t("section2.h2")}
          </h2>
          <div className="max-lg:flex max-lg:flex-col-reverse max-lg:gap-y-8 lg:grid lg:grid-cols-12">
            <div className="col-span-5">
              <Image
                src={section2}
                alt=""
                quality={75}
                style={{
                  objectFit: "contain",
                  objectPosition: "50% 50%",
                  borderRadius: "12px",
                }}
                className="max-lg:mx-auto max-lg:w-[60%] lg:h-full"
              />
            </div>
            <div className="lg:my-4 lg:col-span-6 lg:col-start-7 p-4 lg:p-10 space-y-14 lg:space-y-20 bg-whiteGrey/20 backdrop-blur-md rounded-xl">
              <div className="space-y-8 lg:space-y-14 text-white">
                {t.rich("section2.content", {
                  p: (chunks) => <p className="text-lg">{chunks}</p>,
                })}
              </div>
              <div className="flex justify-center lg:justify-end">
                <WhiteButton content={t("cta.title")} path={t("cta.path")} />
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

        <div className="myContainer lg:grid lg:grid-cols-12 max-lg:space-y-8">
          <div className="lg:col-span-6 space-y-8 lg:space-y-14 lg:py-6">
            <h2 className="h2-perso">{t("section3.h2")}</h2>
            <div className="space-y-4">
              {t.rich("section3.content", {
                p: (chunks) => <p className="text-lg">{chunks}</p>,
              })}
            </div>
          </div>
          <div className="max-lg:h-[350px] lg:col-span-5 lg:col-start-8 relative">
            <Image
              src={section3}
              alt=""
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

        <div className="space-y-8 lg:space-y-28">
          <h2 className="h3-perso w-full lg:w-[50%] text-center lg:mx-auto">
            {t("section4.h2")}
          </h2>

          <div className="flex justify-center">
            <BlueButton content={t("cta.title")} path={t("cta.path")} />
          </div>
        </div>
      </section>
    </main>
  );
}
