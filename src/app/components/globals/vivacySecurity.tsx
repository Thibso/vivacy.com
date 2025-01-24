"use client";

import apple from "@/app/img/apple-store.jpg";
import google from "@/app/img/google-store.jpg";
import bgSection from "@/app/img/vivacy-laboratoire-esthetique-france.jpg";
import logo from "@/app/img/vivacy-security-logo.png";
import phoneMockup from "@/app/img/vivacy-security.png";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";
import FromTopTitles from "../titles/FromTopTitles";

export default function VivacySecurity() {
  const t = useTranslations("Global.vivacySecurity");

  const isMobileOrTablet = useMediaQuery({ query: "(max-width: 1024px)" });

  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0.35 .9", "1 1"],
  });

  const scroll = useSpring(scrollYProgress, {
    stiffness: 250,
    damping: 25,
  });

  const scaleProgress = useTransform(scroll, [0.1, 1], [1.25, 1]);
  const xProgressMockup = useTransform(
    scroll,
    [0.1, 0.65, 1],
    isMobileOrTablet ? ["0%", "0%", "0%"] : ["-60%", "0%", "0%"]
  );
  const xProgressText = useTransform(
    scroll,
    [0.35, 0.95],
    isMobileOrTablet ? ["0%", "0%"] : ["20%", "0%"]
  );
  const opacityProgressText = useTransform(
    scroll,
    [0.35, 0.95],
    isMobileOrTablet ? ["100%", "100%"] : ["0%", "100%"]
  );

  return (
    <section ref={ref} className="relative z-[1] lg:min-h-[150vh]">
      <Image
        src={bgSection}
        alt="texture"
        quality={100}
        fill
        style={{
          objectFit: "cover",
          objectPosition: "50% 50%",
          zIndex: "-1",
          position: "absolute",
        }}
      />
      <div className="myContainer space-y-8 lg:space-y-20 sticky top-0">
        <FromTopTitles
          titleH2={t("h2")}
          titleH3={t("h3")}
          h3Classes="text-black"
        />

        <div className="max-lg:space-y-16 lg:grid lg:grid-cols-2 lg:gap-32 lg:items-center">
          <motion.div
            style={{
              opacity: opacityProgressText,
              x: xProgressText,
            }}
            className="space-y-8 lg:space-y-16 "
          >
            <Image
              src={logo}
              alt={t("alts.logo")}
              quality={75}
              style={{
                objectFit: "contain",
                margin: "auto",
              }}
              className="max-h-[64px] lg:max-h-[105px]"
            />
            <p className="text-center lg:text-lg">{t("content")}</p>
            <div className="flex gap-4 justify-center">
              <Link
                href="https://apps.apple.com/fr/app/my-vivacy/id1206429694"
                target="_blank"
                title={t("titles.appleStore")}
              >
                <Image
                  src={apple}
                  alt={t("alts.appleStore")}
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
                title={t("titles.googlePlay")}
              >
                <Image
                  src={google}
                  alt={t("alts.googlePlay")}
                  quality={75}
                  style={{
                    height: "40px",
                    objectFit: "contain",
                  }}
                />
              </Link>
            </div>
          </motion.div>
          <motion.div
            style={{
              scale: scaleProgress,
              x: xProgressMockup,
            }}
            className="max-lg:origin-top"
          >
            <Image
              src={phoneMockup}
              alt={t("alts.mockup")}
              quality={75}
              style={{
                objectFit: "contain",
              }}
              className="max-lg:w-[60%] max-lg:m-auto lg:max-h-[512px]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
