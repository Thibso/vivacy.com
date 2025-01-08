"use client";

import desirial from "@/app/img/logos/desirial-by-vivacy.png";
import stylage from "@/app/img/logos/stylage-by-vivacy.png";
import desirialIllustration from "@/app/img/products/desirial-intimate-medicine.png";
import stylageIllustration from "@/app/img/products/stylage-injectable-gamme-lips-vivacy.png";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Circle } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import BlueButton from "../buttons/BlueButton";

export default function ProductsCarousel() {
  const t = useTranslations("HomePage");
  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });

  const [state, setState] = useState(0);
  const texts = [
    "Laboratoires VIVACY’s STYLAGE® range embodies exigence in the field of aesthetic medicine. Founded in 2007, our brand has established itself as an undisputed leader, offering a comprehensive range of aesthetic and anti-aging treatments. Beyond our diverse product offerings, STYLAGE® is committed to the education and support of aesthetic professionals worldwide.",
    "In 2011, Laboratoires VIVACY revolutionized the field of aesthetic and functional gynecology by introducing on the market the very first injectable hyaluronic acid gel for female vulvovaginal restoration. This innovation provides a solution for women suffering from vaginal discomfort, chronic irritation, or pain during intercourse. This treatment helps to restore hydration and elasticity to the vaginal tissues, offering significant relief, and improving sexual health and overall comfort.",
  ];
  const links = ["/en/stylage", "/en/desirial"];
  const logos = [stylage, desirial];
  const packages = [stylageIllustration, desirialIllustration];
  const alts = [t("products.stylage"), t("products.desirial")];
  const LogoAlts = [t("products.stylageLogo"), t("products.desirialLogo")];
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
          dragElastic={1}
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
                  alt={LogoAlts[state]}
                  className="max-lg:mx-auto max-lg:h-[50px] object-contain"
                />
              </motion.div>
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
            <BlueButton content="Learn More" path={links[state]} />
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
              alt={alts[state]}
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
