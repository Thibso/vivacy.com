import { useTranslations } from "next-intl";
import Image from "next/image";
import BlueButton from "../components/buttons/BlueButton";
import KeyNumbers from "../components/globals/keyNumbers";
import PAnimate from "../components/globals/pAnimate";
import WorldMap from "../components/globals/worldMap";
import BigTitle from "../components/home/bigTitle";
import Innovations from "../components/home/innovations";
import SyringeRotate from "../components/scrollEffects/SyringeRotate";
import LogoSlider from "../components/sliders/LogoSlider";
import ProductsCarousel from "../components/sliders/productsCarousel";
import FromTopCenteredTitles from "../components/titles/FromTopCenteredTitles";
import FromTopTitles from "../components/titles/FromTopTitles";
import productsBg from "../img/experts-acide-hyaluronique-laboratoires-vivacy.jpg";
import experienceBg from "../img/vivacy-laboratoires-experience-esthetique.png";

type Params = {
  params: { locale: string };
};

const titleEN =
  "Vivacy | Premium Injectable Hyaluronic Acid | Stylage® & Desirial®";
const descriptionEN =
  "Vivacy, specialising in injectable hyaluronic acid. Discover the Stylage®, Hydromax & Desirial® ranges, filling treatments from Laboratoires Vivacy.";
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
      keywords: ["Vivacy", "Premium", "Injectable Hyaluronic Acid"],
      openGraph: {
        title: titleEN,
        description: descriptionEN,
        url: "https://vivacy.com/",
        siteName: "vivacy.com",
        images: [
          {
            url: "https://vivacy.com/vivacy-laboratories.jpg",
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
      keywords: ["Vivacy", "Premium", "Injectable Hyaluronic Acid"],
      openGraph: {
        title: titleFR,
        description: descriptionFR,
        url: "https://vivacy.com/",
        siteName: "vivacy.com",
        images: [
          {
            url: "https://vivacy.com/vivacy-laboratories.jpg",
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

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Laboratoires Vivacy",
    alternateName: "Vivacy",
    url: "https://vivacy.com",
    logo: "https://vivacy.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvivacy-logo-official.6d2026ff.png&w=2048&q=75",
    description:
      "Laboratoires VIVACY is renowned pioneers of Hyaluronic Acid in the field of aesthetic medicine.",
    foundingDate: "2007",
    address: {
      "@type": "PostalAddress",
      streetAddress: "44 rue Paul Valéry",
      addressLocality: "Paris",
      postalCode: "75116",
      addressCountry: "FR",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+33 01 56 90 08 08",
      contactType: "Headquarters: Marketing & Sales",
      availableLanguage: ["French", "English"],
    },
    sameAs: [
      "https://www.facebook.com/laboratoiresvivacy",
      "https://www.instagram.com/laboratoiresvivacy/",
      "https://www.linkedin.com/company/laboratoires-vivacy-sas",
    ],
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Homepage",
        item: "https://vivacy.com/en",
      },
    ],
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />

      {/* VIDEO HEADER */}
      <section className="h-[70vh] lg:h-[100vh] relative z-[2] grid pb-3">
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

        <BigTitle>
          <h1 className="h3-perso text-6xl text-white text-center tracking-[0.2em]">
            {t("title")}
          </h1>
        </BigTitle>
      </section>

      <section className="relative bg-[url('/images/acid-hyaluronic-experts-laboratoires-vivacy-paris.jpg')] bg-fixed bg-cover bg-opacity-10 z-[1] overflow-hidden">
        <div className="absolute size-full bg-white/40 top-0 left-0 -z-[1]"></div>
        {/* <Image
          src={haPower}
          alt={t("section1.alt")}
          quality={100}
          fill
          style={{
            objectFit: "cover",
            objectPosition: "0% 0%",
            zIndex: "-1",
            maxWidth: "inherit",
            opacity: 0.75,
          }}
          className="size-full object-center"
        /> */}
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

      <section className="relative z-[1] lg:max-w-[2550px] lg:mx-auto lg:min-h-screen lg:flex bg-[#fafbfc]">
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
          className="max-lg:hidden"
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
                  p: (chunks) => <p className="lg:text-lg ">{chunks}</p>,
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
      <section id="skipEffect" className="relative z-[1]">
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
