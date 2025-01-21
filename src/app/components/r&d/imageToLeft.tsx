"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useTranslations } from "next-intl";
import Image, { StaticImageData } from "next/image";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";
import PAnimate from "../globals/pAnimate";
import FromTopTitles from "../titles/FromTopTitles";

type Props = {
  img: StaticImageData;
};

export default function ImageToLeft(props: Props) {
  const t = useTranslations("R&D");

  const ref = useRef<HTMLDivElement>(null);

  const isMobileOrTablet = useMediaQuery({ query: "(max-width: 1024px)" });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0.35 .9", "1 1"],
  });

  const scroll = useSpring(scrollYProgress, {
    stiffness: 250,
    damping: 25,
  });

  const scaleProgress = useTransform(
    scroll,
    [0, 1],
    isMobileOrTablet ? [1.15, 1] : [1.3, 1]
  );
  const xProgressVideo = useTransform(
    scroll,
    [0.25, 1],
    isMobileOrTablet ? ["0%", "0%"] : ["60%", "0%"]
  );
  const xProgressText = useTransform(
    scroll,
    [0.6, 1],
    isMobileOrTablet ? ["0%", "0%"] : ["-10%", "0%"]
  );

  const opacityProgress = useTransform(
    scroll,
    [0.7, 1],
    isMobileOrTablet ? ["100%", "100%"] : ["0%", "100%"]
  );

  return (
    <div
      ref={ref}
      className="max-lg:space-y-16 lg:grid lg:grid-cols-12 lg:space-x-14 xl:space-x-24"
    >
      <motion.div
        style={{
          scale: scaleProgress,
          x: xProgressVideo,
        }}
        className="lg:col-span-5 relative h-[350px] lg:h-[600px] origin-top z-[2]"
      >
        <Image
          src={props.img}
          alt={t("section3.second.alt")}
          quality={100}
          fill
          style={{
            objectFit: "cover",
            objectPosition: "50% 50%",
            zIndex: "-1",
          }}
          className="rounded-xl"
        />
      </motion.div>
      <motion.div
        style={{
          x: xProgressText,
          opacity: opacityProgress,
        }}
        className="space-y-8 lg:py-8 lg:col-span-7 lg:space-y-20 lg:flex lg:flex-col"
      >
        <FromTopTitles
          titleH2={t("section4.h2")}
          titleH3={t("section4.h3")}
          h3Classes="text-black"
        />

        <PAnimate
          classes="lg:w-[70%]"
          content={t.rich("section4.content", {
            p: (chunks) => <p className="lg:text-lg">{chunks}</p>,
          })}
        />
      </motion.div>
    </div>
  );
}
