import HeaderBigTitle from "@/app/components/globals/headerBigTitle";
import ImageHeader from "@/app/components/globals/ImageHeader";
import KeyNumbers from "@/app/components/globals/keyNumbers";
import PAnimate from "@/app/components/globals/pAnimate";
import HistorySteps from "@/app/components/ourHistory/historySteps";
import FromTopCenteredTitles from "@/app/components/titles/FromTopCenteredTitles";
import FromTopTitles from "@/app/components/titles/FromTopTitles";
import MotionVideo from "@/app/components/videos/motionVideo";
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

const titleEN =
  "Laboratoires Vivacy | French Hyaluronic Acid | Expert in Medical Aesthetics";
const descriptionEN =
  "Laboratoires Vivacy. Discover the history of the brand, experts in aesthetic and anti-ageing medicine. Pioneers of premium hyaluronic acid.";
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

export default function OurBrands() {
  const t = useTranslations("History");
  const h = useTranslations("HomePage");

  return (
    <main>
      <section className="relative min-h-[400px] lg:min-h-[550px] grid z-[1] overflow-hidden">
        <ImageHeader src={bgHeader} alt={t("alt")} />

        <div className="absolute top-0 left-0 size-full -z-[1] bg-blue opacity-15"></div>
        <HeaderBigTitle title={t("title")} />
      </section>

      <section>
        <div className="myContainer space-y-8 lg:space-y-16">
          <FromTopCenteredTitles
            titleH2={t("section1.h2")}
            titleH3={t("section1.h3")}
            h3Classes="text-black"
          />

          <PAnimate
            classes="lg:max-w-[80%] lg:text-center mx-auto"
            content={t.rich("section1.content", {
              p: (chunks) => <p className="lg:text-lg">{chunks}</p>,
            })}
          />
        </div>
      </section>

      <section>
        <div className="myContainer pt-0 space-y-8 lg:space-y-16">
          <FromTopCenteredTitles
            titleH2={t("section4.h2")}
            titleH3={t("section4.h3")}
            h3Classes="text-black"
          />

          <MotionVideo src="/videos/vivacy-presentation.mp4#t=1.5" />
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

          <PAnimate
            classes="mt-8 lg:mt-16"
            content={t.rich("section2.content", {
              p: (chunks) => <p className="lg:text-lg">{chunks}</p>,
              ul: (chunks) => (
                <ul className="lg:text-lg list-disc ml-10">{chunks}</ul>
              ),
              li: (chunks) => <li className="lg:text-lg">{chunks}</li>,
            })}
          />
        </div>
      </section>

      <HistorySteps h2={t("section5.h2")} h3={t("section5.h3")} />

      <section id="pass" className="relative lg:mt-20 z-[1]">
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

            <PAnimate
              classes=""
              content={t.rich("section3.content", {
                p: (chunks) => <p className="lg:text-lg">{chunks}</p>,
              })}
            />
          </div>
        </div>
      </section>

      <KeyNumbers />
    </main>
  );
}
