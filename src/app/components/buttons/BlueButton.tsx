type Props = {
  content: string;
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
        className=" bg-blue py-3 px-10 rounded-3xl text-white uppercase font-normal text-sm sm:text-base hover:bg-blue transition-all"
      >
        {props.content}
      </a>
    );
  }

  // TARGET DEFAULT
  return (
    <a
      href={props.path}
      className=" bg-blue/90 py-3 px-10 rounded-3xl text-white uppercase font-normal text-sm lg:text-base hover:bg-blue transition-all"
    >
      {props.content}
    </a>
  );
}
