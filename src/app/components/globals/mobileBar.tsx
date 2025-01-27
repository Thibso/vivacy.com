"use client";

import { ArrowDownToLine, Newspaper, NotebookTabs } from "lucide-react";
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
    <div className="md:hidden bg-blue flex gap-x-8 sticky bottom-0 left-0 right-0 h-[50px] z-[999] justify-center items-center">
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
        <a href="" className="flex flex-col items-center gap-y-1">
          <ArrowDownToLine color="white" />
          <span>Vivacy App {deviceType}</span>
        </a>
      </div>
    </div>
  );
}
