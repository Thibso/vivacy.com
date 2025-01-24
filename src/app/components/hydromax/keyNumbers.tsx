"use client";

import {
  animate,
  motion,
  useInView,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useTranslations } from "next-intl";
import { useEffect, useRef } from "react";
import { useMediaQuery } from "react-responsive";
import WhiteButton from "../buttons/WhiteButton";
import PAnimate from "../globals/pAnimate";

type Props = {
  from: number;
  to: number;
};

function Counter(props: Props) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { once: true });

  useEffect(() => {
    if (isInView) {
      const node = nodeRef.current;

      const controls = animate(props.from, props.to, {
        duration: 1,
        onUpdate(value) {
          node!.textContent = value.toFixed(0);
        },
      });

      return () => controls.stop();
    }
  }, [isInView, props.from, props.to]);

  return <span ref={nodeRef} className="text-8xl font-bold" />;
}

export default function KeyNumbers() {
  const h = useTranslations("Hydromax");

  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 1"],
  });

  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const scale = useSpring(scrollYProgress, {
    stiffness: 150,
    damping: 30,
  });

  const scaleProgress = useTransform(
    scale,
    [0, 0.5, 1],
    isMobile ? [0.8, 1, 1] : [0.6, 1, 1]
  );

  return (
    <motion.section
      ref={ref}
      style={{ scale: scaleProgress }}
      className="bg-blue lg:max-w-[2550px] lg:m-auto border-white/50 border-b-[1px]"
    >
      <div className="myContainer relative space-y-14 lg:space-y-22 text-white lg:flex lg:flex-col lg:items-center ">
        <div className="titles-container w-full">
          <PAnimate
            classes="text-center"
            content={h.rich("section6.content_bis", {
              p: (chunks) => <p className="lg:text-lg">{chunks}</p>,
              strong: (chunks) => (
                <strong className="lg:text-lg">{chunks}</strong>
              ),
              sup: (chunks) => <sup>{chunks}</sup>,
              ul: (chunks) => (
                <ul className="lg:text-lg list-disc ml-8">{chunks}</ul>
              ),
              li: (chunks) => <li>{chunks}</li>,
            })}
          />
        </div>

        <div className="max-lg:space-y-14 lg:grid lg:grid-cols-3 lg:gap-20 lg:max-w-[80%]">
          <div className="text-center">
            <p className="flex flex-col space-y-4">
              <span>
                <Counter from={0} to={100} />
                <span className="text-6xl font-bold">%</span>
              </span>
              <span className="lg:text-lg">{h("section7.content.1")}</span>
            </p>
          </div>

          <div className="text-center">
            <p className="flex flex-col space-y-4">
              <span>
                <Counter from={0} to={97} />
                <span className="text-6xl font-bold">%</span>
              </span>
              <span className="lg:text-lg">{h("section7.content.2")}</span>
            </p>
          </div>

          <div className="text-center">
            <p className="flex flex-col space-y-4">
              <span>
                <Counter from={0} to={92} />
                <span className="text-6xl font-bold">%</span>
              </span>
              <span className="lg:text-lg">{h("section7.content.3")}</span>
            </p>
          </div>
        </div>

        <div className="m-auto lg:ml-0 lg:absolute lg:left-8 lg:bottom-8">
          <ol className="text-sm max-lg:text-center list-decimal">
            {h.rich("section7.annotation", {
              li: (chunk) => <li className="text-[10px]">{chunk}</li>,
              sup: (chunk) => <sup>{chunk}</sup>,
            })}
          </ol>
        </div>

        <div className="max-lg:flex max-lg:justify-center">
          <WhiteButton content={h("cta_2.title")} path={h("cta_2.path")} />
        </div>
      </div>
    </motion.section>
  );
}
