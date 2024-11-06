import apple from "@/app/img/apple-store.jpg";
import google from "@/app/img/google-store.jpg";
import bgSection from "@/app/img/vivacy-laboratoire-esthetique-france.jpg";
import logo from "@/app/img/vivacy-security-logo.png";
import phoneMockup from "@/app/img/vivacy-security.png";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import FromTopTitles from "../titles/FromTopTitles";

export default function VivacySecurity() {
  const t = useTranslations("Global.vivacySecurity");
  return (
    <section className="relative z-[1]">
      <Image
        src={bgSection}
        alt=""
        quality={100}
        fill
        style={{
          objectFit: "cover",
          objectPosition: "50% 50%",
          zIndex: "-1",
          position: "absolute",
        }}
      />
      <div className="myContainer space-y-8 lg:space-y-28">
        <FromTopTitles
          titleH2={t("h2")}
          titleH3={t("h3")}
          h3Classes="text-black"
        />

        <div className="max-lg:space-y-16 lg:grid lg:grid-cols-2 lg:gap-32 lg:items-center">
          <div className="space-y-8 lg:space-y-16">
            <Image
              src={logo}
              alt=""
              quality={75}
              style={{
                objectFit: "contain",
                margin: "auto",
              }}
              className="max-h-[64px] lg:max-h-[105px]"
            />
            <p className="text-center">{t("content")}</p>
            <div className="flex gap-4 justify-center">
              <Link
                href="https://apps.apple.com/fr/app/my-vivacy/id1206429694"
                target="_blank"
              >
                <Image
                  src={apple}
                  alt=""
                  quality={75}
                  style={{
                    height: "40px",
                    objectFit: "contain",
                  }}
                />
              </Link>

              <Link
                href="https://play.google.com/store/apps/details?id=eu.vivacy.vivacysecurity&hl=fr"
                target="_blank"
              >
                <Image
                  src={google}
                  alt=""
                  quality={75}
                  style={{
                    height: "40px",
                    objectFit: "contain",
                  }}
                />
              </Link>
            </div>
          </div>
          <div>
            <Image
              src={phoneMockup}
              alt=""
              quality={75}
              style={{
                objectFit: "contain",
              }}
              className="max-lg:w-[60%] max-lg:m-auto lg:max-h-[512px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
