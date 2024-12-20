import Image from "next/image";

import desirial from "../../img/logos/desirial-by-vivacy.png";
import desirialPlus from "../../img/logos/desirial-plus-by-vivacy.png";
import ispace from "../../img/logos/ispace-vivacy.png";
import kartilage from "../../img/logos/kartilge-by-vivacy.png";
import stylage from "../../img/logos/stylage-by-vivacy.png";
import vivacy from "../../img/logos/vivacy-beauty.png";

const images = [stylage, desirial, desirialPlus, vivacy, ispace, kartilage];

export default function LogoSlider() {
  return (
    <div className="relative m-auto w-[1024px] overflow-hidden bg-white before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px] before:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:-scale-x-100 after:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] after:content-['']">
      {/* animate-infinite-slider */}
      <div className="animate-infinite-slider flex w-[calc(600px*6)] gap-16">
        {images.map((image, index) => (
          <div
            className="slide flex w-[300px] items-center justify-center"
            key={index}
          >
            <a href="/#" target="_blank">
              <Image src={image} alt="" />
            </a>
          </div>
        ))}
        {images.map((image, index) => (
          <div
            className="slide flex w-[300px] items-center justify-center"
            key={index}
          >
            <a href="/#" target="_blank">
              <Image src={image} alt="" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
