"use client";
import desirial from "@/app/img/logos/desirial-by-vivacy.png";
import desirialPlus from "@/app/img/logos/desirial-plus-by-vivacy.png";
import ispace from "@/app/img/logos/ispace-vivacy.png";
import kartilage from "@/app/img/logos/kartilge-by-vivacy.png";
import stylage from "@/app/img/logos/stylage-by-vivacy.png";
import vivacy from "@/app/img/logos/vivacy-beauty.png";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { ReactNode, useState } from "react";
import BlueButton from "../buttons/BlueButton";

const logos = [stylage, desirial, desirialPlus, vivacy, kartilage, ispace];

type Text = {
  keys: Array<string>;
  title: ReactNode;
  content: ReactNode[];
  cta: {
    display: boolean;
    content: ReactNode;
    path: string;
  };
};

type Props = {
  texts: Text[];
};

export default function BrandsDescriptions(props: Props) {
  const t = useTranslations("Brands");

  const altLogos = [
    t("brandsDescriptions.stylage.alt"),
    t("brandsDescriptions.desirial.alt"),
    t("brandsDescriptions.desirial.alt"),
    t("brandsDescriptions.desirial.alt"),
    t("brandsDescriptions.desirial.alt"),
    t("brandsDescriptions.desirial.alt"),
  ];

  const [brand, setBrand] = useState(0);

  return (
    <section className="lg:space-y-36 max-lg:grid max-lg:grid-cols-6 max-lg:pb-16">
      <section className="max-lg:col-span-2">
        <div className="max-lg:px-5 grid grid-cols-2 lg:grid-cols-6 gap-4 lg:gap-12 lg:max-w-[80%] mx-auto">
          {logos.map((logo, index) => {
            return (
              <div
                className="col-span-2 bg-grey p-4 lg:px-8 lg:py-4 grid cursor-pointer relative"
                key={index}
                onClick={() => {
                  setBrand(index);
                }}
              >
                <Image
                  src={logo}
                  alt={altLogos[index]}
                  quality={75}
                  style={{
                    filter: "saturate(0%)",
                    objectFit: "contain",
                    margin: "auto",
                  }}
                  className="max-lg:w-20 lg:max-h-20 lg:max-w-60"
                />

                {index === brand ? (
                  <motion.div
                    className="absolute lg:-bottom-px left-0 max-lg:top-0 max-lg:bottom-0 lg:right-0 max-lg:w-[2px] lg:h-[3px] bg-blue z-10"
                    layoutId="underline"
                  />
                ) : null}
              </div>
            );
          })}
        </div>
      </section>

      <section
        className="lg:grid lg:grid-cols-12 max-lg:col-span-4"
        id="content"
      >
        <div className="max-lg:hidden col-span-5 bg-blue grid ">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={props.texts[brand].keys[0]}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="m-auto"
            >
              <Image
                src={logos[brand]}
                alt={altLogos[brand]}
                quality={100}
                style={{
                  filter: "saturate(0%) invert(1)",
                  maxHeight: "160px",
                  maxWidth: "500px",
                  objectFit: "contain",
                }}
              />
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="lg:col-span-7 p-4 max-lg:pl-0 lg:px-20 lg:py-12 space-y-8 lg:space-y-10 grid transition-all">
          <AnimatePresence mode="wait" initial={false}>
            <motion.h2
              key={props.texts[brand].keys[1]}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="uppercase text-blue font-semibold text-lg lg:text-2xl"
            >
              {props.texts[brand].title}
            </motion.h2>

            <motion.div
              key={props.texts[brand].keys[2]}
              initial={{ y: 0, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 0, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="space-y-4"
            >
              {props.texts[brand].content.map((p, index) => {
                return (
                  <p key={"p" + index} className="lg:text-lg">
                    {p}
                  </p>
                );
              })}
            </motion.div>

            <motion.div
              key={props.texts[brand].keys[3]}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className={`${
                props.texts[brand].cta.display === true
                  ? "inline-block"
                  : "hidden"
              } m-auto lg:mr-0 max-lg:ml-0`}
            >
              <BlueButton content={props.texts[brand].cta.content} path={""} />
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </section>
  );
}
