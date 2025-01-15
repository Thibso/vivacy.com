"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type Props = {
  titleH2: string;
  titleH3: string | ReactNode;
  containerClasses?: string;
  h3Classes?: string;
  h2Classes?: string;
};

export default function FromTopTitles(props: Props) {
  return (
    <div
      className={`titles-container ${
        props.containerClasses ? props.containerClasses : ""
      }`}
    >
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
        className={`h2-perso ${props.h2Classes ? props.h2Classes : ""}`}
      >
        {props.titleH2}
      </motion.h2>
      <motion.h3
        initial={{
          opacity: 0,
          y: -100,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          ease: "circOut",
          duration: 0.8,
        }}
        viewport={{
          amount: "all",
          once: true,
        }}
        className={`h3-perso ${props.h3Classes ? props.h3Classes : ""}`}
      >
        {props.titleH3}
      </motion.h3>
    </div>
  );
}
