"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { useMediaQuery } from "react-responsive";

type Props = {
  titleH2: string | null | ReactNode;
  titleH3: string | ReactNode;
  containerClasses?: string;
  h3Classes?: string;
  h2Classes?: string;
};

export default function FromTopTitles(props: Props) {
  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });

  return (
    <div
      className={`titles-container text-center ${
        props.containerClasses ? props.containerClasses : ""
      }`}
    >
      {props.titleH2 ? (
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
          className={`h2-perso ${props.h2Classes ? props.h2Classes : null}`}
        >
          {props.titleH2}
        </motion.h2>
      ) : null}

      <motion.h3
        initial={{
          opacity: 0,
          y: isMobile ? -50 : -80,
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
        className={`h3-perso text-center ${
          props.h3Classes ? props.h3Classes : null
        }`}
      >
        {props.titleH3}
      </motion.h3>
    </div>
  );
}
