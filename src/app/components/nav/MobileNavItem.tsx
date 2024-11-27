"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

type Props = {
  title: string;
  items: Array<[string, string, string]>;
};

export default function MobileNavItem(props: Props) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <li className="space-y-2">
      <span
        onClick={() => setIsOpen(!isOpen)}
        className="uppercase text-lg text-right cursor-pointer flex gap-x-2 justify-end"
      >
        <ChevronDown className={`${isOpen ? "rotate-180" : ""} transition`} />{" "}
        {props.title}
      </span>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            key={props.title}
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className="border-r-2 border-white/50 pr-2 overflow-hidden"
          >
            <ul className="space-y-1">
              {props.items.map((item, index) => {
                return (
                  <li
                    key={props.title + "-" + index}
                    className="text-right text-lg"
                  >
                    <a href={item[2]}>{item[1]}</a>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </li>
  );
}
