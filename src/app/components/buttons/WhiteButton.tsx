import Link from "next/link";

type Props = {
  content: string;
  path: string;
  blank?: boolean;
};

export default function WhiteButton(props: Props) {
  // TARGET BLANK
  if (props.blank) {
    return (
      <a
        href={props.path}
        target="_blank"
        className=" inline-block bg-white/90 py-3 px-10 rounded-3xl text-blue uppercase font-normal text-sm sm:text-base hover:bg-white transition-all"
      >
        {props.content}
      </a>
    );
  }

  // TARGET DEFAULT
  return (
    <Link
      href={props.path}
      className=" inline-block bg-white/90 py-3 px-10 rounded-3xl text-blue uppercase font-normal text-sm lg:text-base hover:bg-white transition-all"
    >
      {props.content}
    </Link>
  );
}
