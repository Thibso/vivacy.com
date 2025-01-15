import SeringeBiSoft from "@/app/components/bisoft/seringeBiSoft";
import BlueButton from "@/app/components/buttons/BlueButton";
import HeaderSpan from "@/app/components/globals/headerSpan";
import FromTopTitles from "@/app/components/titles/FromTopTitles";
import bg from "@/app/img/background-grained.jpg";
import section1Bg from "@/app/img/bisoft/background-bisoft.png";
import logoBiSoft from "@/app/img/bisoft/BI-SOFT.png";
import ratings3 from "@/app/img/bisoft/hyaluronic-acid-bisoft-seringe.jpg";
import ratings1 from "@/app/img/bisoft/specialist-seringe-bisoft-vivacy.jpg";
import ratings4 from "@/app/img/bisoft/vivacy-bisoft-sering-hyaluronic-acid.jpg";
import section1 from "@/app/img/bisoft/vivacy-bisoft-technology.jpg";
import ratings2 from "@/app/img/bisoft/vivacy-bisoft.jpg";

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
      title: "BiSoft",
      description: "Description EN",
    };
  } else if (locale === "fr") {
    return {
      title: "Titre FR",
      description: "Description FR",
    };
  }
}

export default function BiSoft() {
  const t = useTranslations("BiSoft");

  const seringeTextFirst = {
    title: t("seringe.first.title"),
    content: [
      t("seringe.first.content.first"),
      t("seringe.first.content.second"),
    ],
  };
  const seringeTextSecond = {
    title: t("seringe.second.title"),
    content: [
      t("seringe.second.content.first"),
      t("seringe.second.content.second"),
      t("seringe.second.content.third"),
      t("seringe.second.content.fourth"),
    ],
  };
  const seringeTextThird = {
    title: t("seringe.third.title"),
    content: [
      t("seringe.third.content.first"),
      t.rich("seringe.third.content.second", {
        sup: (chunks) => <sup className="text-sm">{chunks}</sup>,
      }),
      t("seringe.third.content.third"),
    ],
  };
  const seringeTextFourth = {
    title: t("seringe.fourth.title"),
    content: [
      t("seringe.fourth.content.first"),
      t("seringe.fourth.content.second"),
    ],
  };
  const seringeTextFifth = {
    title: t("seringe.fifth.title"),
    content: [
      t("seringe.fifth.content.first"),
      t("seringe.fifth.content.second"),
    ],
  };

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
          <source src="/videos/bisoft-vivacy.mp4" type="video/mp4" />
        </video>
        <div className="absolute top-0 left-0 size-full -z-[1] bg-blue opacity-25"></div>
        {/* <HeaderBigTitle title={t("title")} /> */}
        <div className="m-auto px-5 lg:px-28 lg:py-32">
          <h1 className="text-[8vw] font-mona uppercase font-bold text-whiteGrey text-center leading-none">
            {t("title")}
          </h1>
        </div>

        <HeaderSpan content={t("span")} />
      </section>

      <section className="relative z-[1] bg-white">
        <Image
          src={section1Bg}
          alt="texture"
          quality={75}
          className="max-lg:hidden h-full absolute left-auto right-0 top-0 -z-[1]"
        />

        <div className="myContainer lg:grid lg:grid-cols-12">
          <div className="lg:col-span-5 space-y-8 lg:space-y-14">
            <FromTopTitles
              titleH2={t("section1.h2")}
              titleH3={t.rich("section1.h3", {
                sup: (chunks) => <sup>{chunks}</sup>,
              })}
              h3Classes="text-black"
            />

            <div className="space-y-4">
              {t.rich("section1.content", {
                p: (chunks) => <p className="lg:text-lg">{chunks}</p>,
                sup: (chunks) => <sup className="text-sm">{chunks}</sup>,
              })}
            </div>

            <div className="flex max-lg:gap-14 lg:grid lg:grid-cols-2 justify-center lg:justify-start items-center">
              <div>
                <BlueButton content={t("cta.title")} path={t("cta.path")} />
              </div>
              <Image
                src={logoBiSoft}
                alt={t("section1.altLogo")}
                quality={75}
                style={{
                  objectFit: "contain",
                }}
                className=""
              />
            </div>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 max-lg:h-[350px] relative max-lg:mt-14">
            <Image
              src={section1}
              alt={t("section1.alt")}
              quality={100}
              fill
              style={{
                objectFit: "cover",
                objectPosition: "50% 50%",
                borderRadius: "12px",
              }}
            />
          </div>
        </div>
      </section>

      <SeringeBiSoft
        h2={t("seringe.h2")}
        h3={t("seringe.h3")}
        first={seringeTextFirst}
        second={seringeTextSecond}
        third={seringeTextThird}
        fourth={seringeTextFourth}
        fifth={seringeTextFifth}
      />

      <section className="relative">
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
        <div className="myContainer space-y-14 lg:space-y-20">
          <h2 className="h2-perso">{t("section2.h2")}</h2>

          <div className="lg:grid lg:grid-cols-4 lg:gap-x-20 max-lg:space-y-14 max-lg:w-[80%] max-lg:mx-auto">
            <div className="col-span-1 space-y-4">
              <div className="relative h-[275px]">
                <Image
                  src={ratings1}
                  alt={t("section2.ratings.first.alt")}
                  quality={75}
                  fill
                  style={{
                    objectFit: "cover",
                    objectPosition: "50% 50%",
                    borderRadius: "12px",
                  }}
                />

                <div className="bg-blue rounded-full text-white py-3 px-6 absolute z-[1] bottom-0 -right-2 lg:-right-8">
                  <span>{t("section2.ratings.first.rate")} / 10</span>
                </div>
              </div>

              <h4 className="font-light text-xl text-center">
                {t("section2.ratings.first.title")}
              </h4>
            </div>

            <div className="col-span-1 space-y-4">
              <div className="relative h-[275px]">
                <Image
                  src={ratings2}
                  alt={t("section2.ratings.second.alt")}
                  quality={75}
                  fill
                  style={{
                    objectFit: "cover",
                    objectPosition: "50% 50%",
                    borderRadius: "12px",
                  }}
                />
                <div className="bg-blue rounded-full text-white py-3 px-6 absolute z-[1] bottom-0 -right-2 lg:-right-8">
                  <span>{t("section2.ratings.second.rate")} / 10</span>
                </div>
              </div>
              <h4 className="font-light text-xl text-center">
                {t("section2.ratings.second.title")}
              </h4>
            </div>
            <div className="col-span-1 space-y-4">
              <div className="relative h-[275px]">
                <Image
                  src={ratings3}
                  alt={t("section2.ratings.third.alt")}
                  quality={75}
                  fill
                  style={{
                    objectFit: "cover",
                    objectPosition: "50% 50%",
                    borderRadius: "12px",
                  }}
                />
                <div className="bg-blue rounded-full text-white py-3 px-6 absolute z-[1] bottom-0 -right-2 lg:-right-8">
                  <span>{t("section2.ratings.third.rate")} / 10</span>
                </div>
              </div>
              <h4 className="font-light text-xl text-center">
                {t("section2.ratings.third.title")}
              </h4>
            </div>
            <div className="col-span-1 space-y-4">
              <div className="relative h-[275px]">
                <Image
                  src={ratings4}
                  alt={t("section2.ratings.fourth.alt")}
                  quality={75}
                  fill
                  style={{
                    objectFit: "cover",
                    objectPosition: "50% 50%",
                    borderRadius: "12px",
                  }}
                />
                <div className="bg-blue rounded-full text-white py-3 px-6 absolute z-[1] bottom-0 -right-2 lg:-right-8">
                  <span>{t("section2.ratings.fourth.rate")} / 10</span>
                </div>
              </div>
              <h4 className="font-light text-xl text-center">
                {t("section2.ratings.fourth.title")}
              </h4>
            </div>
          </div>

          <ol className="list-decimal">
            {t.rich("references", {
              li: (chunks) => <li className="text-sm">{chunks}</li>,
            })}
          </ol>
        </div>
      </section>
    </main>
  );
}
