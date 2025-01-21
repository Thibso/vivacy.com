"use client";

import {
  motion,
  useInView,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useTranslations } from "next-intl";
import { useEffect, useRef } from "react";
import { useMediaQuery } from "react-responsive";
import PAnimate from "../globals/pAnimate";
import FromTopTitles from "../titles/FromTopTitles";

export default function VideoToLeft() {
  const t = useTranslations("Academy");

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
    [0.4, 0.75, 1],
    isMobileOrTablet ? ["0%", "0%", "0%"] : ["60%", "0%", "0%"]
  );
  const xProgressText = useTransform(
    scroll,
    [0.4, 0.75, 1],
    isMobileOrTablet ? ["0%", "0%", "0%"] : ["-30%", "0%", "0%"]
  );

  const opacityProgress = useTransform(
    scroll,
    [0.6, 0.75, 1],
    isMobileOrTablet ? ["100%", "100%", "100%"] : ["0%", "100%", "100%"]
  );

  const videoRef = useRef<HTMLVideoElement>(null);

  const isInView = useInView(videoRef, { once: false, amount: "some" });
  const isOutView = useInView(videoRef, { once: false, amount: "some" });

  useEffect(() => {
    if (isInView && videoRef.current) {
      videoRef.current.play();
      console.log("test");
    } else if (!isOutView && videoRef.current) {
      videoRef.current.pause();
    }
  }, [isInView, isOutView]);

  return (
    <div ref={ref} className="lg:min-h-[150vh] relative">
      <div className="myContainer max-lg:flex max-lg:flex-col-reverse max-lg:gap-y-8 lg:grid lg:grid-cols-2 lg:items-center lg:gap-x-20 lg:sticky lg:top-[50px]">
        <motion.div
          style={{
            scale: scaleProgress,
            x: xProgressVideo,
          }}
          className="relative z-[2] origin-top"
        >
          <video
            ref={videoRef}
            className="w-[80%] md:w-[60%] lg:w-full 2xl:w-[80%] mx-auto rounded-xl"
            playsInline
            loop
            muted
          >
            <source src="/videos/vivacy-academy.mp4#t=1.5" type="video/mp4" />
          </video>
        </motion.div>

        <motion.div
          style={{
            opacity: opacityProgress,
            x: xProgressText,
          }}
          className="space-y-8 lg:space-y-20"
        >
          <FromTopTitles
            titleH2={t("section3.h2")}
            titleH3={t("section3.h3")}
          />

          <PAnimate
            content={t.rich("section3.content", {
              p: (chunks) => <p className="lg:text-lg">{chunks}</p>,
            })}
          />
        </motion.div>
      </div>
    </div>
  );
}
