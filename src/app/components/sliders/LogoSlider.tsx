import Image from "next/image";

import kartilage from "@/app/img/logos/kartilge-by-vivacy.png";
import { useTranslations } from "next-intl";
import desirial from "../../img/logos/desirial-by-vivacy.png";
import desirialPlus from "../../img/logos/desirial-plus-by-vivacy.png";
import ispace from "../../img/logos/ispace-vivacy.png";
import stylage from "../../img/logos/stylage-by-vivacy.png";
import vivacy from "../../img/logos/vivacy-beauty.png";

const images = [stylage, desirial, desirialPlus, vivacy, ispace, kartilage];

export default function LogoSlider() {
  const t = useTranslations("HomePage");
  const alts = [
    t("brands.stylage"),
    t("brands.desirial"),
    t("brands.desirialPlus"),
    t("brands.vivacy"),
    t("brands.ispace"),
    t("brands.kartilage"),
  ];
  const links = [
    t("brands.links.stylage"),
    t("brands.links.desirial"),
    t("brands.links.desirialPlus"),
    t("brands.links.vivacy"),
    t("brands.links.ispace"),
    t("brands.links.kartilage"),
  ];
  return (
    <div className="relative m-auto w-[1024px] overflow-hidden bg-transparent before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px] before:bg-[linear-gradient(to_right,#fafbfc_0%,rgba(255,255,255,0)_100%)] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:-scale-x-100 after:bg-[linear-gradient(to_right,#fafbfc_0%,rgba(255,255,255,0)_100%)] after:content-['']">
      {/* animate-infinite-slider */}
      <div className="animate-infinite-slider flex w-[calc(600px*6)] gap-16">
        {images.map((image, index) => (
          <div
            className="slide flex w-[300px] items-center justify-center"
            key={index}
          >
            <a href={links[index]} target="_blank">
              <Image
                style={{ filter: "saturate(0%)" }}
                src={image}
                alt={alts[index]}
              />
            </a>
          </div>
        ))}
        {images.map((image, index) => (
          <div
            className="slide flex w-[300px] items-center justify-center"
            key={index}
          >
            <a href={links[index]} target="_blank">
              <Image
                style={{ filter: "saturate(0%)" }}
                src={image}
                alt={alts[index]}
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
