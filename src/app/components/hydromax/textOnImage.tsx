"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function TextOnImage() {
  const t = useTranslations("Hydromax");
  return (
    <div className="relative myContainer min-h-[200vh] lg:min-h-[170vh] max-lg:space-y-8">
      {/* first */}
      <motion.div
        initial={{
          y: -50,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          delay: 0.5,
          duration: 0.75,
        }}
        viewport={{
          once: true,
        }}
        className="lg:absolute lg:top-[10%] lg:left-[5%] lg:w-[30%] space-y-4"
      >
        <h2 className="h2-perso text-white text-xl lg:text-5xl text-left">
          {t("section4.h2.1")}
        </h2>
        <div className="space-y-4">
          {t.rich("section4.content.1", {
            p: (chunks) => <p className="lg:text-lg text-white">{chunks}</p>,
            sup: (chunks) => <sup>{chunks}</sup>,
            spe: (chunks) => (
              <span className="text-xl lg:text-3xl">{chunks}</span>
            ),
            br: () => <br />,
          })}
        </div>
      </motion.div>

      {/* second */}
      <motion.div
        initial={{
          y: -50,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          delay: 0.5,
          duration: 0.75,
        }}
        viewport={{
          once: true,
        }}
        className="lg:absolute lg:top-[35%] lg:right-[0] lg:w-[30%] space-y-4"
      >
        <h2 className="h2-perso text-white text-xl lg:text-5xl text-left">
          {t("section4.h2.2")}
        </h2>
        <div className="space-y-4">
          {t.rich("section4.content.2", {
            p: (chunks) => <p className="lg:text-lg text-white">{chunks}</p>,
            sup: (chunks) => <sup>{chunks}</sup>,
            spe: (chunks) => (
              <span className="text-xl lg:text-3xl">{chunks}</span>
            ),
            br: () => <br />,
          })}
        </div>
      </motion.div>
      {/* third */}
      <motion.div
        initial={{
          y: -50,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          delay: 0.5,
          duration: 0.75,
        }}
        viewport={{
          once: true,
        }}
        className="lg:absolute lg:top-[60%] lg:left-[5%] lg:w-[30%] space-y-4"
      >
        <h2 className="h2-perso text-white text-xl lg:text-5xl text-left">
          {t("section4.h2.3")}
        </h2>
        <div className="space-y-4">
          {t.rich("section4.content.3", {
            p: (chunks) => <p className="lg:text-lg text-white">{chunks}</p>,
            spe: (chunks) => (
              <span className="text-xl lg:text-3xl">{chunks}</span>
            ),
            sup: (chunks) => <sup>{chunks}</sup>,
            br: () => <br />,
          })}
        </div>
      </motion.div>
    </div>
  );
}
