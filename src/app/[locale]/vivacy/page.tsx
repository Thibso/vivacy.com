import WhiteButton from "@/app/components/buttons/WhiteButton";
import HeaderBigTitle from "@/app/components/globals/headerBigTitle";
import HeaderSpan from "@/app/components/globals/headerSpan";
import IncrementNumber from "@/app/components/globals/testNumbers";
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

      <section>
        <div className="myContainer space-y-8 lg:space-y-16">
          <FromTopCenteredTitles
            titleH2={t("section1.h2")}
            titleH3={t("section1.h3")}
            h3Classes="text-black"
          />

          <div className="space-y-4 lg:max-w-[80%] lg:text-center mx-auto">
            {t.rich("section1.content", {
              p: (chunks) => <p className="lg:text-lg">{chunks}</p>,
            })}
          </div>
        </div>
      </section>

      <section>
        <div className="myContainer pt-0 space-y-8 lg:space-y-16">
          <FromTopCenteredTitles
            titleH2={t("section4.h2")}
            titleH3={t("section4.h3")}
            h3Classes="text-black"
          />

          <video className="lg:max-w-[80%] mx-auto" playsInline loop controls>
            <source
              src="/videos/vivacy-presentation.mp4#t=1.5"
              type="video/mp4"
            />
          </video>
        </div>
      </section>

      <section className="lg:grid lg:grid-cols-2 lg:gap-36">
        <div className="grid grid-cols-6">
          <div className="col-span-3 relative max-lg:h-[350px] z-[1]">
            <Image
              src={seringe1}
              alt={t("section2.alt1")}
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
              alt={t("section2.alt2")}
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
              alt={t("section2.alt3")}
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
            alt="Vivacy logo"
            quality={50}
            className="absolute top-[30%] lg:-top-[10%] left-0 lg:left-[5%] w-full lg:size-[115%] object-cover object-left-top opacity-[0.02] -z-[1]"
          />

          <FromTopTitles
            titleH2={t("section2.h2")}
            titleH3={t("section2.h3")}
            h3Classes="text-black"
          />

          <div className="space-y-4 mt-8 lg:mt-16">
            {t.rich("section2.content", {
              p: (chunks) => <p className="lg:text-lg">{chunks}</p>,
              ul: (chunks) => (
                <ul className="lg:text-lg list-disc ml-10">{chunks}</ul>
              ),
              li: (chunks) => <li className="lg:text-lg">{chunks}</li>,
            })}
          </div>
        </div>
      </section>

      <HistorySteps h2={t("section5.h2")} h3={t("section5.h3")} />

      <section className="relative lg:mt-20 z-[1]">
        <Image
          src={office}
          alt={t("section3.alt")}
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
        <div className="myContainer max-lg:pt-0 lg:grid lg:grid-cols-2">
          <div className="col-span-1 space-y-8 lg:space-y-20">
            <FromTopTitles
              titleH2={t("section3.h2")}
              titleH3={t("section3.h3")}
              h3Classes="text-black"
            />
            <div className="space-y-4">
              {t.rich("section3.content", {
                p: (chunks) => <p className="lg:text-lg">{chunks}</p>,
              })}
            </div>
          </div>
        </div>
      </section>

      {/* KEY NUMBERS */}
      <section className="bg-blue lg:max-w-[2550px] lg:m-auto border-white/50 border-b-[1px]">
        <div className="myContainer relative space-y-14 lg:space-y-22 text-white lg:flex lg:flex-col lg:items-center ">
          <div className="titles-container w-full">
            <FromTopTitles
              titleH2={h("section3.h2")}
              titleH3={h("section3.h3")}
              h3Classes="text-white"
              h2Classes="text-[#e1e1e1]"
            />
          </div>

          <div className="max-lg:space-y-14 lg:grid lg:grid-cols-4 lg:gap-20">
            <div className="text-center">
              <p>
                <IncrementNumber number={85} speed={27.5} />
              </p>
              <p className="mt-4 lg:mt-10 text-lg lg:text-xl">
                {h("section3.keyNumbers.1")}
              </p>
            </div>

            <div className="text-center">
              <p>
                <IncrementNumber number={15} />
              </p>
              <p className="mt-4 lg:mt-10 text-lg lg:text-xl">
                {h("section3.keyNumbers.2")}
              </p>
            </div>

            <div className="text-center">
              <p>
                <IncrementNumber number={1} />
                <span className="font-bold text-3xl -top-[1em] relative">
                  st
                </span>
              </p>
              <p className="mt-4 lg:mt-10 text-lg lg:text-xl">
                {h("section3.keyNumbers.3")}
              </p>
            </div>

            <div className="text-center">
              <p>
                <IncrementNumber number={1} />
                <span className="font-bold text-3xl -top-[1em] relative">
                  st
                </span>
              </p>
              <p className="mt-4 lg:mt-10 text-lg lg:text-xl">
                {h("section3.keyNumbers.4")}
              </p>
            </div>
          </div>

          <div className="m-auto lg:ml-0 lg:absolute lg:left-8 lg:bottom-8">
            <p className="text-sm max-lg:text-center">
              {h("section3.annotation")}
            </p>
          </div>

          <div className="max-lg:flex max-lg:justify-center">
            <WhiteButton
              content={h("section3.button")}
              path={h("section3.buttonPath")}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
