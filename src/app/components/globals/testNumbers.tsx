"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type Props = {
  number: number;
  speed?: number;
};

export default function IncrementNumber(props: Props) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView && count < props.number) {
      const interval = setInterval(
        () => {
          setCount((prevCount) => {
            if (prevCount >= props.number) {
              clearInterval(interval);
              return prevCount;
            }
            return prevCount + 1;
          });
        },
        props.speed ? props.speed : 150
      );

      return () => clearInterval(interval);
    }
  }, [isInView, count]);

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="font-bold text-7xl ml-2"
    >
      {count}
    </motion.span>
  );
}
