"use client";

import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";

type Props = {
  src: StaticImageData;
  alt: string;
};

export default function ImageHeader(props: Props) {
  return (
    <motion.div
      initial={{
        scale: 1,
      }}
      animate={{
        scale: 1.1,
      }}
      transition={{
        ease: "easeInOut",
        duration: 1.5,
      }}
      className="absolute size-full -z-[2]"
    >
      <Image
        src={props.src}
        alt={props.alt}
        quality={100}
        fill
        priority
        style={{
          objectFit: "cover",
          objectPosition: "50% 50%",
        }}
      />
    </motion.div>
  );
}
