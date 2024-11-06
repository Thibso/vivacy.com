import WhiteButton from "@/app/components/buttons/WhiteButton";
import HeaderBigTitle from "@/app/components/globals/headerBigTitle";
import HeaderSpan from "@/app/components/globals/headerSpan";
import HistorySteps from "@/app/components/ourHistory/historySteps";
import FromTopCenteredTitles from "@/app/components/titles/FromTopCenteredTitles";
import FromTopTitles from "@/app/components/titles/FromTopTitles";
import seringe3 from "@/app/img/best-hyalronic-acid.jpg";
import seringe2 from "@/app/img/hyaluronic-acid-specialists-vivacy.jpg";
import bgHeader from "@/app/img/vivacy-history-expert-hyaluronic-acid.jpg";
import bgVivacy from "@/app/img/vivacy-laboratories-hyaluronic-acid-france.png";
import office from "@/app/img/vivacy-laboratories-paris-acid-hyaluronic.jpg";
import seringe1 from "@/app/img/vivacy-seringe-specialist.jpg";
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
      title: "Our history",
      description: "Description EN",
    };
  } else if (locale === "fr") {
    return {
      title: "Titre FR",
      description: "Description FR",
    };
  }
}

export default function OurBrands() {
  const t = useTranslations("History");
  const h = useTranslations("HomePage");

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

      <section>
        <div className="myContainer space-y-8 lg:space-y-28">
          <FromTopCenteredTitles
            titleH2={t("section1.h2")}
            titleH3={t("section1.h3")}
            h3Classes="text-black"
          />

          <div className="space-y-4 lg:max-w-[70%] lg:text-center mx-auto">
            {t.rich("section1.content", {
              p: (chunks) => <p className="text-lg">{chunks}</p>,
            })}
          </div>
        </div>
      </section>

      <section className="lg:grid lg:grid-cols-2 lg:gap-36">
        <div className="grid grid-cols-6">
          <div className="col-span-3 relative max-lg:h-[350px] z-[1]">
            <Image
              src={seringe1}
              alt=""
              quality={100}
              fill
              style={{
                objectFit: "cover",
                objectPosition: "0% 0%",
                zIndex: "-1",
              }}
            />
          </div>
          <div className="col-span-2 relative z-[1]">
            <Image
              src={seringe2}
              alt=""
              quality={100}
              fill
              style={{
                objectFit: "cover",
                objectPosition: "0% 0%",
                zIndex: "-1",
              }}
            />
          </div>
          <div className="col-span-1 relative z-[1]">
            <Image
              src={seringe3}
              alt=""
              quality={100}
              fill
              style={{
                objectFit: "cover",
                objectPosition: "0% 0%",
                zIndex: "-1",
              }}
            />
          </div>
        </div>

        <div className="relative overflow-hidden px-5 py-16 lg:py-20 lg:pr-16 z-[1]">
          <Image
            src={bgVivacy}
            alt=""
            quality={50}
            className="absolute top-[30%] lg:-top-[10%] left-0 lg:left-[5%] w-full lg:size-[115%] object-cover object-left-top opacity-[0.05] -z-[1]"
          />

          <FromTopTitles
            titleH2={t("section2.h2")}
            titleH3={t("section2.h3")}
            h3Classes="text-black"
          />

          <div className="space-y-4 mt-8 lg:mt-12">
            {t.rich("section2.content", {
              p: (chunks) => <p className="text-lg">{chunks}</p>,
              ul: (chunks) => (
                <ul className="text-lg list-disc ml-10">{chunks}</ul>
              ),
              li: (chunks) => <li className="text-lg">{chunks}</li>,
            })}
          </div>
        </div>
      </section>

      <section className="relative lg:mt-28 z-[1]">
        <Image
          src={office}
          alt=""
          quality={100}
          style={{
            objectFit: "cover",
            objectPosition: "50% 50%",
            zIndex: "-1",
            position: "absolute",
            width: "45%",
            height: "100%",
            right: 0,
          }}
          className="max-lg:hidden"
        />
        <div className="myContainer lg:grid lg:grid-cols-2">
          <div className="col-span-1 space-y-8 lg:space-y-28">
            <h2 className="h2-perso">{t("section3.h2")}</h2>
            <div className="space-y-4">
              {t.rich("section3.content", {
                p: (chunks) => <p className="text-lg">{chunks}</p>,
              })}
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="myContainer">
          <FromTopCenteredTitles
            titleH2={t("section4.h2")}
            titleH3={t("section4.h3")}
            h3Classes="text-black"
          />

          <p className="text-center">VIDEO</p>
        </div>
      </section>

      <section className="bg-blue max-w-[2550px] m-auto">
        <div className="myContainer space-y-28 text-white flex flex-col items-center">
          <div className="titles-container w-full">
            <h2 className="h2-perso text-white">{h("section3.h2")}</h2>
            <h3 className="h3-perso text-white">{h("section3.h3")}</h3>
          </div>

          <div className="grid grid-cols-4 gap-20">
            <div className="text-center">
              <p>
                <span className="font-bold text-3xl">x</span>
                <span className="font-bold text-7xl ml-2">5</span>
              </p>
              <p className="mt-14">{h("section3.keyNumbers.1")}</p>
            </div>

            <div className="text-center">
              <p>
                <span className="font-bold text-3xl">+</span>
                <span className="font-bold text-7xl ml-2">20%</span>
              </p>
              <p className="mt-14">{h("section3.keyNumbers.2")}</p>
            </div>

            <div className="text-center">
              <p>
                <span className="font-bold text-7xl ml-2">80</span>
              </p>
              <p className="mt-14">{h("section3.keyNumbers.3")}</p>
            </div>

            <div className="text-center">
              <p>
                <span className="font-bold text-7xl ml-2">5</span>
              </p>
              <p className="mt-14">{h("section3.keyNumbers.4")}</p>
            </div>
          </div>

          <WhiteButton
            content={h("section3.button")}
            path={h("section3.buttonPath")}
          />
        </div>
      </section>

      <HistorySteps h2={t("section5.h2")} h3={t("section5.h3")} />
    </main>
  );
}
