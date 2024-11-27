"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

type Props = {
  index: number;
  images: Array<string>;
};

export default function SubMenuImage(props: Props) {
  if (props.index != 0) {
    return (
      <AnimatePresence>
        <motion.div
          key={"image-" + props.index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="absolute size-full top-0 right-0"
        >
          <Image
            className="h-full object-cover"
            src={props.images[props.index - 1]}
            alt=""
            quality={100}
            width={1080}
            height={720}
            priority={false}
          />
        </motion.div>
      </AnimatePresence>
    );
  } else return <></>;
}
