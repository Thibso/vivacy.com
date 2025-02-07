import BlueButton from "@/app/components/buttons/BlueButton";
import HeaderBigTitle from "@/app/components/globals/headerBigTitle";
import ImageHeader from "@/app/components/globals/ImageHeader";
import PAnimate from "@/app/components/globals/pAnimate";
import FromTopCenteredTitles from "@/app/components/titles/FromTopCenteredTitles";
import FromTopTitles from "@/app/components/titles/FromTopTitles";
import bg from "@/app/img/background-grained.jpg";
import section4First from "@/app/img/beauty/cosmetic-products-vivacy-beauty.jpg";
import section2 from "@/app/img/beauty/specialist-cosmetology-vivacy-beauty.jpg";
import section1 from "@/app/img/beauty/vivacy-beauty-cosmetic-products.jpg";
import bgHeader from "@/app/img/beauty/vivacy-beauty.jpg";
import section3 from "@/app/img/beauty/vivacy-cosmetology-product.jpg";
import vivacyLogo from "@/app/img/vivacy-laboratories-hyaluronic-acid-france.png";

import { useTranslations } from "next-intl";
import Image from "next/image";

type Params = {
  params: { locale: string };
};

const titleEN = "Dermo-cosmetic care with Hyaluronic Acid | Vivacy Beauty";
const descriptionEN =
  "Hyaluronic Acid-based dermo-cosmetic treatments. Discover the Vivacy Beauty range of high-quality skincare formulas.";
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
      keywords: ["Vivacy", "Beauty", "Dermo-cosmetic", "Hyaluronic Acid"],
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
      keywords: ["Vivacy", "Beauty", "Dermo-cosmetic", "Hyaluronic Acid"],
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

export default function VivacyBeauty() {
  const t = useTranslations("Beauty");

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
      {
        "@type": "ListItem",
        position: 2,
        name: "Brands",
        item: "https://vivacy.com/en/premium-aesthetic-solutions",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Vivacy Beauty",
        item: "https://vivacy.com/en/vivacy-beauty-dermo-cosmetic-skincare",
      },
    ],
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      <section className="relative min-h-[400px] lg:min-h-[550px] grid z-[1] overflow-hidden">
        <ImageHeader src={bgHeader} alt={t("alt")} />

        <div className="absolute top-0 left-0 size-full -z-[1] bg-blue opacity-15"></div>
        <HeaderBigTitle title={t("title")} />
      </section>

      <section className="relative bg-white z-[2]">
        <Image
          src={vivacyLogo}
          alt="Vivacy"
          quality={75}
          style={{
            objectFit: "contain",
            zIndex: "-1",
            left: 0,
            position: "absolute",
            opacity: 0.02,
          }}
          className="max-lg:hidden w-full lg:w-[60%] top-[50%] lg:top-[45%]"
        />

        <div className="myContainer max-lg:flex max-lg:flex-col-reverse lg:grid max-lg:gap-y-8 lg:grid-cols-2 lg:gap-x-28">
          <div className="relative lg:col-span-1 max-lg:h-[350px]">
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

          <div className="lg:col-span-1 space-y-8 lg:space-y-20">
            <FromTopTitles
              titleH2={t("section1.h2")}
              titleH3={t("section1.h3")}
              h3Classes="text-black"
            />
            <PAnimate
              content={t.rich("section1.content", {
                p: (chunks) => <p className="lg:text-lg">{chunks}</p>,
                br: () => <br />,
              })}
            />

            <div className="max-lg:flex max-lg:justify-center">
              <BlueButton
                content={t("cta.title")}
                path={t("cta.path")}
                blank={true}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-transparent relative z-[2]">
        <div className="myContainer max-lg:space-y-8 pt-0 lg:grid lg:grid-cols-2">
          <div className="space-y-8 lg:space-y-20 lg:pr-28">
            <FromTopTitles
              titleH2={t("section2.h2")}
              titleH3={t("section2.h3")}
              h3Classes="text-black"
            />
            <PAnimate
              content={t.rich("section2.content", {
                p: (chunks) => <p className="lg:text-lg">{chunks}</p>,
              })}
            />
          </div>

          <div className="relative max-lg:h-[350px]">
            <Image
              src={section2}
              alt={t("section2.alt")}
              quality={100}
              fill
              style={{
                objectFit: "cover",
                objectPosition: "50% 50%",
              }}
              className="rounded-xl"
            />
          </div>
        </div>
      </section>

      <section className="relative z-[1]">
        <Image
          src={section3}
          alt={t("section3.alt")}
          quality={100}
          fill
          style={{
            objectFit: "cover",
            objectPosition: "50% 50%",
            zIndex: "-2",
          }}
        />

        <div className="myContainer lg:grid lg:grid-cols-2 ">
          <div className="p-4 lg:p-10 lg:col-span-1 lg:col-start-2 backdrop-blur-md rounded-xl bg-white/15 space-y-8 lg:space-y-20">
            <FromTopTitles
              titleH2={t("section3.h2")}
              titleH3={t("section3.h3")}
              h3Classes="text-black"
            />

            <PAnimate
              content={t.rich("section3.content", {
                p: (chunks) => <p className="lg:text-lg">{chunks}</p>,
              })}
            />

            <div className="max-lg:flex max-lg:justify-center">
              <BlueButton
                content={t("cta.title")}
                path={t("cta.path")}
                blank={true}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-white z-[1]">
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
        <div className="myContainer space-y-8 lg:space-y-20">
          <FromTopCenteredTitles
            titleH2={t("section4.h2")}
            titleH3={t("section4.h3")}
            h3Classes="text-black"
          />

          <div className="lg:grid lg:grid-cols-2 lg:gap-x-28 max-lg:space-y-8">
            <div className="lg:col-span-1 lg:py-20">
              <PAnimate
                content={t.rich("section4.content", {
                  p: (chunks) => <p className="lg:text-lg">{chunks}</p>,
                  sup: (chunks) => <sup>{chunks}</sup>,
                })}
              />
            </div>

            <div className="col-span-1 relative max-lg:h-[350px] ">
              <Image
                src={section4First}
                alt={t("section4.alt1")}
                quality={100}
                fill
                style={{
                  objectFit: "cover",
                }}
                className="rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
