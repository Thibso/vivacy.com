import { useTranslations } from "next-intl";
import Image from "next/image";
import BlueButton from "../components/buttons/BlueButton";
import KeyNumbers from "../components/globals/keyNumbers";
import PAnimate from "../components/globals/pAnimate";
import WorldMap from "../components/globals/worldMap";
import Innovations from "../components/home/innovations";
import SyringeRotate from "../components/scrollEffects/SyringeRotate";
import LogoSlider from "../components/sliders/LogoSlider";
import ProductsCarousel from "../components/sliders/productsCarousel";
import FromTopCenteredTitles from "../components/titles/FromTopCenteredTitles";
import FromTopTitles from "../components/titles/FromTopTitles";
import productsBg from "../img/experts-acide-hyaluronique-laboratoires-vivacy.jpg";
import haPower from "../img/vivacy-hyaluronic-acid-experts.jpg";
import experienceBg from "../img/vivacy-laboratoires-experience-esthetique.jpg";

type Params = {
  params: { locale: string };
};

const titleEN =
  "Vivacy | Premium Injectable Hyaluronic Acid | Stylage & Desirial";
const descriptionEN =
  "Vivacy, specialising in injectable hyaluronic acid. Discover the Stylage, Hydromax & Desirial ranges, filling treatments from Laboratoires Vivacy.";
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

export default function Home() {
  const t = useTranslations("HomePage");
  return (
    <main>
      {/* VIDEO HEADER */}
      <section className="h-[70vh] lg:h-[100vh] relative z-[2] grid pb-6">
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
        </div>
      </section>

      <section className="relative z-[1] overflow-hidden">
        <Image
          src={haPower}
          alt={t("section1.alt")}
          quality={100}
          style={{
            objectFit: "cover",
            objectPosition: "0% 0%",
            zIndex: "-1",
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
            left: "0",
            maxWidth: "inherit",
          }}
          className="max-md:size-full max-md:object-center md:h-[auto] md:w-[125%]"
        />
        <div className="myContainer">
          <div className="lg:grid lg:grid-cols-2 lg:gap-36 lg:justify-between">
            <div className="space-y-8 lg:space-y-28 lg:my-auto lg:pr-16">
              <FromTopTitles
                titleH2={t("section1.h2")}
                titleH3={t("section1.h3")}
                h3Classes="text-black"
              />

              <PAnimate
                content={t.rich("section1.text", {
                  p: (chunks) => <p className="lg:text-lg">{chunks}</p>,
                })}
              />

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
          alt={t("section2.alt")}
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
              <PAnimate
                content={t.rich("section2.text", {
                  p: (chunks) => (
                    <p className="lg:text-lg text-white">{chunks}</p>
                  ),
                })}
              />

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

      <KeyNumbers />

      <Innovations />

      <SyringeRotate />

      {/* AFTER EFFECT SECTIONS */}
      <section className="relative z-[1]">
        <Image
          className="-z-[1]"
          src={productsBg}
          alt="texture"
          quality={100}
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
        />
        <div className="myContainer space-y-14 lg:space-y-28">
          <FromTopTitles
            titleH2={t("section5.h2")}
            titleH3={t("section5.h3")}
            h3Classes="text-black"
          />

          {/* SLIDER COMPONENTS */}
          <ProductsCarousel />
        </div>
      </section>

      <section className="bg-[#fafbfc]">
        <div className="myContainer space-y-14 lg:space-y-20 flex flex-col items-center overflow-hidden">
          <FromTopCenteredTitles
            titleH2={t("section6.h2")}
            titleH3={t("section6.h3")}
            h3Classes="text-black"
          />

          <LogoSlider />

          <BlueButton
            content={t("section6.button")}
            path={t("section6.buttonPath")}
          />
        </div>
      </section>

      <section className="border-b-2 border-blue">
        <div className="myContainer space-y-14 lg:space-y-20">
          <FromTopCenteredTitles
            titleH2={t("section7.h2")}
            titleH3={t("section7.h3")}
            h3Classes="text-black"
          />

          <PAnimate
            classes="lg:w-[90%] mx-auto text-center lg:text-lg"
            content={t("section7.text")}
          />
          <WorldMap />
        </div>
      </section>
    </main>
  );
}
