import { useTranslations } from "next-intl";
import Image from "next/image";
import BlueButton from "../components/buttons/BlueButton";
import WhiteButton from "../components/buttons/WhiteButton";
import SyringeRotate from "../components/scrollEffects/SyringeRotate";
import LogoSlider from "../components/sliders/LogoSlider";
import productsBg from "../img/experts-acide-hyaluronique-laboratoires-vivacy.jpg";
import syringe from "../img/stylage-specialiste-acide-hyaluronique-premium.png";
import premisesArchamps from "../img/vivacy-archamps-locaux.jpg";
import innovationsBg from "../img/vivacy-laboratoire-esthetique-france.jpg";
import experienceBg from "../img/vivacy-laboratoires-experience-esthetique.jpg";

type Params = {
  params: { locale: string };
};

// META DATAS
export async function generateMetadata({ params }: Params) {
  const locale = params.locale;
  if (locale === "en") {
    return {
      title: "Titre EN",
      description: "Description EN",
    };
  } else if (locale === "fr") {
    return {
      title: "Titre FR",
      description: "Description FR",
    };
  }
}

export default function Home() {
  const t = useTranslations("HomePage");
  return (
    <main>
      <section>
        <div className="container">
          <div className="grid grid-cols-2 gap-36 justify-between">
            <div className="py-16 space-y-28 my-auto">
              <div className="titles-container">
                <h2 className="h2-perso">{t("section1.h2")}</h2>
                <h3 className="h3-perso text-black">{t("section1.h3")}</h3>
              </div>

              <div className="space-y-4">
                {t.rich("section1.text", {
                  p: (chunks) => <p className="text-lg">{chunks}</p>,
                })}
              </div>

              <BlueButton
                content={t("section1.button")}
                path={t("section1.buttonPath")}
              />
            </div>
            <div className="relative">
              <Image
                src={premisesArchamps}
                alt=""
                quality={100}
                fill
                sizes="100vw"
                style={{
                  objectFit: "cover",
                }}
              />
              <span className="font-light italic text-sm text-white absolute bottom-2 right-4">
                {t("section1.imgText")}
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="relative max-w-[2550px] mx-auto min-h-screen flex">
        <Image
          className="-z-[1]"
          src={experienceBg}
          alt=""
          quality={100}
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
            objectPosition: "0% 100%",
          }}
        />
        <div className="container h-[auto] flex flex-col justify-around">
          <div className="titles-container text-center">
            <h2 className="h2-perso">{t("section2.h2")}</h2>
            <h3 className="h3-perso text-white">{t("section2.h3")}</h3>
          </div>
          <div className="grid grid-cols-2 gap-36">
            <div className="col-start-2 space-y-28">
              <div className="space-y-4">
                {t.rich("section2.text", {
                  p: (chunks) => <p className="text-lg text-white">{chunks}</p>,
                })}
              </div>

              <BlueButton
                content={t("section2.button")}
                path={t("section2.buttonPath")}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue max-w-[2550px] m-auto">
        <div className="container space-y-28 text-white flex flex-col items-center">
          <div className="titles-container w-full">
            <h2 className="h2-perso text-white">{t("section3.h2")}</h2>
            <h3 className="h3-perso text-white">{t("section3.h3")}</h3>
          </div>

          <div className="grid grid-cols-4 gap-20">
            <div className="text-center">
              <p>
                <span className="font-bold text-3xl">x</span>
                <span className="font-bold text-7xl ml-2">5</span>
              </p>
              <p className="mt-14">{t("section3.keyNumbers.1")}</p>
            </div>

            <div className="text-center">
              <p>
                <span className="font-bold text-3xl">+</span>
                <span className="font-bold text-7xl ml-2">20%</span>
              </p>
              <p className="mt-14">{t("section3.keyNumbers.2")}</p>
            </div>

            <div className="text-center">
              <p>
                <span className="font-bold text-7xl ml-2">80</span>
              </p>
              <p className="mt-14">{t("section3.keyNumbers.3")}</p>
            </div>

            <div className="text-center">
              <p>
                <span className="font-bold text-7xl ml-2">5</span>
              </p>
              <p className="mt-14">{t("section3.keyNumbers.4")}</p>
            </div>
          </div>

          <WhiteButton
            content={t("section3.button")}
            path={t("section3.buttonPath")}
          />
        </div>
      </section>

      <section className="relative">
        <Image
          className="-z-[1]"
          src={innovationsBg}
          alt=""
          quality={100}
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
        />
        <div className="container space-y-28">
          <div className="titles-container text-center">
            <h2 className="h2-perso">{t("section4.h2")}</h2>
            <h3 className="h3-perso">{t("section4.h3")}</h3>
          </div>

          <div className="grid grid-cols-2 gap-36">
            <div className="space-y-14">
              <div className="space-y-3">
                {t.rich("section4.textTop", {
                  p: (chunks) => <p className=" last:ml-8 text-lg">{chunks}</p>,
                })}
              </div>

              <div className="space-y-4">
                {t.rich("section4.textCore", {
                  p: (chunks) => <p className="text-lg">{chunks}</p>,
                })}
              </div>

              <BlueButton
                content={t("section2.button")}
                path={t("section2.buttonPath")}
              />
            </div>

            <div className="flex justify-end items-end">
              <Image
                src={syringe}
                alt=""
                height={650}
                style={{
                  transformOrigin: "top center",
                  transform: "rotate(45deg)",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* AFTER EFFECT SECTIONS */}
      <SyringeRotate />

      <section className="relative">
        <Image
          className="-z-[1]"
          src={productsBg}
          alt=""
          quality={100}
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
        />
        <div className="container space-y-28">
          <div className="titles-container w-full">
            <h2 className="h2-perso">{t("section5.h2")}</h2>
            <h3 className="h3-perso">{t("section5.h3")}</h3>
          </div>

          {/* SLIDER COMPONENTS */}
        </div>
      </section>

      <section>
        <div className="container space-y-28 flex flex-col items-center">
          <div className="titles-container">
            <h2 className="h2-perso">{t("section6.h2")}</h2>
            <h3 className="h3-perso">{t("section6.h3")}</h3>
          </div>

          <LogoSlider />

          <BlueButton
            content={t("section6.button")}
            path={t("section6.buttonPath")}
          />
        </div>
      </section>
    </main>
  );
}
