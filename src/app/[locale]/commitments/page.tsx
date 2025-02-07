import IconsEffect from "@/app/components/commitments/iconsEffect";
import HeaderBigTitle from "@/app/components/globals/headerBigTitle";
import PAnimate from "@/app/components/globals/pAnimate";
import FromTopCenteredTitles from "@/app/components/titles/FromTopCenteredTitles";
import FromTopTitles from "@/app/components/titles/FromTopTitles";
import fourth from "@/app/img/auvergne-rhone-alpes-vivacy.jpg";
import bg from "@/app/img/background-grained.jpg";
import authenticity from "@/app/img/badge-check.png";
import efficiency from "@/app/img/crosshair.png";
import environment from "@/app/img/environment-challenge-vivacy.jpeg";
import rhoneAlpes from "@/app/img/Groupe 66.png";
import security from "@/app/img/lock-keyhole.png";
import quality from "@/app/img/shield-check.png";
import first from "@/app/img/vivacy-laboratories-commitments.jpg";
import second from "@/app/img/vivacy-photo-from-top.jpg";

import { useTranslations } from "next-intl";
import Image, { StaticImageData } from "next/image";

type Params = {
  params: { locale: string };
};

const titleEN = "Vivacy's commitments | Serving doctors and patients";
const descriptionEN =
  "The commitments of Laboratoires Vivacy. Discover the values of the French laboratory that specialises in injectable hyaluronic acid for doctors and patients.";
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
      keywords: ["Vivacy", "commitments"],
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
      keywords: ["Vivacy", "commitments"],
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

export default function OurCommitments() {
  const t = useTranslations("Commitments");

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://vivacy.com/en",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Our commitments",
        item: "https://vivacy.com/en/corporate-commitments-csr",
      },
    ],
  };

  const corporateValues: Array<[StaticImageData, string, string]> = [
    [quality, t("section1.quality.title"), t("section1.quality.content")],
    [security, t("section1.security.title"), t("section1.security.content")],
    [
      authenticity,
      t("section1.authenticity.title"),
      t("section1.authenticity.content"),
    ],
    [
      efficiency,
      t("section1.efficiency.title"),
      t("section1.efficiency.content"),
    ],
  ];

  const valuesAlt = [
    t("section1.quality.title"),
    t("section1.security.title"),
    t("section1.authenticity.title"),
    t("section1.efficiency.title"),
  ];

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <section className="relative min-h-[400px] lg:min-h-[550px] grid z-[1]">
        <video
          className="absolute max-md:h-[150%] max-xl:h-[140%] xl:size-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover -z-[2]"
          autoPlay
          muted
          playsInline
          loop
        >
          <source src="/videos/our-commitments-vivacy.mp4" type="video/mp4" />
        </video>
        <div className="absolute top-0 left-0 size-full -z-[1] bg-blue opacity-25"></div>
        <HeaderBigTitle title={t("title")} />
      </section>

      <section className="relative z-[1] bg-white">
        <div className="myContainer">
          <FromTopCenteredTitles
            titleH2={t("section1.h2")}
            titleH3={t("section1.h3")}
            h3Classes="text-black"
          />

          <IconsEffect
            corporateValues={corporateValues}
            valuesAlt={valuesAlt}
          />

          <div className="mt-8">
            <p className="text-sm">* {t("section1.references.rifd")}</p>
          </div>
        </div>
      </section>

      <section className="relative z-[1] pb-16 lg:pb-24 xl:pb-32">
        <Image
          src={bg}
          alt="texture"
          quality={75}
          className="absolute object-contain w-full -z-[1]"
        />

        <div className="space-y-14 lg:space-y-20 xl:space-y-28">
          {/* first */}
          <div className="max-lg:flex max-lg:flex-col-reverse max-lg:px-5 max-lg:gap-8 lg:grid lg:grid-cols-2">
            <div className="relative h-[350px] lg:h-[630px] 2xl:h-[560px]">
              <Image
                src={first}
                alt={t("section2.first.alt")}
                quality={100}
                fill
                className="object-cover object-center"
              />
            </div>
            <div className="lg:px-10 xl:px-24 space-y-8 lg:space-y-20 my-auto">
              <FromTopTitles
                titleH2={t("section2.h2")}
                titleH3={t("section2.h3")}
                h3Classes="text-black"
              />
              <PAnimate
                classes=""
                content={t.rich("section2.first.content", {
                  p: (chunks) => <p className="lg:text-lg">{chunks}</p>,
                })}
              />
            </div>
          </div>

          {/* second */}
          <div className="max-lg:px-5 max-lg:space-y-8 lg:grid lg:grid-cols-2">
            <div className="lg:px-10 xl:px-24 space-y-8 lg:space-y-20 my-auto">
              <FromTopTitles
                titleH2={t("section2.second.h2")}
                titleH3={t("section2.second.h3")}
                h3Classes="text-black"
              />

              <PAnimate
                content={t.rich("section2.second.content", {
                  p: (chunks) => <p className="lg:text-lg">{chunks}</p>,
                })}
              />
            </div>

            <div className="relative h-[350px] lg:h-[630px] 2xl:h-[560px]">
              <Image
                src={second}
                alt={t("section2.second.alt")}
                quality={100}
                fill
                className="object-cover object-left"
              />
            </div>
          </div>

          {/* third */}
          <div className="max-lg:px-5 max-lg:flex max-lg:flex-col-reverse max-lg:gap-8 lg:grid lg:grid-cols-2">
            <div className="relative h-[350px] lg:h-[630px] 2xl:h-[560px]">
              <Image
                src={environment}
                alt={t("section2.third.alt")}
                quality={75}
                fill
                className="object-cover object-center"
              />
            </div>
            <div className="lg:px-10 xl:px-24 space-y-8 lg:space-y-20 my-auto">
              <FromTopTitles
                titleH2={t("section2.third.h2")}
                titleH3={t("section2.third.h3")}
                h3Classes="text-black"
              />

              <PAnimate
                content={t.rich("section2.third.content", {
                  p: (chunks) => <p className="lg:text-lg">{chunks}</p>,
                })}
              />
            </div>
          </div>

          {/* fourth */}
          <div className="max-lg:px-5 lg:grid lg:grid-cols-2 max-lg:space-y-8">
            <div className="lg:px-10 xl:px-24 space-y-8 lg:space-y-20 my-auto">
              <Image
                src={rhoneAlpes}
                alt={t("section2.fourth.alt")}
                quality={75}
                className="max-lg:w-[60%] max-lg:mx-auto"
              />

              <PAnimate
                content={t.rich("section2.third.content", {
                  p: (chunks) => <p className="lg:text-lg">{chunks}</p>,
                })}
              />
            </div>
            <div className="relative h-[350px] lg:h-[630px] 2xl:h-[560px]">
              <Image
                src={fourth}
                alt={t("section2.fourth.alt")}
                quality={100}
                fill
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
