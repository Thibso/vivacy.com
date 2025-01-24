"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import BlueButton from "../buttons/BlueButton";
import FromTopCenteredTitles from "../titles/FromTopCenteredTitles";

// Images
import ipn from "@/app/img/laboratoires-vivacy-ipn-like-technology.png";
import biSoft from "@/app/img/stylage-specialiste-acide-hyaluronique-premium.png";
import innovationsBg from "@/app/img/vivacy-laboratoire-esthetique-france.jpg";
import security from "@/app/img/vivacy-security.png";
import vivasome from "@/app/img/vivasome/plateau-vivacy-vivasome.png";
import { useEffect, useRef, useState } from "react";

export default function Innovations() {
  const t = useTranslations("HomePage");

  const textsTop = [
    t.rich("section4.biSoft.textTop", {
      h2: (chunks) => (
        <h2 className="h2-perso normal-case text-lg md:text-2xl text-left">
          {chunks}
        </h2>
      ),
      h3: (chunks) => <h3 className="text-base md:text-xl">{chunks}</h3>,
      sup: (chunks) => <sup className="text-sm">{chunks}</sup>,
    }),
    t.rich("section4.ipn.textTop", {
      h2: (chunks) => (
        <h2 className="h2-perso text-lg md:text-2xl text-left">{chunks}</h2>
      ),
      h3: (chunks) => <h3 className="text-base md:text-xl">{chunks}</h3>,
      sup: (chunks) => <sup className="text-sm">{chunks}</sup>,
    }),
    t.rich("section4.vivasome.textTop", {
      h2: (chunks) => (
        <h2 className="h2-perso text-lg md:text-2xl text-left">{chunks}</h2>
      ),
      h3: (chunks) => <h3 className="text-base md:text-xl">{chunks}</h3>,
      sup: (chunks) => <sup className="text-sm">{chunks}</sup>,
    }),
    t.rich("section4.security.textTop", {
      h2: (chunks) => (
        <h2 className="h2-perso text-lg md:text-2xl text-left">{chunks}</h2>
      ),
      h3: (chunks) => <h3 className="text-base md:text-xl">{chunks}</h3>,
      sup: (chunks) => <sup className="text-sm">{chunks}</sup>,
    }),
  ];

  const textsCore = [
    t.rich("section4.biSoft.textCore", {
      p: (chunks) => <p className="lg:text-lg">{chunks}</p>,
      sup: (chunks) => <sup className="text-sm">{chunks}</sup>,
    }),
    t.rich("section4.ipn.textCore", {
      p: (chunks) => <p className="lg:text-lg">{chunks}</p>,
      sup: (chunks) => <sup className="text-sm">{chunks}</sup>,
    }),
    t.rich("section4.vivasome.textCore", {
      p: (chunks) => <p className="lg:text-lg">{chunks}</p>,
      sup: (chunks) => <sup className="text-sm">{chunks}</sup>,
    }),
    t.rich("section4.security.textCore", {
      p: (chunks) => <p className="lg:text-lg">{chunks}</p>,
      sup: (chunks) => <sup className="text-sm">{chunks}</sup>,
    }),
  ];

  const asterisk = [
    t("section4.biSoft.asterisk"),
    t("section4.ipn.asterisk"),
    t("section4.vivasome.asterisk"),
    t("section4.security.asterisk"),
  ];

  const annotations = [
    t.rich("section4.biSoft.annotations", {
      li: (chunks) => <li className="text-[10px]">{chunks}</li>,
    }),
    t.rich("section4.ipn.annotations", {
      li: (chunks) => <li className="text-[10px]">{chunks}</li>,
    }),
    t.rich("section4.vivasome.annotations", {
      li: (chunks) => <li className="text-[10px]">{chunks}</li>,
    }),
    t.rich("section4.security.annotations", {
      li: (chunks) => <li className="text-[10px]">{chunks}</li>,
    }),
  ];

  const buttonPath = [
    t("section4.biSoft.buttonPath"),
    t("section4.ipn.buttonPath"),
    t("section4.vivasome.buttonPath"),
    t("section4.security.buttonPath"),
  ];

  const images = [biSoft, ipn, vivasome, security];

  const buttonsDisplay = ["Bi-SOFT", "IPN-LIKE", "VIVASÔME", "MY VIVACY"];

  const [display, setDisplay] = useState(0);

  const sourceRef = useRef<HTMLDivElement | null>(null);
  const targetRef = useRef<HTMLDivElement | null>(null);

  const [sectionHeight, setSectionHeight] = useState(0);

  useEffect(() => {
    const updateSize = () => {
      if (sourceRef.current) {
        const { height } = sourceRef.current.getBoundingClientRect();
        setSectionHeight(height);
      }
    };

    // Mettre à jour la taille au montage et lors du redimensionnement de la fenêtre
    updateSize();
    window.addEventListener("resize", updateSize);

    // Nettoyage
    return () => {
      window.removeEventListener("resize", updateSize);
    };
  }, [display]);

  useEffect(() => {
    // Ajuster la taille de la div cible si nécessaire
    if (targetRef.current) {
      targetRef.current.style.height = `${sectionHeight}px`;
    }
  }, [sectionHeight]);

  function switchDisplay(section: number) {
    setDisplay(section);
  }

  return (
    <section className="relative z-[1]">
      <Image
        className="-z-[1]"
        src={innovationsBg}
        alt="texture"
        quality={100}
        fill
        style={{
          objectFit: "cover",
        }}
      />

      <div className="myContainer space-y-8 lg:space-y-20">
        <FromTopCenteredTitles
          titleH2={t("section4.h2")}
          titleH3={t("section4.h3")}
          h3Classes="text-black"
        />

        <div className="flex gap-3 lg:gap-8 justify-center">
          {buttonsDisplay.map((text, index) => {
            return (
              <span
                key={"btn-" + index}
                onClick={() => switchDisplay(index)}
                className={`${
                  display === index
                    ? "bg-blue text-white"
                    : "bg-transparent text-blue"
                } inline-block py-1 px-1 lg:py-2 lg:px-8 rounded-3xl text-blue border-[1px] border-blue font-normal text-[12px] sm:text-base hover:bg-blue hover:text-white cursor-pointer transition-all`}
              >
                {text}
              </span>
            );
          })}
        </div>

        <div className="relative max-w-[1200px] mx-auto" ref={targetRef}>
          {textsTop.map((text, index) => {
            return (
              <div
                key={index}
                className={`${
                  display === index ? "opacity-100 z-10" : "opacity-0 z-0"
                } absolute top-0 left-0 w-full h-full transition-all`}
              >
                <div
                  ref={display === index ? sourceRef : null}
                  className="lg:grid lg:grid-cols-2 lg:gap-36"
                >
                  <div className="space-y-8 lg:space-y-14">
                    <div className="space-y-2">{text}</div>

                    <div className="space-y-4">{textsCore[index]}</div>

                    <div className="space-y-4">
                      {asterisk[index] ? (
                        <p className="text-[10px]">* {asterisk[index]}</p>
                      ) : null}

                      {annotations[index] ? (
                        <ul className="list-decimal">{annotations[index]}</ul>
                      ) : null}
                    </div>

                    <div className="max-lg:flex max-lg:justify-center">
                      <BlueButton
                        content={"MORE INFORMATION"}
                        path={buttonPath[index]}
                      />
                    </div>
                  </div>

                  <div className={`max-lg:hidden flex`}>
                    {index === 0 ? (
                      <Image
                        src={images[index]}
                        alt=""
                        height={500}
                        style={{
                          transformOrigin: "center",
                          transform: "rotate(45deg)",
                          objectFit: "contain",
                        }}
                      />
                    ) : (
                      <Image
                        src={images[index]}
                        alt=""
                        className="object-contain my-auto max-h-[70%] h-fit w-fit rounded-xl"
                      />
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
