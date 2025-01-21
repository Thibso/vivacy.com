"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useTranslations } from "next-intl";
import Image, { StaticImageData } from "next/image";
import { useRef } from "react";

type Props = {
  img: StaticImageData;
};

export default function ZoomImageOnScroll(props: Props) {
  const t = useTranslations("R&D");

  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 1"],
  });

  const scroll = useSpring(scrollYProgress, {
    stiffness: 250,
    damping: 25,
  });

  const widthProgress = useTransform(scroll, [0, 1], ["100%", "135%"]);
  const rotateprogress = useTransform(scroll, [0.5, 1], [0, 10]);

  return (
    <div className="max-lg:h-[350px] lg:col-span-6 relative overflow-hidden rounded-xl">
      <motion.div
        style={{
          width: widthProgress,
          height: widthProgress,
          rotate: rotateprogress,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className="absolute rounded-xl left-1/2 top-1/2"
      >
        <Image
          src={props.img}
          alt={t("section3.first.alt")}
          quality={100}
          fill
          style={{
            objectFit: "cover",
            objectPosition: "50% 50%",
            zIndex: "-1",
          }}
          className="rounded-xl origin-center"
        />
      </motion.div>
    </div>
  );
}
