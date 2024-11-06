"use client";

import desirial from "@/app/img/logos/desirial-by-vivacy.png";
import stylage from "@/app/img/logos/stylage-by-vivacy.png";
import desirialIllustration from "@/app/img/products/desirial-intimate-medicine.png";
import stylageIllustration from "@/app/img/products/stylage-injectable-gamme-lips-vivacy.png";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Circle } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import BlueButton from "../buttons/BlueButton";

export default function ProductsCarousel() {
  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });

  const [state, setState] = useState(0);
  const titles = ["Médecine esthétique", "Médecine intime"];
  const texts = [
    "Explore our range of Stylage® dermal fillers, formulated with hyaluronic acid and specifically designed for aesthetic and anti-aging treatments. These products provide a comprehensive and safe solution to restore youthfulness and vitality to the skin",
    "Discover our products: Desirial® and Desirial® Plus. Designed with an exclusive formulation, they offer various properties to meet specific needs in intimate comfort.",
  ];
  const logos = [stylage, desirial];
  const packages = [stylageIllustration, desirialIllustration];
  const products = 2;

  const constraintsRef = useRef(null);

  function onPanEnd(event: any, info: any) {
    if (info.delta.x > 0 && state > 0) {
      setState(state - 1);
    }
    if (info.delta.x < 0 && state < products - 1) {
      setState(state + 1);
    }
  }

  return (
    <div>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={"div"}
          ref={constraintsRef}
          drag="x"
          dragConstraints={constraintsRef}
          className="relative lg:grid lg:grid-cols-2 lg:items-center cursor-pointer"
        >
          <motion.div
            key={"dragzone"}
            onPanEnd={onPanEnd}
            className="absolute bg-black/0 w-full h-[85%] top-0 left-0 z-[15]"
          ></motion.div>
          <motion.div
            key={"content"}
            className="space-y-8 lg:space-y-20 max-lg:flex max-lg:flex-col max-lg:items-center"
          >
            <div className="space-y-4">
              <motion.div
                key={"img-" + state}
                initial={
                  isMobile ? { y: -20, opacity: 0 } : { x: -200, opacity: 0 }
                }
                animate={isMobile ? { y: 0, opacity: 1 } : { x: 0, opacity: 1 }}
                exit={
                  isMobile ? { y: -20, opacity: 0 } : { x: -200, opacity: 0 }
                }
                transition={{ delay: 0.1, duration: 0.3 }}
              >
                <Image
                  src={logos[state]}
                  alt=""
                  className="max-lg:mx-auto max-lg:h-[50px] object-contain"
                />
              </motion.div>
              <motion.h4
                key={"title-" + state}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.1, duration: 0.3 }}
                className="h2-perso"
              >
                {titles[state]}
              </motion.h4>
            </div>
            <motion.p
              key={"text-" + state}
              initial={isMobile ? { opacity: 0 } : { x: -200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={isMobile ? { opacity: 0 } : { x: -200, opacity: 0 }}
              transition={{ delay: 0.1, duration: 0.3 }}
            >
              {texts[state]}
            </motion.p>
            <BlueButton content="Learn More" path="" />
          </motion.div>
          <motion.div
            key={"product-" + state}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 200, opacity: 0 }}
            transition={{ delay: 0.1, duration: 0.3 }}
            className="max-lg:hidden absolute -top-[50%] right-[5%] h-[700px] z-[5] flex w-[40%]"
          >
            <Image
              src={packages[state]}
              alt=""
              className="object-contain m-auto"
            />
          </motion.div>
        </motion.div>
      </AnimatePresence>

      <div className="relative flex gap-8 mx-auto w-fit mt-14 z-[10]">
        <ChevronLeft
          onClick={() => {
            if (state > 0) setState(state - 1);
          }}
          className={`${
            state === 0
              ? "cursor-not-allowed stroke-blue/20"
              : "cursor-pointer stroke-blue"
          }`}
        />
        <div className="flex gap-2 items-center">
          {Array.from({ length: products }, (_, index) => index).map(
            (step, index) => {
              return (
                <Circle
                  key={"circle-" + index}
                  onClick={() => setState(index)}
                  className={`${
                    state === index ? "fill-blue" : ""
                  } size-3 stroke-blue cursor-pointer`}
                />
              );
            }
          )}
        </div>
        <ChevronRight
          onClick={() => {
            if (state < products - 1) setState(state + 1);
          }}
          className={`${
            state === products - 1
              ? "cursor-not-allowed stroke-blue/20"
              : "cursor-pointer stroke-blue"
          }`}
        />
      </div>
    </div>
  );
}
