import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  content: string | ReactNode;
  path: string;
  blank?: boolean;
};

export default function BlueButton(props: Props) {
  // TARGET BLANK
  if (props.blank) {
    return (
      <a
        href={props.path}
        target="_blank"
        className=" inline-block bg-blue py-3 px-10 rounded-3xl text-white uppercase font-normal text-sm sm:text-base hover:bg-blue transition-all"
      >
        {props.content}
      </a>
    );
  }

  // TARGET DEFAULT
  return (
    <Link
      href={props.path}
      className=" inline-block bg-blue/90 py-3 px-10 rounded-3xl text-white uppercase font-normal text-sm lg:text-base hover:bg-blue transition-all"
    >
      {props.content}
    </Link>
  );
}
