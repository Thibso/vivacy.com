"use client";

import img2 from "@/app/img/vivacy-laboratoires-experience-esthetique.jpg";
import img1 from "@/app/img/vivacy-laboratories-paris-acid-hyaluronic.jpg";

import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
} from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";
import FromTopTitles from "../titles/FromTopTitles";

type Props = {
  h2: string;
  h3: string;
};

export default function HistorySteps(props: Props) {
  // STEPS
  const steps = Array.from({ length: 7 }, (_, i) => i + 1);
  const stepPosition = 100 / (steps.length - 1);
  const imagePosition = 100 / steps.length;

  // STEPS VALUE
  const years = ["2007", "2008", "2010", "2012", "2015", "2018", "2023"];
  const achievements = [
    "Creation of the Laboratoires VIVACY.",
    "First CE marking of STYLAGE® products.",
    "Creation of the Laboratoires VIVACY.",
    "First CE marking of STYLAGE® products.",
    "Creation of the Laboratoires VIVACY.",
    "First CE marking of STYLAGE® products.",
    "Creation of the Laboratoires VIVACY.",
  ];

  // SCROLL SETTINGS
  const ref = useRef<HTMLElement>(null);

  const [scrollValue, setScrollValue] = useState(0);
  const [stepValue, setStepValue] = useState(0);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0.15 1", "1 1"],
  });
  const scroll = useSpring(scrollYProgress, {
    stiffness: 250,
    damping: 30,
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setScrollValue(latest);

    if (latest * 100 >= stepPosition * (stepValue + 1)) {
      setStepValue((old) => old + 1);
    }

    if (latest * 100 < stepPosition * stepValue) {
      setStepValue((old) => old - 1);
    }
  });

  // const translateXProgress = useTransform(scroll, [0, 1], ["0", "-50%"]);

  return (
    <section
      style={{ height: 100 * steps.length - 1 + "vh" }}
      className="relative"
      ref={ref}
    >
      <div className="myContainer sticky -top-[75px]">
        <FromTopTitles
          titleH2={props.h2}
          titleH3={props.h3}
          h3Classes="text-black"
        />

        <div className="mt-8 lg:mt-28 relative h-[400px] lg:h-[600px] w-[80vw] lg:w-[65vw] mx-auto overflow-hidden z-[1]">
          <motion.ul
            style={{ x: "-" + stepValue * imagePosition + "%" }}
            className="flex absolute opacity-35 transition-all duration-1000 -z-[1] h-full"
          >
            <li className="h-full w-[65vw]">
              <Image
                src={img1}
                alt=""
                quality={50}
                className="size-full object-cover"
              />
            </li>
            <li className="h-full w-[65vw]">
              <Image
                src={img2}
                alt=""
                quality={50}
                className="size-full object-cover"
              />
            </li>
            <li className="h-full w-[65vw]">
              <Image
                src={img1}
                alt=""
                quality={50}
                className="size-full object-cover"
              />
            </li>
            <li className="h-full w-[65vw]">
              <Image
                src={img2}
                alt=""
                quality={50}
                className="size-full object-cover"
              />
            </li>
            <li className="h-full w-[65vw]">
              <Image
                src={img1}
                alt=""
                quality={50}
                className="size-full object-cover"
              />
            </li>
            <li className="h-full w-[65vw]">
              <Image
                src={img2}
                alt=""
                quality={50}
                className="size-full object-cover"
              />
            </li>
            <li className="h-full w-[65vw]">
              <Image
                src={img1}
                alt=""
                quality={50}
                className="size-full object-cover"
              />
            </li>
          </motion.ul>
          <div className="z-10 mt-[5%]">
            <p className="text-[12vw] font-bold text-blue text-center">
              {years[stepValue]}
            </p>
            <p className="text-blue text-center uppercase text-lg">
              {achievements[stepValue]}
            </p>
          </div>
        </div>

        <motion.div className="absolute bg-blue/20 w-[90%] h-[5px] left-1/2 -translate-x-1/2 top-[75%] rounded-2xl z-[2]">
          {steps.map((step) => {
            const position = stepPosition * (step - 1);
            return (
              <span
                key={step}
                style={{ left: position + "%" }}
                className={`absolute size-4 ${
                  scrollValue * 100 >= position
                    ? "bg-blue ring-offset-2 ring-1 ring-blue"
                    : "bg-blue/50"
                }  rounded-full top-1/2 -translate-y-1/2 -translate-x-1/2 z-10`}
              ></span>
            );
          })}
          <motion.span
            style={{ scaleX: scroll }}
            className="absolute bg-blue h-full origin-left z-10 w-full rounded-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
