type Props = {
  content: string;
};

export default function HeaderSpan(props: Props) {
  return (
    <span className="max-lg:text-center max-lg:w-[80%] absolute bottom-8 lg:bottom-16 left-1/2 -translate-x-1/2 bg-whiteGrey/50 py-3 px-8 rounded-full uppercase text-sm text-blue backdrop-blur-sm">
      {props.content}
    </span>
  );
}
