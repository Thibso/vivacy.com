"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useTranslations } from "next-intl";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";
import WhiteButton from "../buttons/WhiteButton";
import FromTopTitles from "../titles/FromTopTitles";
import IncrementNumber from "./testNumbers";

export default function KeyNumbers() {
  const h = useTranslations("HomePage");

  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 1"],
  });

  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const scale = useSpring(scrollYProgress, {
    stiffness: 150,
    damping: 30,
  });

  const scaleProgress = useTransform(
    scale,
    [0, 0.5, 1],
    isMobile ? [0.8, 1, 1] : [0.6, 1, 1]
  );

  return (
    <motion.section
      ref={ref}
      style={{ scale: scaleProgress }}
      className="bg-blue lg:max-w-[2550px] lg:m-auto border-white/50 border-b-[1px]"
    >
      <div className="myContainer relative space-y-14 lg:space-y-22 text-white lg:flex lg:flex-col lg:items-center ">
        <div className="titles-container w-full">
          <FromTopTitles
            titleH2={h("section3.h2")}
            titleH3={h("section3.h3")}
            h3Classes="text-white"
            h2Classes="text-[#e1e1e1]"
          />
        </div>

        <div className="max-lg:space-y-14 lg:grid lg:grid-cols-4 lg:gap-20">
          <div className="text-center">
            <p>
              <IncrementNumber number={85} speed={27.5} />
            </p>
            <p className="mt-4 lg:mt-10 text-lg lg:text-xl">
              {h("section3.keyNumbers.1")}
            </p>
          </div>

          <div className="text-center">
            <p>
              <IncrementNumber number={15} />
            </p>
            <p className="mt-4 lg:mt-10 text-lg lg:text-xl">
              {h("section3.keyNumbers.2")}
            </p>
          </div>

          <div className="text-center">
            <p>
              <IncrementNumber number={1} />
              <span className="font-bold text-3xl -top-[1em] relative">st</span>
            </p>
            <p className="mt-4 lg:mt-10 text-lg lg:text-xl">
              {h("section3.keyNumbers.3")}
            </p>
          </div>

          <div className="text-center">
            <p>
              <IncrementNumber number={1} />
              <span className="font-bold text-3xl -top-[1em] relative">st</span>
            </p>
            <p className="mt-4 lg:mt-10 text-lg lg:text-xl">
              {h("section3.keyNumbers.4")}
            </p>
          </div>
        </div>

        <div className="m-auto lg:ml-0 lg:absolute lg:left-8 lg:bottom-8">
          <p className="text-sm max-lg:text-center">
            {h("section3.annotation")}
          </p>
        </div>

        <div className="max-lg:flex max-lg:justify-center">
          <WhiteButton
            content={h("section3.button")}
            path={h("section3.buttonPath")}
          />
        </div>
      </div>
    </motion.section>
  );
}
