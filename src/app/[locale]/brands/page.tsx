import BrandsDescriptions from "@/app/components/brands/brandsPresentation";
import HeaderBigTitle from "@/app/components/globals/headerBigTitle";
import ImageHeader from "@/app/components/globals/ImageHeader";
import PAnimate from "@/app/components/globals/pAnimate";
import VivacySecurity from "@/app/components/globals/vivacySecurity";
import FromTopTitles from "@/app/components/titles/FromTopTitles";
import firstSectionImg from "@/app/img/vivacy-brands-hyaluronic-acid.jpg";
import bgHeader from "@/app/img/vivacy-brands.jpg";
import { useTranslations } from "next-intl";
import Image from "next/image";

type Params = {
  params: { locale: string };
};

const titleEN =
  "Vivacy’s Brands: Stylage | Hydromax | Desirial | Vivacy Beauty";
const descriptionEN =
  "Vivacy's Brands. Discover the different premium hyaluronic acid solutions: Stylage, Hydromax, Desirial and Vivacy Beauty.";
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

export default function OurBrands() {
  const t = useTranslations("Brands");

  const texts = [
    {
      keys: ["stylage.img", "stylage.title", "stylage.content", "stylage.cta"],
      title: t.rich("brandsDescriptions.stylage.title", {
        sup: (chunks) => <sup>{chunks}</sup>,
      }),
      content: [
        t.rich("brandsDescriptions.stylage.content.c1", {
          sup: (chunks) => <sup>{chunks}</sup>,
        }),
      ],
      cta: {
        display: true,
        content: t.rich("brandsDescriptions.stylage.cta.content", {
          sup: (chunks) => <sup>{chunks}</sup>,
        }),
        path: t("brandsDescriptions.stylage.cta.path"),
      },
    },
    {
      keys: [
        "desirial.img",
        "desirial.title",
        "desirial.content",
        "desirial.cta",
      ],
      title: t.rich("brandsDescriptions.desirial.title", {
        sup: (chunks) => <sup>{chunks}</sup>,
      }),
      content: [
        t.rich("brandsDescriptions.desirial.content.c1", {
          sup: (chunks) => <sup>{chunks}</sup>,
        }),
      ],
      cta: {
        display: true,
        content: t.rich("brandsDescriptions.desirial.cta.content", {
          sup: (chunks) => <sup>{chunks}</sup>,
        }),
        path: t("brandsDescriptions.desirial.cta.path"),
      },
    },

    {
      keys: [
        "desirialplus.img",
        "desirialplus.title",
        "desirialplus.content",
        "desirialplus.cta",
      ],
      title: t.rich("brandsDescriptions.desirialPlus.title", {
        sup: (chunks) => <sup>{chunks}</sup>,
      }),
      content: [
        t.rich("brandsDescriptions.desirialPlus.content.c1", {
          sup: (chunks) => <sup>{chunks}</sup>,
        }),
      ],
      cta: {
        display: true,
        content: t.rich("brandsDescriptions.desirialPlus.cta.content", {
          sup: (chunks) => <sup>{chunks}</sup>,
        }),
        path: t("brandsDescriptions.desirialPlus.cta.path"),
      },
    },

    {
      keys: ["vivacy.img", "vivacy.title", "vivacy.content", "vivacy.cta"],
      title: t.rich("brandsDescriptions.vivacyBeauty.title", {
        sup: (chunks) => <sup>{chunks}</sup>,
      }),
      content: [
        t.rich("brandsDescriptions.vivacyBeauty.content.c1", {
          sup: (chunks) => <sup>{chunks}</sup>,
        }),
      ],
      cta: {
        display: true,
        content: t("brandsDescriptions.vivacyBeauty.cta.content"),
        path: t("brandsDescriptions.vivacyBeauty.cta.path"),
      },
    },

    {
      keys: [
        "kartilage.img",
        "kartilage.title",
        "kartilage.content",
        "kartilage.cta",
      ],
      title: t.rich("brandsDescriptions.kartilage.title", {
        sup: (chunks) => <sup>{chunks}</sup>,
      }),
      content: [
        t.rich("brandsDescriptions.kartilage.content.c1", {
          sup: (chunks) => <sup>{chunks}</sup>,
        }),
      ],
      cta: {
        display: false,
        content: t("brandsDescriptions.kartilage.cta.content"),
        path: t("brandsDescriptions.kartilage.cta.path"),
      },
    },

    {
      keys: ["ispace.img", "ispace.title", "ispace.content", "ispace.cta"],
      title: t.rich("brandsDescriptions.ispace.title", {
        sup: (chunks) => <sup>{chunks}</sup>,
      }),
      content: [
        t.rich("brandsDescriptions.ispace.content.c1", {
          sup: (chunks) => <sup>{chunks}</sup>,
        }),
      ],
      cta: {
        display: false,
        content: t("brandsDescriptions.ispace.cta.content"),
        path: t("brandsDescriptions.ispace.cta.path"),
      },
    },
  ];

  return (
    <main>
      <section className="relative min-h-[400px] lg:min-h-[550px] grid z-[1] overflow-hidden">
        <ImageHeader src={bgHeader} alt={t("alt")} />

        <div className="absolute top-0 left-0 size-full -z-[1] bg-blue opacity-15"></div>
        <HeaderBigTitle title={t("title")} />
      </section>

      <section>
        <div className="myContainer max-lg:flex max-lg:flex-col-reverse lg:grid lg:grid-cols-12">
          <div className="lg:col-span-5 relative max-lg:h-[350px]">
            <Image
              src={firstSectionImg}
              alt={t("section1.alt")}
              quality={75}
              fill
              style={{
                objectFit: "cover",
                objectPosition: "50% 50%",
              }}
              className="rounded-xl"
            />
          </div>
          <div className="col-span-6 space-y-8 lg:space-y-20 col-start-7 py-8 max-lg:pt-0">
            <FromTopTitles
              titleH2={t("section1.h2")}
              titleH3={t("section1.h3")}
              h3Classes="text-black"
            />

            <PAnimate
              content={t.rich("section1.content", {
                p: (chunks) => <p className="lg:text-lg">{chunks}</p>,
              })}
            />
          </div>
        </div>
      </section>

      <BrandsDescriptions texts={texts} />

      <VivacySecurity />
    </main>
  );
}
