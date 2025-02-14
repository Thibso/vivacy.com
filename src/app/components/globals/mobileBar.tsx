"use client";

import {
  ArrowDownToLine,
  GraduationCap,
  Newspaper,
  NotebookTabs,
} from "lucide-react";
import { useEffect, useState } from "react";

export default function MobileBar() {
  const [deviceType, setDeviceType] = useState("");

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor;
    if (/iPhone|iPad|iPod/i.test(userAgent)) {
      setDeviceType("iPhone");
    } else if (/Android/i.test(userAgent)) {
      setDeviceType("Android");
    } else {
      setDeviceType("Other");
    }
  }, []);

  return (
    <div className="md:hidden bg-blue flex gap-x-8 sticky bottom-0 left-0 right-0 h-[50px] z-[995] justify-center items-center">
      <div className="text-white text-[12px] leading-none">
        <a href="#newsletter" className="flex flex-col items-center gap-y-1">
          <Newspaper color="white" />
          <span>Newsletter</span>
        </a>
      </div>

      <div className="text-white text-[12px] leading-none">
        <a href="/en/contact" className="flex flex-col items-center gap-y-1">
          <NotebookTabs color="white" />
          <span>Contact</span>
        </a>
      </div>

      <div className="text-white text-[12px] leading-none">
        <a
          href="https://vivacy-academy.com/login"
          target="_blank"
          className="flex flex-col items-center gap-y-1"
        >
          <GraduationCap
            color="white"
            height={32}
            width={32}
            className="-mt-[4px] -mb-[4px]"
          />
          <span>Academy</span>
        </a>
      </div>

      <div className="text-white text-[12px] leading-none">
        <a
          href={
            deviceType === "iPhone"
              ? "https://apps.apple.com/fr/app/my-vivacy/id1206429694"
              : "https://play.google.com/store/apps/details?id=eu.vivacy.vivacysecurity&hl=fr"
          }
          target="_blank"
          className="flex flex-col items-center gap-y-1"
        >
          <ArrowDownToLine color="white" />
          <span>Vivacy App</span>
        </a>
      </div>
    </div>
  );
}
