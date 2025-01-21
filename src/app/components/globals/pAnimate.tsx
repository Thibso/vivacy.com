"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type Props = {
  classes?: string;
  content: ReactNode;
};

export default function PAnimate(props: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -0,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        ease: "easeInOut",
        duration: 0.75,
      }}
      viewport={{
        once: true,
        amount: "some",
      }}
      className={`${props.classes ? props.classes : ""} space-y-4`}
    >
      {props.content}
    </motion.div>
  );
}
