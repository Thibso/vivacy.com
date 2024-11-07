import { useTranslations } from "next-intl";
import Image from "next/image";
import BlueButton from "../components/buttons/BlueButton";
import WhiteButton from "../components/buttons/WhiteButton";
import SyringeRotate from "../components/scrollEffects/SyringeRotate";
import LogoSlider from "../components/sliders/LogoSlider";
import ProductsCarousel from "../components/sliders/productsCarousel";
import FromTopCenteredTitles from "../components/titles/FromTopCenteredTitles";
import FromTopTitles from "../components/titles/FromTopTitles";
import productsBg from "../img/experts-acide-hyaluronique-laboratoires-vivacy.jpg";
import syringe from "../img/stylage-specialiste-acide-hyaluronique-premium.png";
import haPower from "../img/vivacy-hyaluronic-acid-experts.jpg";
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
      <section className="h-[100vh] relative z-[1] grid pb-6">
        <video
          className="absolute size-full top-0 left-1/2 -translate-x-1/2 object-cover -z-[1]"
          autoPlay
          muted
          playsInline
          loop
        >
          <source
            src="/videos/vivacy-laboratories-video-presentation.mp4"
            type="video/mp4"
          />
        </video>

        <div className="m-auto mb-0 space-y-8">
          <h1 className="h3-perso text-white text-center">{t("title")}</h1>
          <span className="block max-lg:text-center max-lg:w-[60%] bg-whiteGrey/50 py-3 px-8 rounded-full uppercase text-sm text-blue backdrop-blur-sm">
            {t("span")}
          </span>
        </div>
      </section>
      <section className="relative z-[1]">
        <Image
          src={haPower}
          alt=""
          quality={100}
          fill
          style={{
            objectFit: "cover",
            objectPosition: "35% 100%",
            zIndex: "-1",
            position: "absolute",
          }}
          className="max-lg:opacity-60"
        />
        <div className="myContainer">
          <div className="lg:grid lg:grid-cols-2 lg:gap-36 lg:justify-between">
            <div className="lg:pt-16 space-y-8 lg:space-y-28 lg:my-auto">
              <FromTopTitles
                titleH2={t("section1.h2")}
                titleH3={t("section1.h3")}
                h3Classes="text-black"
              />

              <div className="space-y-4">
                {t.rich("section1.text", {
                  p: (chunks) => <p className="text-lg">{chunks}</p>,
                })}
              </div>

              <div className="max-lg:flex max-lg:justify-center">
                <BlueButton
                  content={t("section1.button")}
                  path={t("section1.buttonPath")}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-[1] lg:max-w-[2550px] lg:mx-auto lg:min-h-screen lg:flex">
        <Image
          src={experienceBg}
          alt=""
          quality={100}
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
            objectPosition: "0% 100%",
            zIndex: "-1",
          }}
        />
        <div className="myContainer lg:h-[auto] lg:flex lg:flex-col lg:justify-around space-y-8 lg:space-y-28">
          <FromTopCenteredTitles
            titleH2={t("section2.h2")}
            titleH3={t("section2.h3")}
            h3Classes="text-black"
          />

          <div className="lg:grid lg:grid-cols-2 lg:gap-36">
            <div className="col-start-2 space-y-8 lg:space-y-28">
              <div className="space-y-4">
                {t.rich("section2.text", {
                  p: (chunks) => <p className="text-lg text-white">{chunks}</p>,
                })}
              </div>

              <div className="max-lg:flex max-lg:justify-center">
                <BlueButton
                  content={t("section2.button")}
                  path={t("section2.buttonPath")}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue lg:max-w-[2550px] lg:m-auto">
        <div className="myContainer space-y-14 lg:space-y-28 text-white lg:flex lg:flex-col lg:items-center">
          <div className="titles-container w-full">
            <h2 className="h2-perso text-white">{t("section3.h2")}</h2>
            <h3 className="h3-perso text-white">{t("section3.h3")}</h3>
          </div>

          <div className="max-lg:space-y-14 lg:grid lg:grid-cols-4 lg:gap-20">
            <div className="text-center">
              <p>
                <span className="font-bold text-3xl">x</span>
                <span className="font-bold text-7xl ml-2">5</span>
              </p>
              <p className="mt-4 lg:mt-14">{t("section3.keyNumbers.1")}</p>
            </div>

            <div className="text-center">
              <p>
                <span className="font-bold text-3xl">+</span>
                <span className="font-bold text-7xl ml-2">20%</span>
              </p>
              <p className="mt-4 lg:mt-14">{t("section3.keyNumbers.2")}</p>
            </div>

            <div className="text-center">
              <p>
                <span className="font-bold text-7xl ml-2">80</span>
              </p>
              <p className="mt-4 lg:mt-14">{t("section3.keyNumbers.3")}</p>
            </div>

            <div className="text-center">
              <p>
                <span className="font-bold text-7xl ml-2">5</span>
              </p>
              <p className="mt-4 lg:mt-14">{t("section3.keyNumbers.4")}</p>
            </div>
          </div>

          <div className="max-lg:flex max-lg:justify-center">
            <WhiteButton
              content={t("section3.button")}
              path={t("section3.buttonPath")}
            />
          </div>
        </div>
      </section>

      <section className="relative z-[1]">
        <Image
          className="-z-[1]"
          src={innovationsBg}
          alt=""
          quality={100}
          fill
          style={{
            objectFit: "cover",
          }}
        />
        <div className="myContainer space-y-8 lg:space-y-28">
          <FromTopCenteredTitles
            titleH2={t("section4.h2")}
            titleH3={t("section4.h3")}
            h3Classes="text-black"
          />

          <div className="lg:grid lg:grid-cols-2 lg:gap-36">
            <div className="space-y-8 lg:space-y-14">
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

              <div className="max-lg:flex max-lg:justify-center">
                <BlueButton
                  content={t("section2.button")}
                  path={t("section2.buttonPath")}
                />
              </div>
            </div>

            <div className="max-lg:hidden flex justify-end items-end">
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

      <section className="relative z-[1]">
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
        <div className="myContainer space-y-14 lg:space-y-28">
          <div className="titles-container w-full">
            <h2 className="h2-perso">{t("section5.h2")}</h2>
            <h3 className="h3-perso">{t("section5.h3")}</h3>
          </div>

          {/* SLIDER COMPONENTS */}
          <ProductsCarousel />
        </div>
      </section>

      <section>
        <div className="myContainer space-y-28 flex flex-col items-center">
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
