import { ReactNode } from "react";

type Props = {
  title: string | ReactNode;
};

export default function HeaderBigTitle(props: Props) {
  return (
    <div className="m-auto px-5 lg:px-28 lg:py-32">
      <h1 className="text-[10vw] font-mona uppercase font-bold text-whiteGrey text-center leading-none">
        {props.title}
      </h1>
    </div>
  );
}
