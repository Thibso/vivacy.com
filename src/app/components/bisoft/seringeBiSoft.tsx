"use client";

import seringe from "@/app/img/bisoft/seringe-bi-soft.png";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { ReactNode, useRef } from "react";

type Contents = {
  title: string;
  content: string[] | ReactNode[];
};

type Props = {
  h2: string;
  h3: string | ReactNode;
  first: Contents;
  second: Contents;
  third: Contents;
  fourth: Contents;
  fifth: Contents;
};

export default function SeringeBiSoft(props: Props) {
  const t = useTranslations("BiSoft");

  const textRight = [props.first, props.second, props.third, props.fourth];

  // SCROLL SETTINGS
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0.45 1", "1 1"],
  });
  const scroll = useSpring(scrollYProgress, {
    stiffness: 250,
    damping: 30,
  });

  // STEPS
  const steps = [0.1, 0.25, 0.4, 0.55, 0.7];

  // APPLICATION

  // FIRST
  const widthFirst = useTransform(
    scroll,
    [0, steps[0], 1],
    ["0%", "100%", "100%"]
  );
  const heightSectionFirst = useTransform(
    scroll,
    [0, steps[0], 1],
    ["111%", "0%", "0%"]
  );

  // SECOND
  const heightSecond = useTransform(
    scroll,
    [steps[0], steps[0] + steps[0] / 2, 1],
    ["0%", "100%", "100%"]
  );
  const widthSecond = useTransform(
    scroll,
    [steps[0] + steps[0] / 2, steps[1], 1],
    ["0%", "100%", "100%"]
  );
  const heightSectionSecond = useTransform(
    scroll,
    [steps[0] + 0.05, steps[1], 1],
    ["111%", "0%", "0%"]
  );

  // THRID
  const widthThird = useTransform(
    scroll,
    [steps[1], steps[1] + steps[0] / 3, 1],
    ["0%", "50%", "50%"]
  );
  const heightThird = useTransform(
    scroll,
    [steps[1] + steps[0] / 3, steps[1] + 2 * (steps[0] / 3), 1],
    ["0%", "100%", "100%"]
  );
  const widthThirdBis = useTransform(
    scroll,
    [steps[1] + 2 * (steps[0] / 3), steps[3], 1],
    ["0%", "43%", "43%"]
  );

  const heightSectionThird = useTransform(
    scroll,
    [steps[1] + 0.05, steps[2], 1],
    ["111%", "0%", "0%"]
  );

  // FOURTH
  const widthFourth = useTransform(
    scroll,
    [steps[1] + 2 * (steps[0] / 3), steps[3], 1],
    ["0%", "100%", "100%"]
  );

  // FIFTH
  const widthFifth = useTransform(
    scroll,
    [steps[3], steps[3] + steps[0] / 2, 1],
    ["0%", "100%", "100%"]
  );

  const heightFifth = useTransform(
    scroll,
    [steps[3] + steps[0] / 2, steps[4], 1],
    ["0%", "100%", "100%"]
  );

  const heightSectionFourth = useTransform(
    scroll,
    [steps[2] + 0.05, steps[3], 1],
    ["111%", "0%", "0%"]
  );

  const sectionsHeight = [
    heightSectionFirst,
    heightSectionSecond,
    heightSectionThird,
    heightSectionFourth,
  ];

  return (
    <section ref={ref} className="relative lg:h-[250vh]">
      <div className="myContainer lg:sticky lg:top-[0px]">
        <div className="titles-container text-center ">
          <motion.h2
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            transition={{
              ease: "circOut",
              duration: 0.5,
            }}
            viewport={{
              amount: "all",
              once: true,
            }}
            className="h2-perso"
          >
            {props.h2}
          </motion.h2>
          <motion.h3
            initial={{
              opacity: 0,
              y: -45,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              ease: "circOut",
              duration: 0.5,
            }}
            viewport={{
              amount: "all",
              once: true,
            }}
            className="h3-perso text-center normal-case"
          >
            {props.h3}
          </motion.h3>
        </div>

        <div className="lg:grid lg:grid-cols-12">
          {/* IMAGE */}
          <div className="max-lg:hidden absolute lg:top-[5px] xl:top-[40px] 2xl:top-[50px] lg:left-0 2xl:left-24 lg:h-[900px] xl:h-[900px] 2xl:h-[900px]">
            <Image
              src={seringe}
              alt={t("seringe.alt")}
              quality={75}
              className="h-full object-contain"
            />
            {/* 1ST */}
            <span className="max-lg:hidden absolute lg:top-[248px] lg:left-[232px] lg:w-[240px] xl:top-[258px] xl:w-[335px] 2xl:w-[365px] 2xl:top-[248px] h-2 z-10 flex items-center">
              <span className="block bg-blue size-3 rounded-full"></span>
              <motion.span
                style={{ width: widthFirst }}
                className="origin-left block border-blue border-t-2 border-dashed w-full"
              ></motion.span>
            </span>

            {/* 2ND */}
            <span className="max-lg:hidden absolute lg:top-[387px] lg:left-[315px] lg:w-[157px] xl:top-[397px] 2xl:top-[387px] xl:left-[315px] xl:w-[253px] 2xl:w-[280px] lg:h-[135px] xl:h-[120px] 2xl:h-[130px] z-10 flex items-end">
              <span className="block bg-blue size-3 rounded-full -mr-[7px]"></span>
              <motion.span
                style={{ height: heightSecond }}
                className="block border-blue border-l-2 border-dashed h-full"
              ></motion.span>
              <motion.span
                style={{ width: widthSecond }}
                className="block border-blue border-t-2 border-dashed w-full self-start"
              ></motion.span>
            </span>

            {/* 2ND - BIS */}
            <span className="max-lg:hidden absolute lg:top-[387px] xl:top-[398px] 2xl:top-[388px] lg:left-[288px] lg:w-[140px] xl:w-[110px] lg:h-[435px] xl:h-[420px] 2xl:h-[430px] z-10 flex items-end">
              <span className="block bg-blue size-3 rounded-full -mb-[5px]"></span>
              <motion.span
                style={{ width: heightSecond }}
                className="block border-blue border-t-2 border-dashed w-full"
              ></motion.span>
              <motion.span
                style={{ height: widthSecond }}
                className="block border-blue border-l-2 border-dashed h-full"
              ></motion.span>
            </span>

            {/* 3RD */}
            <span className="max-lg:hidden absolute lg:top-[550px] xl:top-[562px] 2xl:top-[552px] lg:left-[235px] xl:left-[235px] 2xl:w-[375px] xl:w-[344px] lg:w-[240px] lg:h-[318px] xl:h-[305px] 2xl:h-[314px] z-10 flex items-end">
              <span className="block bg-blue size-3 rounded-full -mb-[5px]"></span>
              <motion.span
                style={{ width: widthThird }}
                className="block border-blue border-t-2 border-dashed"
              ></motion.span>
              <motion.span
                style={{ height: heightThird }}
                className="block border-blue border-l-2 border-dashed h-full"
              ></motion.span>
              <motion.span
                style={{ width: widthThirdBis }}
                className="block border-blue border-t-2 border-dashed self-start"
              ></motion.span>
            </span>

            {/* 3RD - BIS */}
            <span className="max-lg:hidden absolute lg:top-[742px] xl:top-[753px] 2xl:top-[743px] lg:left-[368px] xl:left-[420px] 2xl:left-[435px] lg:w-[104px] xl:w-[149px] 2xl:w-[161px] h-2 z-10">
              <motion.span
                style={{ width: widthFourth }}
                className="block border-blue border-t-2 border-dashed"
              ></motion.span>
            </span>

            {/* 4TH */}
            <span className="max-lg:hidden absolute lg:top-[760px] lg:left-[90px] 2xl:left-[85px] lg:w-[155px] 2xl:w-[160px] lg:h-[155px] 2xl:h-[170px] z-10 flex">
              <span className="absolute block bg-blue size-3 rounded-full -mt-[5px] right-0"></span>
              <motion.span
                style={{ width: widthFifth }}
                className="absolute block border-blue border-t-2 border-dashed w-full right-0"
              ></motion.span>
              <motion.span
                style={{ height: heightFifth }}
                className="block border-blue border-l-2 border-dashed h-full origin-bottom"
              ></motion.span>
            </span>
          </div>

          {/* TEXT */}
          <div className="lg:col-span-7 lg:col-start-6 lg:w-[600px] m-auto ml-0 pt-14 lg:pt-[96px] space-y-8 lg:space-y-4">
            {textRight.map((texts, index) => {
              return (
                <div key={"texts-" + index} className="space-y-2 relative">
                  <h4 className="uppercase text-lg text-blue">{texts.title}</h4>
                  <ul className=" list-disc ml-8 lg:text-lg">
                    {texts.content.map((li, i) => {
                      return <li key={"texts-ul-" + i}>{li}</li>;
                    })}
                  </ul>

                  {/* MASK */}
                  <motion.div
                    style={{ height: sectionsHeight[index] }}
                    className="max-lg:hidden w-full h-[111%] absolute left-0 bottom-0 bg-gradient-to-b from-transparent to-white from-0% to-10%"
                  ></motion.div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="lg:mt-32 xl:mt-36 2xl:mt-28 max-lg:mt-8 space-y-2 lg:space-y-14">
          <h4 className="uppercase text-lg text-blue">{props.fifth.title}</h4>
          <div className="space-y-4">
            {props.fifth.content.map((p, i) => {
              return (
                <p className="lg:text-lg" key={"texts-p-" + i}>
                  {p}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
