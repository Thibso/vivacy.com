"use client";

import img11 from "@/app/img/history/bi-soft-vivacy.jpg";
import img5 from "@/app/img/history/desirial-kartilage-vivacy.jpg";
import img13 from "@/app/img/history/monsieur-skin-care.jpg";
import img4 from "@/app/img/history/stylage-hydromax.jpg";
import img3 from "@/app/img/history/stylage-lidocaine.jpg";
import img14 from "@/app/img/history/stylage-lips-plus.jpg";
import img2 from "@/app/img/history/stylage-products.jpg";
import img6 from "@/app/img/history/stylage-xxl.jpg";
import img10 from "@/app/img/history/vivacy-academy.jpg";
import img8 from "@/app/img/history/vivacy-beauty-dermo-cosmetics.jpg";
import img15 from "@/app/img/history/vivacy-benelux.jpg";
import img9 from "@/app/img/history/vivacy-geneva.jpg";
import img17 from "@/app/img/history/vivacy-italia-canada.jpg";
import img12 from "@/app/img/history/vivacy-moscow-london.jpg";
import img16 from "@/app/img/history/vivacy-spain.jpg";
import img1 from "@/app/img/vivacy-laboratories-paris-acid-hyaluronic.jpg";

import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
} from "framer-motion";
import { ArrowBigDownDash } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import FromTopTitles from "../titles/FromTopTitles";

type Props = {
  h2: string;
  h3: string;
};

export default function HistorySteps(props: Props) {
  // STEPS
  const steps = Array.from({ length: 17 }, (_, i) => i + 1);
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
    "2024",
    "2025",
  ];
  const achievements = [
    "Creation of the Laboratoires VIVACY",
    "First CE marking of STYLAGE® products",
    "First CE marking of STYLAGE® with Lidocaine products",
    "Launch of STYLAGE® HydroMax",
    "CE marking of DESIRIAL® & KARTILAGE® ranges",
    "Launch of STYLAGE® XXL",
    "Opening of the new production site in Archamps",
    "Launch of Dermo-cosmetics range",
    "Opening of a subsidiary in Geneva",
    "Launch of My VIVACY and VIVACY ACADEMY",
    "Launch of a new-generation injection delivery system, Bi-SOFT® Injection Technology",
    "Opening of London and Moscow subsidiaries",
    "Launch of DESIRIAL® Paris Perfumes and update of dermo-cosmetics range",
    "Launch of STYLAGE® Lips Plus and dermo-cosmetic range for men, Monsieur Skin Care®",
    "Opening of Italia and Canada subsidiaries",
    "Opening of Benelux subsidiary",
    "Opening of Spain subsidiary",
  ];
  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img1,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img17,
    img15,
    img16,
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

  const [sectionHeight, setSectionHeight] = useState(0);
  const [refToTop, setRefToTop] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const { height } = ref.current.getBoundingClientRect();
      const toTop = ref.current.offsetTop;
      setSectionHeight(height);
      setRefToTop(toTop);
    }
  }, []);

  const stepHeight = (sectionHeight * 0.9) / steps.length;

  const scrollTo = (step: number) => {
    const start = refToTop + stepHeight * 0.05;
    const calc = start + step * stepHeight;
    window.scrollTo({ top: calc, behavior: "smooth" });
  };

  const Pass = () => {
    window.scrollTo({ top: refToTop + sectionHeight, behavior: "smooth" });
  };

  // const translateXProgress = useTransform(scroll, [0, 1], ["0", "-50%"]);

  return (
    <section
      style={{ height: 40 * steps.length - 1 + "vh" }}
      className="relative max-md:hidden"
      ref={ref}
    >
      <div className="myContainer sticky top-[50px] lg:-top-[75px]">
        <FromTopTitles
          titleH2={props.h2}
          titleH3={props.h3}
          h3Classes="text-black"
        />

        <div className="mt-8 lg:mt-16 relative h-[40vh] max-lg:grid lg:h-[550px] w-[90vw] lg:w-[65vw] mx-auto overflow-hidden z-[1]">
          <motion.ul
            style={{ x: "-" + stepValue * imagePosition + "%" }}
            className="flex absolute opacity-35 transition-all duration-1000 -z-[1] h-full"
          >
            {images.map((img, index) => {
              return (
                <li
                  key={"image_" + index}
                  className="h-full w-[90vw] lg:w-[65vw]"
                >
                  <Image
                    src={img}
                    alt=""
                    quality={75}
                    className="size-full object-cover"
                  />
                </li>
              );
            })}
          </motion.ul>

          <div className="z-10 my-auto lg:mt-[5%]">
            <AnimatePresence>
              <p className="text-[12vw] font-bold text-blue text-center">
                {years[stepValue]}
              </p>
            </AnimatePresence>

            <p className="text-blue text-center font-bold uppercase text-base lg:text-xl">
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
                onClick={() => scrollTo(step - 1)}
                style={{ left: position + "%" }}
                className={`absolute z-[11] size-3 lg:size-4 cursor-pointer ${
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

        <div className="w-full grid">
          <a href="#skip" className="mx-auto mt-8">
            <span className="text-base">Click to skip</span>
            <ArrowBigDownDash height={20} color="#000f9f" className="mx-auto" />
          </a>
        </div>
      </div>
    </section>
  );
}
