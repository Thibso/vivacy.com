"use client";

import logo from "@/app/img/vivacy-laboratories-hyaluronic-acid-france.png";
import {
  motion,
  useInView,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import PAnimate from "../globals/pAnimate";

type Props = {
  corporateValues: [StaticImageData, string, string][];
  valuesAlt: string[];
};

export default function IconsEffect(props: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });

  const isInView = useInView(ref, { amount: "all" });

  const [effect, setEffect] = useState(false);

  useEffect(() => {
    if (isInView) {
      setEffect(true);
    }
  }, [isInView]);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [".2 1", "1 1"],
  });

  const scroll = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 45,
    restDelta: 0.01,
  });

  const topLogo = useTransform(scroll, [0, 0.5], ["0px", "200px"]);
  const loaderHeight = useTransform(scroll, [0, 1], ["0%", "100%"]);

  return (
    <section className="lg:min-h-[150vh] relative">
      <div
        ref={ref}
        className="max-lg:space-y-12 lg:grid lg:grid-cols-2 lg:gap-x-20 lg:gap-y-14 xl:w-[80%] lg:mx-auto mt-8 lg:mt-20 max-lg:relative lg:sticky lg:top-[105px]"
      >
        <motion.div
          initial={{ opacity: 1 }}
          style={{
            top: topLogo,
          }}
          animate={effect ? { opacity: 0, zIndex: -1 } : {}}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="max-lg:hidden absolute left-1/2 -translate-x-[30%]"
        >
          <Image
            src={logo}
            alt="Vivacy logo"
            quality={75}
            width={300}
            className="z-[1] opacity-10"
          />
          <motion.div
            style={{
              height: loaderHeight,
            }}
            className="bg-white absolute w-full top-0 z-[2] overflow-hidden"
          >
            <Image src={logo} alt="Vivacy logo" quality={75} width={300} />
          </motion.div>
        </motion.div>
        <div className="space-y-4">
          <motion.div
            initial={{
              opacity: isMobile ? 1 : 0,
              translateX: isMobile ? 0 : "50%",
              translateY: isMobile ? 0 : "180px",
            }}
            animate={
              effect ? { opacity: 1, translateX: "0", translateY: "0" } : {}
            }
            transition={{ duration: 0.5 }}
          >
            <Image
              src={props.corporateValues[0][0]}
              alt={props.valuesAlt[0]}
              quality={75}
              className="mx-auto"
            />
          </motion.div>
          <motion.div
            layout
            initial={{
              opacity: isMobile ? 1 : 0,
            }}
            animate={effect ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-center uppercase text-blue">
              {props.corporateValues[0][1]}
            </h4>
            <PAnimate
              content={
                <p className="text-center lg:text-lg">
                  {props.corporateValues[0][2]}
                </p>
              }
            />
          </motion.div>
        </div>
        <div className="space-y-4">
          <motion.div
            initial={{
              opacity: isMobile ? 1 : 0,
              translateX: isMobile ? 0 : "-50%",
              translateY: isMobile ? 0 : "180px",
            }}
            animate={
              effect ? { opacity: 1, translateX: "0", translateY: "0" } : {}
            }
            transition={{ duration: 0.5 }}
          >
            <Image
              src={props.corporateValues[1][0]}
              alt={props.valuesAlt[1]}
              quality={75}
              className="mx-auto"
            />
          </motion.div>

          <motion.div
            layout
            initial={{
              opacity: isMobile ? 1 : 0,
            }}
            animate={effect ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-center uppercase text-blue">
              {props.corporateValues[1][1]}
            </h4>
            <PAnimate
              content={
                <p className="text-center lg:text-lg ">
                  {props.corporateValues[1][2]}
                </p>
              }
            />
          </motion.div>
        </div>
        <div className="space-y-4">
          <motion.div
            initial={{
              opacity: isMobile ? 1 : 0,
              translateX: isMobile ? 0 : "50%",
              translateY: isMobile ? 0 : "-180px",
            }}
            animate={
              effect ? { opacity: 1, translateX: "0", translateY: "0" } : {}
            }
            transition={{ duration: 0.5 }}
          >
            <Image
              src={props.corporateValues[2][0]}
              alt={props.valuesAlt[2]}
              quality={75}
              className="mx-auto"
            />
          </motion.div>

          <motion.div
            layout
            initial={{
              opacity: isMobile ? 1 : 0,
            }}
            animate={effect ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-center uppercase text-blue">
              {props.corporateValues[2][1]}
            </h4>
            <PAnimate
              content={
                <p className="text-center lg:text-lg ">
                  {props.corporateValues[2][2]}
                </p>
              }
            />
          </motion.div>
        </div>
        <div className="space-y-4">
          <motion.div
            initial={{
              opacity: isMobile ? 1 : 0,
              translateX: isMobile ? 0 : "-50%",
              translateY: isMobile ? 0 : "-180px",
            }}
            animate={
              effect ? { opacity: 1, translateX: "0", translateY: "0" } : {}
            }
            transition={{ duration: 0.5 }}
          >
            <Image
              src={props.corporateValues[3][0]}
              alt={props.valuesAlt[3]}
              quality={75}
              className="mx-auto"
            />
          </motion.div>

          <motion.div
            layout
            initial={{
              opacity: isMobile ? 1 : 0,
            }}
            animate={effect ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-center uppercase text-blue">
              {props.corporateValues[3][1]}
            </h4>
            <PAnimate
              content={
                <p className="text-center lg:text-lg ">
                  {props.corporateValues[3][2]}
                </p>
              }
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
