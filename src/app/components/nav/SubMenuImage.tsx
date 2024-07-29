import Image from "next/image";

type Props = {
  index: number;
  images: Array<string>;
};

export default function SubMenuImage(props: Props) {
  if (props.index != 0) {
    return (
      <Image
        className="h-full object-cover"
        src={props.images[props.index - 1]}
        alt={""}
        width={1080}
        height={720}
        priority={false}
      />
    );
  } else return <></>;
}
