"use client";

import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { useMediaQuery } from "react-responsive";

type Props = {
  src: StaticImageData;
  alt: string;
  from: number;
  to: number;
  classes: string;
};

export default function ImageFromEffect(props: Props) {
  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: isMobile ? 0 : props.from,
        y: isMobile ? 50 : 0,
      }}
      whileInView={{
        opacity: 1,
        x: isMobile ? 0 : props.to,
        y: isMobile ? 0 : 0,
      }}
      transition={{
        duration: 0.55,
      }}
      viewport={{
        amount: 0.4,
        once: true,
      }}
      className="absolute size-full top-0 left-0"
    >
      <Image
        src={props.src}
        alt={props.alt}
        quality={100}
        fill
        style={{
          objectFit: "cover",
          objectPosition: "50% 50%",
        }}
        className={`${props.classes}`}
      />
    </motion.div>
  );
}
