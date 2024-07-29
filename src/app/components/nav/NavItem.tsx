"use client";

import { useState } from "react";
import SubMenuImage from "./SubMenuImage";

type Props = {
  title: string;
  path: string;
  content: string;
  items: Array<[string, string, string]>;
  images: Array<string>;
};

export default function NavItem(props: Props) {
  const [imageDisplay, setImageDisplay] = useState("0");

  return (
    <li className="group">
      <span className="uppercase font-light text-base cursor-pointer">
        {props.title}
      </span>
      {/* hidden group-hover: */}
      <div className="hidden group-hover:block absolute left-0 w-full pt-5">
        <div className="grid grid-cols-4 gap-32 justify-between bg-background text-blue px-20 py-12 rounded-b-3xl ">
          <div className="col-span-1">
            <span className="uppercase">{props.title}</span>
            <p className="mt-8 text-sm font-normal">{props.content}</p>
          </div>

          <div className=" col-span-1 h-full">
            <ul className="flex flex-col gap-8 h-full justify-center">
              {props.items.map((item) => {
                return (
                  <li
                    key={item[0]}
                    onMouseEnter={() => {
                      setImageDisplay(item[0]);
                    }}
                  >
                    <a
                      className="uppercase underline font-light text-base"
                      href={item[2]}
                    >
                      {item[1]}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="col-span-2">
            <SubMenuImage index={Number(imageDisplay)} images={props.images} />
          </div>
        </div>
      </div>
    </li>
  );
}
