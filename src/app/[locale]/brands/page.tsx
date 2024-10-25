import BrandsDescriptions from "@/app/components/brands/brandsPresentation";
import VivacySecurity from "@/app/components/globals/vivacySecurity";
import FromTopTitles from "@/app/components/titles/FromTopTitles";
import bgHeader from "@/app/img/our-brands-hyaluronic-acid.jpg";
import firstSectionImg from "@/app/img/vivacy-brands-hyaluronic-acid.jpg";
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
      title: "Our brands",
      description: "Description EN",
    };
  } else if (locale === "fr") {
    return {
      title: "Titre FR",
      description: "Description FR",
    };
  }
}

export default function OurBrands() {
  const t = useTranslations("Brands");

  const texts = [
    {
      keys: ["stylage.img", "stylage.title", "stylage.content", "stylage.cta"],
      title: t("brandsDescriptions.stylage.title"),
      content: [
        t("brandsDescriptions.stylage.content.c1"),
        t("brandsDescriptions.stylage.content.c2"),
      ],
      cta: {
        content: t("brandsDescriptions.stylage.cta.content"),
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
      title: t("brandsDescriptions.desirial.title"),
      content: [t("brandsDescriptions.desirial.content.c1")],
      cta: {
        content: t("brandsDescriptions.desirial.cta.content"),
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
      title: "Desirial®",
      content: [
        "DESIRIAL® is specifically designed to restore hydration and firmness in the vulvo-vaginal area for women experiencing vaginal dryness. With innovative formulations incorporating hyaluronic acid and antioxidants, DESIRIAL® provides effective solutions to enhance comfort and improve quality of life for affected women.",
      ],
      cta: {
        content: "Discover Desirial",
        path: "",
      },
    },

    {
      keys: ["vivacy.img", "vivacy.title", "vivacy.content", "vivacy.cta"],
      title: "Desirial®",
      content: [
        "DESIRIAL® is specifically designed to restore hydration and firmness in the vulvo-vaginal area for women experiencing vaginal dryness. With innovative formulations incorporating hyaluronic acid and antioxidants, DESIRIAL® provides effective solutions to enhance comfort and improve quality of life for affected women.",
      ],
      cta: {
        content: "Discover Desirial",
        path: "",
      },
    },
  ];

  return (
    <main>
      <section className="relative min-h-[400px] lg:min-h-[550px] grid">
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
        <div className="m-auto px-5 lg:px-28 lg:py-32">
          <h1 className=" text-[10vw] font-mona uppercase font-bold text-whiteGrey text-center leading-none">
            {t("title")}
          </h1>
        </div>

        <span className="max-lg:text-center max-lg:w-[60%] absolute bottom-8 lg:bottom-16 left-1/2 -translate-x-1/2 bg-whiteGrey/50 py-3 px-8 rounded-full uppercase text-sm text-blue backdrop-blur-sm">
          {t("span")}
        </span>
      </section>

      <section>
        <div className="myContainer max-lg:flex max-lg:flex-col-reverse lg:grid lg:grid-cols-12">
          <div className="lg:col-span-5 relative max-lg:h-[350px]">
            <Image
              src={firstSectionImg}
              alt=""
              quality={75}
              fill
              style={{
                objectFit: "cover",
                objectPosition: "50% 50%",
                borderRadius: "2rem",
              }}
            />
          </div>
          <div className="col-span-6 space-y-8 lg:space-y-28 col-start-7 py-8">
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

      <BrandsDescriptions texts={texts} />

      <VivacySecurity />
    </main>
  );
}
