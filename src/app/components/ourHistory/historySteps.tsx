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
  const steps = Array.from({ length: 16 }, (_, i) => i + 1);
  const stepPosition = 100 / (steps.length - 1);
  const imagePosition = 100 / steps.length;

  // STEPS VALUE
  const years = [
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2015",
    "2016",
    "2017",
    "2018",
    "2019",
    "2020",
    "2021",
    "2023",
    "2023",
  ];
  const achievements = [
    "Creation of the Laboratoires VIVACY.",
    "First CE marking of STYLAGE® products.",
    "First CE marking of STYLAGE® with Lidocaïne products.",
    "Launch of STYLAGE® HydroMax.",
    "CE marking of DESIRIAL® & KARTILAGE® ranges.",
    "Launch of STYLAGE® XXL.",
    "Opening of the new production site in Archamps.",
    "Launch of Dermo-cosmetics range.",
    "Opening of a subsidiary in Geneva",
    "Launch of My VIVACY and VIVACY ACADEMY",
    "Launch of a new-generation injection delivery system, Bi-SOFT® Injection Technology",
    "Opening of London and Moscow subsidiaries",
    "Launch of DESIRIAL® Paris Perfumes and update of dermo-cosmetics range",
    "Launch of STYLAGE® Lips Plus and dermo-cosmetic range for men, Monsieur Skin Care®",
    "Opening of Itlalia and Canada subsidiaries",
    "Prix ACE du meilleur fabricant",
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
      style={{ height: 70 * steps.length - 1 + "vh" }}
      className="relative"
      ref={ref}
    >
      <div className="myContainer sticky top-[50px] lg:-top-[75px]">
        <FromTopTitles
          titleH2={props.h2}
          titleH3={props.h3}
          h3Classes="text-black"
        />

        <div className="mt-8 lg:mt-28 relative h-[40vh] max-lg:grid lg:h-[600px] w-[90vw] lg:w-[65vw] mx-auto overflow-hidden z-[1]">
          <motion.ul
            style={{ x: "-" + stepValue * imagePosition + "%" }}
            className="flex absolute opacity-35 transition-all duration-1000 -z-[1] h-full"
          >
            <li className="h-full w-[90vw] lg:w-[65vw]">
              <Image
                src={img1}
                alt=""
                quality={50}
                className="size-full object-cover"
              />
            </li>
            <li className="h-full w-[90vw] lg:w-[65vw]">
              <Image
                src={img2}
                alt=""
                quality={50}
                className="size-full object-cover"
              />
            </li>
            <li className="h-full w-[90vw] lg:w-[65vw]">
              <Image
                src={img1}
                alt=""
                quality={50}
                className="size-full object-cover"
              />
            </li>
            <li className="h-full w-[90vw] lg:w-[65vw]">
              <Image
                src={img2}
                alt=""
                quality={50}
                className="size-full object-cover"
              />
            </li>
            <li className="h-full w-[90vw] lg:w-[65vw]">
              <Image
                src={img1}
                alt=""
                quality={50}
                className="size-full object-cover"
              />
            </li>
            <li className="h-full w-[90vw] lg:w-[65vw]">
              <Image
                src={img2}
                alt=""
                quality={50}
                className="size-full object-cover"
              />
            </li>
            <li className="h-full w-[90vw] lg:w-[65vw]">
              <Image
                src={img1}
                alt=""
                quality={50}
                className="size-full object-cover"
              />
            </li>
            <li className="h-full w-[90vw] lg:w-[65vw]">
              <Image
                src={img1}
                alt=""
                quality={50}
                className="size-full object-cover"
              />
            </li>
            <li className="h-full w-[90vw] lg:w-[65vw]">
              <Image
                src={img1}
                alt=""
                quality={50}
                className="size-full object-cover"
              />
            </li>
            <li className="h-full w-[90vw] lg:w-[65vw]">
              <Image
                src={img1}
                alt=""
                quality={50}
                className="size-full object-cover"
              />
            </li>
            <li className="h-full w-[90vw] lg:w-[65vw]">
              <Image
                src={img1}
                alt=""
                quality={50}
                className="size-full object-cover"
              />
            </li>
            <li className="h-full w-[90vw] lg:w-[65vw]">
              <Image
                src={img1}
                alt=""
                quality={50}
                className="size-full object-cover"
              />
            </li>
            <li className="h-full w-[90vw] lg:w-[65vw]">
              <Image
                src={img1}
                alt=""
                quality={50}
                className="size-full object-cover"
              />
            </li>
            <li className="h-full w-[90vw] lg:w-[65vw]">
              <Image
                src={img1}
                alt=""
                quality={50}
                className="size-full object-cover"
              />
            </li>
            <li className="h-full w-[90vw] lg:w-[65vw]">
              <Image
                src={img1}
                alt=""
                quality={50}
                className="size-full object-cover"
              />
            </li>
            <li className="h-full w-[90vw] lg:w-[65vw]">
              <Image
                src={img1}
                alt=""
                quality={50}
                className="size-full object-cover"
              />
            </li>
          </motion.ul>

          <div className="z-10 my-auto lg:mt-[5%]">
            <p className="text-[12vw] font-bold text-blue text-center">
              {years[stepValue]}
            </p>
            <p className="text-blue text-center uppercase text-base lg:text-lg">
              {achievements[stepValue]}
            </p>
          </div>
        </div>

        <motion.div className="absolute bg-blue/20 w-[90%] h-[5px] left-1/2 -translate-x-1/2 max-lg:bottom-8 lg:top-[75%] rounded-2xl z-[2]">
          {steps.map((step) => {
            const position = stepPosition * (step - 1);
            return (
              <span
                key={step}
                style={{ left: position + "%" }}
                className={`absolute size-3 lg:size-4 ${
                  scrollValue * 100 >= position
                    ? "bg-blue ring-offset-1 lg:ring-offset-2 ring-1 ring-blue"
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
