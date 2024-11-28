"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import { ReactNode, useState } from "react";

type Props = {
  title: string;
  content: ReactNode;
};

export default function AccordionItem(props: Props) {
  const [active, setActive] = useState(false);

  return (
    <div>
      <div
        className={`${
          active ? "bg-blue text-white" : null
        } flex justify-between items-center uppercase lg:text-lg font-bold px-4 lg:px-8 py-2 cursor-pointer transition-all duration-300`}
        onClick={() => setActive(!active)}
      >
        <span>{props.title}</span>
        {active ? <Minus /> : <Plus />}
      </div>
      <AnimatePresence initial={false}>
        {active ? (
          <motion.div
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <ul className="list-disc lg:flex lg:flex-col lg:flex-wrap lg:max-h-[600px] px-14 py-4 lg:px-20 lg:py-8">
              {props.content}
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
