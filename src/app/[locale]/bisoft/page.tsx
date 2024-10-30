import SeringeBiSoft from "@/app/components/bisoft/seringeBiSoft";
import BlueButton from "@/app/components/buttons/BlueButton";
import HeaderBigTitle from "@/app/components/globals/headerBigTitle";
import HeaderSpan from "@/app/components/globals/headerSpan";
import FromTopTitles from "@/app/components/titles/FromTopTitles";
import bgHeader from "@/app/img/beauty/vivacy-beauty.jpg";
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
    ],
  };
  const seringeTextThird = {
    title: t("seringe.third.title"),
    content: [
      t("seringe.third.content.first"),
      t("seringe.third.content.second"),
      t("seringe.third.content.third"),
      t("seringe.third.content.fourth"),
    ],
  };
  const seringeTextFourth = {
    title: t("seringe.fourth.title"),
    content: [
      t("seringe.fourth.content.first"),
      t("seringe.fourth.content.second"),
      t("seringe.fourth.content.third"),
    ],
  };
  const seringeTextFifth = {
    title: t("seringe.fifth.title"),
    content: [
      t("seringe.fifth.content.first"),
      t("seringe.fifth.content.second"),
      t("seringe.fifth.content.third"),
    ],
  };

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

      <section className="relative z-[1]">
        <Image
          src={section1Bg}
          alt=""
          quality={75}
          className="h-full absolute left-auto right-0 top-0 -z-[1]"
        />

        <div className="myContainer grid grid-cols-12">
          <div className="col-span-5 space-y-14">
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

            <div className="grid grid-cols-2 justify-start items-center">
              <div>
                <BlueButton content={t("cta.title")} path={t("cta.path")} />
              </div>
              <Image
                src={logoBiSoft}
                alt=""
                quality={75}
                style={{
                  objectFit: "contain",
                }}
                className=""
              />
            </div>
          </div>
          <div className="col-span-5 col-start-8 relative">
            <Image
              src={section1}
              alt=""
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

      <section>
        <div className="myContainer space-y-8 lg:space-y-28">
          <h2 className="h2-perso">{t("section2.h2")}</h2>

          <div className="grid grid-cols-4 gap-x-20">
            <div className="col-span-1 space-y-4">
              <div className="relative h-[275px]">
                <Image
                  src={ratings1}
                  alt=""
                  quality={75}
                  fill
                  style={{
                    objectFit: "cover",
                    objectPosition: "50% 50%",
                    borderRadius: "12px",
                  }}
                />
                <div className="bg-blue rounded-full text-white py-3 px-6 absolute z-[1] bottom-0 -right-8">
                  <span>{t("section2.ratings.first.rate")} / 10</span>
                </div>
              </div>
              <h4 className="font-light text-xl">
                {t("section2.ratings.first.title")}
              </h4>
            </div>
            <div className="col-span-1 space-y-4">
              <div className="relative h-[275px]">
                <Image
                  src={ratings2}
                  alt=""
                  quality={75}
                  fill
                  style={{
                    objectFit: "cover",
                    objectPosition: "50% 50%",
                    borderRadius: "12px",
                  }}
                />
                <div className="bg-blue rounded-full text-white py-3 px-6 absolute z-[1] bottom-0 -right-8">
                  <span>{t("section2.ratings.second.rate")} / 10</span>
                </div>
              </div>
              <h4 className="font-light text-xl">
                {t("section2.ratings.second.title")}
              </h4>
            </div>
            <div className="col-span-1 space-y-4">
              <div className="relative h-[275px]">
                <Image
                  src={ratings3}
                  alt=""
                  quality={75}
                  fill
                  style={{
                    objectFit: "cover",
                    objectPosition: "50% 50%",
                    borderRadius: "12px",
                  }}
                />
                <div className="bg-blue rounded-full text-white py-3 px-6 absolute z-[1] bottom-0 -right-8">
                  <span>{t("section2.ratings.third.rate")} / 10</span>
                </div>
              </div>
              <h4 className="font-light text-xl">
                {t("section2.ratings.third.title")}
              </h4>
            </div>
            <div className="col-span-1 space-y-4">
              <div className="relative h-[275px]">
                <Image
                  src={ratings4}
                  alt=""
                  quality={75}
                  fill
                  style={{
                    objectFit: "cover",
                    objectPosition: "50% 50%",
                    borderRadius: "12px",
                  }}
                />
                <div className="bg-blue rounded-full text-white py-3 px-6 absolute z-[1] bottom-0 -right-8">
                  <span>{t("section2.ratings.fourth.rate")} / 10</span>
                </div>
              </div>
              <h4 className="font-light text-xl">
                {t("section2.ratings.fourth.title")}
              </h4>
            </div>
          </div>
        </div>
      </section>

      <section className="relative h-[200vh]">
        <SeringeBiSoft
          first={seringeTextFirst}
          second={seringeTextSecond}
          third={seringeTextThird}
          fourth={seringeTextFourth}
          fifth={seringeTextFifth}
        />
      </section>
    </main>
  );
}
