"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useRef } from "react";
import front from "../../img/syringe-effect/expert-acide-hyaluronique.png";
import bg from "../../img/syringe-effect/vivacy-seringue-speciale.png";

export default function SyringeRotate() {
  const t = useTranslations("HomePage");
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0.41 1", "1 1"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 150,
    damping: 30,
    restDelta: 0.001,
  });

  const rotateProgresse = useTransform(scaleY, [0, 0.3], [0, -180]);
  const opacityProgress = useTransform(scaleY, [0.6, 0.7], [1, 0]);
  const displayProgress = useTransform(
    scaleY,
    [0, 0.7, 0.75, 1],
    [51, 51, -1, -10]
  );
  const translateXProgress = useTransform(scaleY, [0.35, 0.55], ["0", "60%"]);
  const scaleProgress = useTransform(scaleY, [0.5, 0.7], [1, 1.5]);

  return (
    <motion.section
      className="max-lg:hidden lg:min-h-[150vh] relative"
      style={{ zIndex: displayProgress }}
    >
      <motion.section
        ref={ref}
        className=" min-h-[250vh] absolute top-0 left-0 w-full"
        style={{ opacity: opacityProgress }}
      >
        <div className="sticky top-0 min-h-screen overflow-hidden">
          <motion.div
            className="absolute w-full h-full -z-[2]"
            style={{ scale: scaleProgress }}
          >
            <Image
              src={bg}
              alt={t("effect.alt1")}
              quality={100}
              fill
              sizes="100vw"
              style={{
                objectFit: "cover",
              }}
            />
          </motion.div>

          <motion.div className="absolute top-0 left-0 size-full -z-[3]">
            <motion.div
              className="relative h-full"
              style={{
                rotate: rotateProgresse,
                translateX: translateXProgress,
              }}
            >
              <Image
                src={front}
                alt={t("effect.alt2")}
                quality={100}
                fill
                sizes="100vw"
                style={{
                  objectFit: "cover",
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </motion.section>
  );
}
