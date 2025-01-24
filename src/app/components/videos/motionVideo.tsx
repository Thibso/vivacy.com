"use client";

import {
  motion,
  useInView,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useRef } from "react";

type Props = {
  src: string;
};

export default function MotionVideo(props: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0.35 .9", "1 1"],
  });

  const scale = useSpring(scrollYProgress, {
    stiffness: 250,
    damping: 25,
  });

  const scaleProgress = useTransform(scale, [0, 1], [1.2, 1]);

  const videoRef = useRef<HTMLVideoElement>(null);

  const isInView = useInView(videoRef, { once: false, amount: "all" });
  const isOutView = useInView(videoRef, { once: false, amount: "some" });

  useEffect(() => {
    if (isInView && videoRef.current) {
      videoRef.current.play();
    } else if (!isOutView && videoRef.current) {
      videoRef.current.pause();
    }
  }, [isInView, isOutView]);

  return (
    <motion.div
      ref={ref}
      style={{ scale: scaleProgress }}
      className="origin-top"
    >
      <video
        ref={videoRef}
        className="lg:max-w-[80%] mx-auto rounded-xl"
        playsInline
        loop
        muted
      >
        <source src={props.src} type="video/mp4" />
      </video>
    </motion.div>
  );
}
