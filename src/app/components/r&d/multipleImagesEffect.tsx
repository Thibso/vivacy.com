"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image, { StaticImageData } from "next/image";
import { useRef } from "react";

type Props = {
  research1: StaticImageData;
  research2: StaticImageData;
  research3: StaticImageData;
  research4: StaticImageData;
};

export default function MultipleImagesEffect(props: Props) {
  const t = useTranslations("R&D");

  const scrollRef = useRef(null);

  return (
    <div
      ref={scrollRef}
      className="lg:col-span-7 max-lg:h-[250px] grid grid-cols-10 gap-x-2 lg:gap-x-8"
    >
      <motion.div
        initial={{ opacity: 0, x: "-20%" }}
        whileInView={{ opacity: 1, x: "0%" }}
        transition={{ duration: 0.6 }}
        viewport={{ amount: 0.5 }}
        className="col-span-4 relative z-[5]"
      >
        <Image
          src={props.research1}
          alt={t("section1.alts.first")}
          quality={100}
          fill
          style={{
            objectFit: "cover",
            objectPosition: "50% 50%",
          }}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: "-20%" }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ amount: 0.5 }}
        className="col-span-3 relative z-[4]"
      >
        <Image
          src={props.research2}
          alt={t("section1.alts.second")}
          quality={100}
          fill
          style={{
            objectFit: "cover",
            objectPosition: "50% 50%",
          }}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: "-20%" }}
        whileInView={{ opacity: 1, x: "0%" }}
        transition={{ duration: 0.6, delay: 0.8 }}
        viewport={{ amount: 0.5 }}
        className="col-span-2 relative z-[3]"
      >
        <Image
          src={props.research3}
          alt={t("section1.alts.third")}
          quality={100}
          fill
          style={{
            objectFit: "cover",
            objectPosition: "50% 50%",
          }}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: "-20%" }}
        whileInView={{ opacity: 1, x: "0%" }}
        transition={{ duration: 0.6, delay: 1.2 }}
        viewport={{ amount: 0.5 }}
        className="col-span-1 relative z-[2]"
      >
        <Image
          src={props.research4}
          alt={t("section1.alts.fourth")}
          quality={100}
          fill
          style={{
            objectFit: "cover",
            objectPosition: "50% 50%",
          }}
        />
      </motion.div>
    </div>
  );
}
