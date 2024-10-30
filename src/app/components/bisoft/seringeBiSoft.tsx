"use client";

import seringe from "@/app/img/bisoft/seringe-bi-soft.png";
import Image from "next/image";

type Contents = {
  title: string;
  content: string[];
};

type Props = {
  first: Contents;
  second: Contents;
  third: Contents;
  fourth: Contents;
  fifth: Contents;
};

export default function SeringeBiSoft(props: Props) {
  const textRight = [props.first, props.second, props.third, props.fourth];
  return (
    <div className="myContainer sticky top-[100px]">
      <div className="grid grid-cols-12">
        {/* IMAGE */}
        <div className="absolute lg:-top-[150px] xl:-top-[150px] 2xl:-top-[144px] lg:left-0 2xl:left-32 lg:h-[900px] xl:h-[900px] 2xl:h-[900px]">
          <Image
            src={seringe}
            alt=""
            quality={75}
            className="h-full object-contain"
          />
          {/* 1ST */}
          <span className="absolute lg:top-[257px] lg:left-[232px] lg:w-[21vw] xl:top-[288px] xl:w-[18vw] 2xl:top-[283px] 2xl:w-[547px] h-2 z-10 flex items-center">
            <span className="block bg-blue size-3 rounded-full"></span>
            <span className="block border-blue border-t-2 border-dashed w-full"></span>
          </span>

          {/* 2ND */}
          <span className="absolute lg:top-[367px] lg:left-[315px] lg:w-[14vw] xl:top-[399px] xl:left-[315px] xl:w-[12vw] 2xl:top-[393px] 2xl:left-[315px] 2xl:w-[464px] h-fit z-10 flex items-end">
            <span className="block bg-blue size-3 rounded-full -mr-[7px]"></span>
            <span className="block border-blue border-l-2 border-dashed lg:h-[150px] xl:h-[120px] 2xl:h-[125px]"></span>
            <span className="block border-blue border-t-2 border-dashed w-full self-start"></span>
          </span>

          {/* 2ND - BIS */}
          <span className="absolute lg:top-[367px] xl:top-[400px] 2xl:top-[395px] lg:left-[288px] lg:w-[140px] 2xl:w-[200px] h-fit z-10 flex items-end">
            <span className="block bg-blue size-3 rounded-full -mb-[5px]"></span>
            <span className="block border-blue border-t-2 border-dashed w-full"></span>
            <span className="block border-blue border-l-2 border-dashed lg:h-[455px] xl:h-[420px] 2xl:h-[427px]"></span>
          </span>

          {/* 3RD */}
          <span className="absolute lg:top-[504px] xl:top-[507px] 2xl:top-[530px] lg:left-[235px] xl:left-[235px] h-fit z-10 flex items-end">
            <span className="block bg-blue size-3 rounded-full -mb-[5px]"></span>
            <span className="block border-blue border-t-2 border-dashed lg:w-[195px] xl:w-[205px] 2xl:w-[365px]"></span>
            <span className="block border-blue border-l-2 border-dashed lg:h-[338px] xl:h-[338px] 2xl:h-[320px]"></span>
            <span className="block border-blue border-t-2 border-dashed lg:w-[3vw] xl:w-[3vw] 2xl:w-[165px] self-start"></span>
          </span>

          {/* 3RD - BIS */}
          <span className="absolute border-blue lg:top-[695px] xl:top-[672px] 2xl:top-[721px] lg:left-[444px] xl:left-[454px] 2xl:left-[612px] lg:w-[3vw] xl:w-[3vw] 2xl:w-[168px] h-2 border-t-2 border-dashed z-10 flex items-end"></span>

          {/* 4TH */}
          <span className="absolute lg:top-[760px] lg:left-[90px] 2xl:left-[85px] lg:w-[155px] 2xl:w-[160px] h-fit z-10 flex">
            <span className="block border-blue border-l-2 border-dashed lg:h-[180px] 2xl:h-[238px]"></span>
            <span className="block border-blue border-t-2 border-dashed w-full"></span>
            <span className="block bg-blue size-3 rounded-full -mt-[5px]"></span>
          </span>
        </div>

        {/* TEXT */}
        <div className="lg:col-span-7 lg:col-start-6 xl:col-span-8 xl:col-start-5 2xl:col-span-5 2xl:col-start-8 2xl:m-auto mb-0 space-y-4">
          {textRight.map((texts, index) => {
            return (
              <div key={"texts-" + index} className="space-y-2">
                <h4 className="uppercase text-lg text-blue">{texts.title}</h4>
                <ul className=" list-disc ml-8 text-lg">
                  {texts.content.map((li, i) => {
                    return <li key={"texts-ul-" + i}>{li}</li>;
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>

      <div className="lg:mt-32 xl:mt-36 2xl:mt-28 space-y-14">
        <h4 className="uppercase text-lg text-blue">{props.fifth.title}</h4>
        <div className="space-y-4">
          {props.fifth.content.map((p, i) => {
            return <p key={"texts-p-" + i}>{p}</p>;
          })}
        </div>
      </div>
    </div>
  );
}
