import BlueButton from "@/app/components/buttons/BlueButton";
import HeaderBigTitle from "@/app/components/globals/headerBigTitle";
import FromTopCenteredTitles from "@/app/components/titles/FromTopCenteredTitles";
import FromTopTitles from "@/app/components/titles/FromTopTitles";
import vivacyLogo from "@/app/img/vivacy-laboratories-hyaluronic-acid-france.png";
import bg from "@/app/img/vivasome/bg-vivasome.jpg";
import section3 from "@/app/img/vivasome/plateau-vivacy-vivasome.png";
import section2 from "@/app/img/vivasome/vivasome-vivacy-cosmetics.jpg";
import section4 from "@/app/img/vivasome/vivasome-vivacy-hyaluronic-acid-cosmetic.jpg";
import section1 from "@/app/img/vivasome/vivasome-vivacy-laboratories.jpg";

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
        <video
          className="absolute max-md:h-[150%] max-xl:h-[140%] xl:size-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover -z-[2]"
          autoPlay
          muted
          playsInline
          loop
        >
          <source src="/videos/vivasome-vivacy.mp4" type="video/mp4" />
        </video>
        <div className="absolute top-0 left-0 size-full -z-[1] bg-blue opacity-25"></div>
        <HeaderBigTitle title={t("title")} />
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
          className="max-lg:hidden w-full lg:w-[60%] top-[15%]"
        />

        <div className="myContainer space-y-8 lg:space-y-28">
          <div className="max-lg:space-y-8 lg:grid lg:grid-cols-2 lg:space-x-14">
            <div className="lg:col-span-1 space-y-8 lg:space-y-14 lg:mb-36">
              <FromTopTitles
                titleH2={t("section1.h2")}
                titleH3={t("section1.h3")}
                h3Classes="text-black"
              />

              <div className="space-y-4">
                {t.rich("section1.content", {
                  p: (chunks) => <p className="lg:text-lg">{chunks}</p>,
                })}
              </div>

              <div className="flex max-lg:gap-14 lg:grid lg:grid-cols-2 justify-center lg:justify-start items-center">
                <div>
                  <BlueButton content={t("cta.title")} path={t("cta.path")} />
                </div>
              </div>
            </div>

            <div className="col-span-1 relative max-lg:h-[350px]">
              <Image
                src={section1}
                alt={t("section1.alt")}
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

        <div className="myContainer max-lg:py-0 space-y-8 lg:space-y-20">
          <h2 className="h3-perso text-center">{t("section2.h2")}</h2>

          <div className="max-lg:flex max-lg:flex-col-reverse max-lg:gap-y-8 lg:grid lg:grid-cols-12 lg:gap-x-20">
            <div className="col-span-7 relative max-lg:h-[350px]">
              <Image
                src={section2}
                alt={t("section2.alt")}
                fill
                quality={100}
                className="object-cover size-full rounded-xl"
              />
            </div>

            <div className="lg:col-span-5 space-y-8 lg:py-8">
              <h3 className="h2-perso">{t("section2.h3")}</h3>

              <div className="space-y-4">
                {t.rich("section2.content", {
                  p: (chunks) => <p className="lg:text-lg">{chunks}</p>,
                })}
              </div>

              <h3 className="h2-perso">{t("section2.h3Bis")}</h3>

              <div className="space-y-4">
                {t.rich("section2.contentBis", {
                  p: (chunks) => <p className="lg:text-lg">{chunks}</p>,
                })}
              </div>
            </div>
          </div>

          <FromTopCenteredTitles
            titleH2={null}
            titleH3={t("section3.h3")}
            h3Classes="text-black"
          />

          <div className="max-lg:flex max-lg:flex-col-reverse max-lg:gap-y-8 lg:grid lg:grid-cols-2 lg:gap-x-20 lg:items-center">
            <div>
              <Image
                src={section3}
                alt={t("section3.alt")}
                quality={100}
                className="h-full w-auto object-contain mx-auto"
              />
            </div>

            <div className="lg:py-8 space-y-8">
              <h3 className="h2-perso">{t("section3.h2")}</h3>
              <ul className="space-y-4 list-disc ml-4">
                {t.rich("section3.content", {
                  li: (chunks) => <li className="lg:text-lg">{chunks}</li>,
                  b: (chunks) => (
                    <strong className="lg:text-lg text-bold">{chunks}</strong>
                  ),
                })}
              </ul>
            </div>
          </div>

          <div className="max-lg:space-y-8 lg:grid lg:grid-cols-2 lg:gap-x-28">
            <div className="lg:pt-28 space-y-8">
              <h3 className="h2-perso">{t("section4.h3")}</h3>
              <ul className="space-y-4 list-disc ml-4  lg:pb-14">
                {t.rich("section4.content", {
                  li: (chunks) => <li className="lg:text-lg">{chunks}</li>,
                  b: (chunks) => (
                    <strong className="lg:text-lg text-bold">{chunks}</strong>
                  ),
                })}
              </ul>
            </div>

            <div className="relative max-lg:h-[350px]">
              <Image
                src={section4}
                alt={t("section4.alt")}
                quality={100}
                fill
                className=" object-cover size-full rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* <section>
        <div className="myContainer max-lg:flex max-lg:flex-col-reverse max-lg:gap-y-8 lg:grid lg:grid-cols-2 lg:gap-x-28">
          <div className="relative max-lg:h-[350px]">
            <Image
              src={section5}
              alt={t("section5.alt")}
              quality={100}
              fill
              className="object-cover size-full rounded-xl"
            />
          </div>
          <div className="space-y-8 lg:space-y-14 lg:py-28">
            <h2 className="h2-perso">{t("section5.h2")}</h2>
            <div className="space-y-4">
              {t.rich("section5.content", {
                p: (chunks) => <p className="lg:text-lg">{chunks}</p>,
              })}
            </div>
          </div>
        </div>
      </section> */}
    </main>
  );
}
