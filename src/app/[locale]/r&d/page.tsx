import HeaderBigTitle from "@/app/components/globals/headerBigTitle";
import HeaderSpan from "@/app/components/globals/headerSpan";
import FromTopCenteredTitles from "@/app/components/titles/FromTopCenteredTitles";
import FromTopTitles from "@/app/components/titles/FromTopTitles";
import bg from "@/app/img/background-grained.jpg";
import bgHeader from "@/app/img/our-brands-hyaluronic-acid.jpg";
import research1 from "@/app/img/vivacy-research-1.jpg";
import research2 from "@/app/img/vivacy-research-2.jpg";
import research3 from "@/app/img/vivacy-research-3.jpg";
import research4 from "@/app/img/vivacy-research-4.jpg";
import section2Bg from "@/app/img/vivacy-research-development-aesthetic.jpg";
import section3First from "@/app/img/vivacy-stylage-seringe-research.jpg";

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
      title: "Our brands",
      description: "Description EN",
    };
  } else if (locale === "fr") {
    return {
      title: "Titre FR",
      description: "Description FR",
    };
  }
}

export default function OurCommitments() {
  const t = useTranslations("R&D");

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

      <section>
        <div className="myContainer space-y-8 lg:space-y-28">
          <FromTopCenteredTitles
            titleH2={t("section1.h2")}
            titleH3={t("section1.h3")}
            h3Classes="text-black"
          />

          <div className="grid grid-cols-12 gap-x-28">
            <div className="col-span-7 grid grid-cols-10 gap-x-10">
              <div className="col-span-4 relative">
                <Image
                  src={research1}
                  alt=""
                  quality={75}
                  fill
                  style={{
                    objectFit: "cover",
                    objectPosition: "50% 50%",
                  }}
                />
              </div>
              <div className="col-span-3 relative">
                <Image
                  src={research2}
                  alt=""
                  quality={75}
                  fill
                  style={{
                    objectFit: "cover",
                    objectPosition: "50% 50%",
                  }}
                />
              </div>
              <div className="col-span-2 relative">
                <Image
                  src={research3}
                  alt=""
                  quality={75}
                  fill
                  style={{
                    objectFit: "cover",
                    objectPosition: "50% 50%",
                  }}
                />
              </div>
              <div className="col-span-1 relative">
                <Image
                  src={research4}
                  alt=""
                  quality={75}
                  fill
                  style={{
                    objectFit: "cover",
                    objectPosition: "50% 50%",
                  }}
                />
              </div>
            </div>
            <div className="col-span-5 py-32">
              <p>{t("section1.content")}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative">
        <Image
          src={section2Bg}
          alt=""
          quality={100}
          fill
          style={{
            objectFit: "cover",
            objectPosition: "50% 50%",
            zIndex: "-1",
          }}
        />
        <div className="myContainer grid grid-cols-10 ">
          <div className="p-10 col-span-6 backdrop-blur rounded-xl bg-white/15 space-y-8 lg:space-y-28">
            <FromTopTitles
              titleH2={t("section2.h2")}
              titleH3={t("section2.h3")}
              h3Classes="text-white"
            />
            <p className="text-blue">{t("section2.content")}</p>
          </div>
        </div>
      </section>

      <section className="relative bgTextureReapeated">
        <Image
          src={bg}
          alt=""
          quality={100}
          fill
          style={{
            objectFit: "cover",
            objectPosition: "0% 50%",
            zIndex: "-1",
          }}
        />
        <div className="myContainer grid grid-cols-12 gap-x-24">
          <div className="col-span-7 py-6 space-y-28">
            <div className="space-y-20">
              <FromTopTitles
                titleH2={t("section3.first.h2")}
                titleH3={t("section3.first.h3")}
                h3Classes="text-black"
              />
              <div className="space-y-4 w-[80%]">
                {t.rich("section3.first.content", {
                  p: (chunks) => <p className="text-lg">{chunks}</p>,
                })}
              </div>
            </div>

            <div className="space-y-20">
              <FromTopTitles
                titleH2={t("section3.first.h2")}
                titleH3={t("section3.first.h3")}
                h3Classes="text-black"
              />
              <div className="space-y-4 w-[80%]">
                {t.rich("section3.first.content", {
                  p: (chunks) => <p className="text-lg">{chunks}</p>,
                })}
              </div>
            </div>
          </div>
          <div className="col-span-5 relative">
            <Image
              src={section3First}
              alt=""
              quality={100}
              fill
              style={{
                objectFit: "cover",
                objectPosition: "50% 50%",
                zIndex: "-1",
              }}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
