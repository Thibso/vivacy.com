"use client";

import { motion } from "framer-motion";

export default function BigTitle({ children }: any) {
  return (
    <motion.div
      initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }}
      animate={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
      transition={{ duration: 2.5 }}
      className="z-[2] m-auto mb-0"
    >
      {children}
    </motion.div>
  );
}
