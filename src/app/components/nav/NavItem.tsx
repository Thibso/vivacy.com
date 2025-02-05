"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import SubMenuImage from "./SubMenuImage";

type Props = {
  title: string;
  path: string;
  content: string;
  items: Array<[string, string, string]>;
  images: Array<string>;
};

export default function NavItem(props: Props) {
  const [imageDisplay, setImageDisplay] = useState("1");
  const [display, setDisplay] = useState(false);

  return (
    <li
      onMouseEnter={() => setDisplay(true)}
      onMouseLeave={() => setDisplay(false)}
      onFocus={() => setDisplay(true)}
      onBlur={() => setDisplay(false)}
      className="group"
    >
      <a
        href=""
        className=" group-hover:underline underline-offset-4 uppercase font-light text-base cursor-pointer"
      >
        {props.title}
      </a>

      {/* hidden group-hover: hidden group-hover:block */}
      <AnimatePresence>
        {display ? (
          <motion.div
            key="section"
            initial={{ y: -5, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 5, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="absolute left-0 w-full pt-5"
          >
            <div className="grid grid-cols-4 gap-12 xl:gap-32 justify-between bg-background text-blue px-10 xl:px-20 py-8 xl:py-12 rounded-b-3xl ">
              <div className="col-span-1">
                <span className="uppercase font-bold">{props.title}</span>
                <p className="mt-8 text-sm font-normal">{props.content}</p>
              </div>

              <div className=" col-span-1 h-full">
                <ul className="flex flex-col gap-8 h-full justify-center">
                  {props.items.map((item) => {
                    return (
                      <li
                        key={item[0]}
                        onMouseEnter={() => {
                          setImageDisplay(item[0]);
                        }}
                      >
                        <a
                          className="underline underline-offset-4 hover:font-normal font-light text-base transition-all"
                          href={item[2]}
                        >
                          {item[1]}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="col-span-2 relative">
                <SubMenuImage
                  index={Number(imageDisplay)}
                  images={props.images}
                />
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </li>
  );
}
