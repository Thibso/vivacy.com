"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useState } from "react";

export default function SubsidiariesList() {
  const t = useTranslations("Map");
  const subsidiary = [];
  let i = 1;

  while (i < 12) {
    subsidiary.push(t(`subsidiary.${i}`));
    i++;
  }

  const [open, setOpen] = useState(false);

  return (
    <div className="space-y-14">
      <motion.ul
        initial={false}
        animate={{
          height: open ? "100%" : 465,
          overflow: open ? "inherit" : "hidden",
        }}
        transition={{ duration: 0.8 }}
        className="lg:w-[90%] mx-auto relative"
      >
        <motion.div
          style={{
            display: open ? "none" : "block",
          }}
          transition={{ delay: 3.3 }}
          className={` absolute w-full h-[10%] left-0 bottom-0 z-[1] bg-gradient-to-t from-blue to-white/0`}
        ></motion.div>
        <li className="max-lg:hidden grid grid-cols-7 text-white uppercase border-b-2 border-white/50 py-6 font-bold">
          <span className="col-span-2">{t(`subsidiary.title`)}</span>
          <span className="col-span-3">{t(`adresses.title`)}</span>
          <span className="col-span-2">{t(`details.title`)}</span>
        </li>
        {subsidiary.map((item, index) => {
          return (
            <li
              key={index}
              className="max-lg:flex max-lg:flex-col max-lg:gap-y-4 lg:grid lg:grid-cols-7 text-white border-b-2 border-white/50 py-6 lg:items-center"
            >
              <span className="max-lg:font-bold lg:col-span-2">
                {t.rich(`subsidiary.${index + 1}`, {
                  br: () => <br />,
                })}
              </span>
              <span className="lg:col-span-3">
                {t.rich(`adresses.${index + 1}`, {
                  br: () => <br />,
                })}
              </span>
              <span className="lg:col-span-2">
                {t.rich(`details.${index + 1}`, {
                  br: () => <br />,
                })}
              </span>
            </li>
          );
        })}
      </motion.ul>
      <motion.div
        animate={{
          height: open ? 0 : "auto",
          display: open ? "none" : "flex",
        }}
        transition={{ delay: 0.4 }}
        className={`flex justify-center overflow-hidden`}
      >
        <span
          onClick={() => setOpen(true)}
          className="cursor-pointer inline-block bg-white/90 py-3 px-10 rounded-3xl text-blue uppercase font-normal text-sm sm:text-base hover:bg-white transition-all"
        >
          See more
        </span>
      </motion.div>
    </div>
  );
}
