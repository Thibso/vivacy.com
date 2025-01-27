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

export default function VideoHistoryToLeft() {
  const t = useTranslations("History");

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
    isMobileOrTablet ? [1.15, 1] : [1.5, 1]
  );
  const xProgressVideo = useTransform(
    scroll,
    [0.4, 0.75, 1],
    isMobileOrTablet ? ["0%", "0%", "0%"] : ["45%", "0%", "0%"]
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

  const isInView = useInView(videoRef, { once: false, amount: "all" });
  const isOutView = useInView(videoRef, { once: false, amount: "all" });

  useEffect(() => {
    if (isInView && videoRef.current) {
      videoRef.current.play();
    } else if (!isOutView && videoRef.current) {
      videoRef.current.pause();
    }
  }, [isInView, isOutView]);

  return (
    <div ref={ref} className="lg:min-h-[100vh] relative">
      <div className="max-lg:flex max-lg:flex-col-reverse max-lg:gap-y-8 lg:grid lg:grid-cols-7 lg:items-center lg:gap-x-20 lg:sticky lg:top-[15%]">
        <motion.div
          style={{
            scale: scaleProgress,
            x: xProgressVideo,
          }}
          className="col-span-4 relative z-[2] origin-top"
        >
          <video
            ref={videoRef}
            className="size-full rounded-xl"
            playsInline
            loop
            muted
          >
            <source
              src="/videos/vivacy-presentation.mp4#t=1.5"
              type="video/mp4"
            />
          </video>
        </motion.div>

        <motion.div
          style={{
            opacity: opacityProgress,
            x: xProgressText,
          }}
          className="col-span-3 space-y-8 lg:space-y-20"
        >
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
        </motion.div>
      </div>
    </div>
  );
}
