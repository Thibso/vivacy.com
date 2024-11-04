import BlueButton from "@/app/components/buttons/BlueButton";
import HeaderBigTitle from "@/app/components/globals/headerBigTitle";
import HeaderSpan from "@/app/components/globals/headerSpan";
import FromTopCenteredTitles from "@/app/components/titles/FromTopCenteredTitles";
import FromTopTitles from "@/app/components/titles/FromTopTitles";
import bg from "@/app/img/background-grained.jpg";
import bgHeader from "@/app/img/ipn/ipn-like-technology.jpg";
import section1First from "@/app/img/ipn/vivacy-ipn-like-technology.jpg";

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
      title: "Vivasome",
      description: "Description EN",
    };
  } else if (locale === "fr") {
    return {
      title: "Titre FR",
      description: "Description FR",
    };
  }
}

export default function Vivasome() {
  const t = useTranslations("Vivasome");

  return (
    <main>
      <section className="relative min-h-[400px] lg:min-h-[550px] grid z-[1]">
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
        <div className="myContainer space-y-8 lg:space-y-28">
          <FromTopTitles
            titleH2={t("section1.h2")}
            titleH3={t("section1.h3")}
            h3Classes="text-black"
          />

          <div className="grid grid-cols-12">
            <div className="col-span-4 space-y-8 lg:space-y-14 py-36">
              <div className="space-y-4">
                {t.rich("section1.content", {
                  p: (chunks) => <p className="text-lg">{chunks}</p>,
                })}
              </div>

              <div className="flex max-lg:gap-14 lg:grid lg:grid-cols-2 justify-center lg:justify-start items-center">
                <div>
                  <BlueButton content={t("cta.title")} path={t("cta.path")} />
                </div>
              </div>
            </div>

            <div className="relative col-span-5 col-start-8">
              <Image
                src={section1First}
                alt=""
                quality={75}
                className="object-cover size-full rounded-xl"
              />
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

        <div className="myContainer space-y-28">
          <h2 className="h3-perso">{t("section2.h2")}</h2>

          <div className="grid grid-cols-12 gap-x-20">
            <div className="col-span-7 relative">
              <Image
                src={section1First}
                alt=""
                quality={75}
                className="object-cover size-full rounded-xl"
              />
            </div>

            <div className="col-span-5 space-y-8 pt-20">
              <h3 className="h2-perso">{t("section2.h3")}</h3>

              <div className="space-y-4">
                {t.rich("section2.content", {
                  p: (chunks) => <p className="text-lg">{chunks}</p>,
                })}
              </div>

              <h3 className="h2-perso">{t("section2.h3Bis")}</h3>

              <div className="space-y-4">
                {t.rich("section2.contentBis", {
                  p: (chunks) => <p className="text-lg">{chunks}</p>,
                })}
              </div>
            </div>
          </div>

          <FromTopCenteredTitles
            titleH2={t("section3.h2")}
            titleH3={t("section3.h3")}
            h3Classes="text-black"
          />

          <div className="grid grid-cols-2 gap-x-28">
            <div>
              <Image src={section1First} alt="" quality={75} className="" />
            </div>

            <ul className="space-y-4 list-disc ml-4 py-8">
              {t.rich("section3.content", {
                li: (chunks) => <li className="text-lg">{chunks}</li>,
              })}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-x-28">
            <ul className="space-y-4 list-disc ml-4 pt-28 pb-14">
              {t.rich("section4.content", {
                li: (chunks) => <li className="text-lg">{chunks}</li>,
              })}
            </ul>

            <div className="relative">
              <Image
                src={section1First}
                alt=""
                quality={75}
                fill
                className=" object-cover size-full rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="myContainer grid grid-cols-2 gap-x-28">
          <div>
            <Image
              src={section1First}
              alt=""
              quality={75}
              className="object-cover size-full rounded-xl"
            />
          </div>
          <div className="space-y-14 my-auto">
            <h2 className="h2-perso">{t("section5.h2")}</h2>
            <div className="space-y-4">
              {t.rich("section5.content", {
                p: (chunks) => <p className="text-lg">{chunks}</p>,
              })}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
