import BlueButton from "@/app/components/buttons/BlueButton";
import HeaderBigTitle from "@/app/components/globals/headerBigTitle";
import HeaderSpan from "@/app/components/globals/headerSpan";
import FromTopCenteredTitles from "@/app/components/titles/FromTopCenteredTitles";
import FromTopTitles from "@/app/components/titles/FromTopTitles";
import bg from "@/app/img/background-grained.jpg";
import section4First from "@/app/img/beauty/cosmetic-products-vivacy-beauty.jpg";
import section2 from "@/app/img/beauty/specialist-cosmetology-vivacy-beauty.jpg";
import section1 from "@/app/img/beauty/vivacy-beauty-cosmetic-products.jpg";
import bgHeader from "@/app/img/beauty/vivacy-beauty.jpg";
import section3 from "@/app/img/beauty/vivacy-cosmetology-product.jpg";
import section4Second from "@/app/img/beauty/vivacy-labratories-cosmetic.jpg";
import vivacyLogo from "@/app/img/vivacy-laboratories-hyaluronic-acid-france.png";

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
      title: "VivacyBeauty",
      description: "Description EN",
    };
  } else if (locale === "fr") {
    return {
      title: "Titre FR",
      description: "Description FR",
    };
  }
}

export default function VivacyBeauty() {
  const t = useTranslations("Beauty");

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

      <section className="relative bg-white z-[2]">
        <Image
          src={vivacyLogo}
          alt=""
          quality={75}
          style={{
            objectFit: "contain",
            zIndex: "-1",
            left: 0,
            position: "absolute",
            opacity: 0.05,
          }}
          className="max-lg:hidden w-full lg:w-[60%] top-[50%] lg:top-[45%]"
        />

        <div className="myContainer max-lg:flex max-lg:flex-col-reverse lg:grid max-lg:gap-y-8 lg:grid-cols-2 lg:gap-x-28">
          <div className="relative lg:col-span-1 max-lg:h-[350px]">
            <Image
              src={section1}
              alt=""
              quality={75}
              fill
              style={{
                objectFit: "cover",
                objectPosition: "50% 50%",
                borderRadius: "12px",
              }}
            />
          </div>

          <div className="lg:col-span-1 space-y-8 lg:space-y-28 lg:pt-20 lg:pb-28">
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
        </div>
      </section>

      <section className="bg-white z-[1]">
        <div className="myContainer max-lg:space-y-8 max-lg:pt-0 lg:pr-0 lg:pt-0 lg:grid lg:grid-cols-2 lg:space-y-12">
          <div className="space-y-8 lg:space-y-28 lg:pr-28 lg:pb-20">
            <FromTopTitles
              titleH2={t("section2.h2")}
              titleH3={t("section2.h3")}
              h3Classes="text-black"
            />

            <div className="space-y-4">
              {t.rich("section2.content", {
                p: (chunks) => <p className="text-lg">{chunks}</p>,
              })}
            </div>

            <div className="max-lg:flex max-lg:justify-center">
              <BlueButton content={t("cta.title")} path={t("cta.path")} />
            </div>
          </div>

          <div className="relative max-lg:h-[350px]">
            <Image
              src={section2}
              alt=""
              quality={75}
              fill
              style={{
                objectFit: "cover",
                objectPosition: "50% 50%",
                borderRadius: "12px 0 0 12px",
              }}
            />
          </div>
        </div>
      </section>

      <section className="relative">
        <Image
          src={section3}
          alt=""
          quality={100}
          style={{
            objectFit: "cover",
            objectPosition: "50% 50%",
            zIndex: "-2",
          }}
          className="h-full fixed top-0"
        />

        <div className="myContainer lg:grid lg:grid-cols-2 ">
          <div className="p-4 lg:p-10 lg:col-span-1 lg:col-start-2 backdrop-blur rounded-xl bg-white/15 space-y-8 lg:space-y-14">
            <FromTopTitles
              titleH2={t("section3.h2")}
              titleH3={t("section3.h3")}
              h3Classes="text-black"
            />

            <div className="space-y-4">
              {t.rich("section3.content", {
                p: (chunks) => <p className="text-lg">{chunks}</p>,
              })}
            </div>

            <div className="max-lg:flex max-lg:justify-center">
              <BlueButton content={t("cta.title")} path={t("cta.path")} />
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-white z-[1]">
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
        <div className="myContainer lg:pr-0 space-y-8 lg:space-y-20">
          <FromTopCenteredTitles
            titleH2={t("section4.h2")}
            titleH3={t("section4.h3")}
            h3Classes="text-black"
          />

          <div className="lg:grid lg:grid-cols-2 lg:gap-x-28 max-lg:space-y-8">
            <div className="lg:col-span-1 lg:py-28">
              <div className="space-y-4">
                {t.rich("section4.content", {
                  p: (chunks) => <p className="text-lg">{chunks}</p>,
                })}
              </div>
            </div>

            <div className="col-span-1 relative max-lg:h-[450px]">
              <Image
                src={section4First}
                alt=""
                quality={75}
                style={{
                  objectFit: "cover",
                }}
                className="absolute top-0 right-0 w-[90%] h-[65%] z-[2] max-lg:rounded-xl rounded-s-xl"
              />
              <Image
                src={section4Second}
                alt=""
                quality={75}
                style={{
                  objectFit: "cover",
                }}
                className="absolute bottom-0 right-0 w-full h-[60%] z-[1] max-lg:rounded-xl rounded-s-xl"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
